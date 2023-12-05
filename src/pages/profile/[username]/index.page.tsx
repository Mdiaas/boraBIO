import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  SpotifyLogo,
  TiktokLogo,
  YoutubeLogo 
} from "phosphor-react";

import { Avatar } from "../../../components/Avatar";
import { HeaderPage } from "../../../components/Header";
import { prisma } from "../../../lib/prisma";
import { ButtonLink, Container, Header, ListLinks } from "./styles";

interface Link{
  socialName: string,
  socialUrl: string,
  buttonColor: string,
}
interface ProfileProps{
  user: {
    name: string
    username: string
    avatarUrl: string
    links: Link[]
  }
}

export default function Profile({user} : ProfileProps){
  
  const logos = {
    'Github': <GithubLogo size={32}/>,
    'LinkedIn' : <LinkedinLogo size={32}/>,
    'Youtube' : <YoutubeLogo size={32}/>,
    'Instagram' : <InstagramLogo size={32}/>,
    'Spotify' : <SpotifyLogo size={32} />,
    'TikTok' : <TiktokLogo size={32} />,
    'Facebook' : <FacebookLogo size={32} />
  }
  

  return (
    <>
      <NextSeo
        title={`Perfil de ${user.username} | Bora BIO`}
      />
      <HeaderPage />
      <Container>
        <Header>
          <Avatar src={user.avatarUrl} referrerPolicy="no-referrer"></Avatar>
          <h2>{user.name}</h2>
          <span>@{user.username}</span>
        </Header>
        <ListLinks>
          {user.links.map((link) => {
            
            return (
              <ButtonLink key={link.socialName} target="_blank" href={`https://${link.socialUrl}`} style={{backgroundColor:link.buttonColor}}>
                {logos[link.socialName as keyof typeof logos]}{link.socialName}
              </ButtonLink>
            )
          })}
        </ListLinks>
      </Container>
    </>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async({ params }) => {
  const username = String(params?.username)
  const user = await prisma.user.findUnique({
    where:{
      username
    },
    include:{
      UserLink: true
    }
  })
  if(!user){
    return{
      notFound: true
    }
  }
  return {
    props: {
      user: {
        name: user.name,
        username: user.username,
        avatarUrl: user.avatar_url,
        links: user.UserLink
      },
    },
    revalidate: 60 * 5 * 1, // 5 minutes
  }
}