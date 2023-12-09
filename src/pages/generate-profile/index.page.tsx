import { useSession } from "next-auth/react";
import { Avatar } from "../../components/Avatar";
import { Button, Container, FormError, FormLinks, HeaderProfile, InputGroup, InputText } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "../../components/Checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";
import { useRouter } from "next/router";
import { unstable_getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../api/auth/[...nextauth].api";
import { prisma } from "../../lib/prisma";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";

const linksFormSchema = z.object({
  links: z.array(
    z.object({
      enabled: z.boolean(),
      socialName: z.string(),
      socialUrl: z.string(),
      buttonColor: z.string()
    })
  )
  .transform((links) => {
    const filteredLinks = links.filter((link) => link.enabled)
    return filteredLinks
  }) // filtrando para remover do array os campos desabilitados
  .refine((links) => links.length > 0, {
    message: 'É necessário preencher pelo menos uma url',
  })
  .transform((links) => {
    return links.map((link) => {
      return {
        socialUrl: link.socialUrl,
        socialName: link.socialName,
        buttonColor: link.buttonColor
      }
    })
  })
  .refine((links) => {
    return links.every((link) =>{
      const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
      const regex = new RegExp(expression);
      return link.socialUrl.match(regex)
    })
  },{
    message: 'Todas urls ativas precisam estar preenchidas corretamente'
  })
})

type LinksFormInput = z.input<typeof linksFormSchema>
type LinksFormOutput = z.output<typeof linksFormSchema>

interface userLinksProps{
  userLinks:{
    socialUrl: string,
    socialName: string,
    buttonColor: string,
  }[]
}

export default function GenerateLinks({userLinks}: userLinksProps){
  const Socials = [
    'Instagram',
    'Youtube',
    'TikTok',
    'LinkedIn',
    'Github',
    'Facebook',
    'Spotify',
    'Site pessoal',
  ]
  const formLinks : any = []
  Socials.map((social) => {
    const linkUrl = userLinks.find(link => { return social === link.socialName})
    
    if(linkUrl){
      formLinks.push({
        enabled: true,
        socialUrl: linkUrl.socialUrl,
        socialName: linkUrl.socialName,
        buttonColor: linkUrl.buttonColor,
      })
    }else{
      formLinks.push({
        enabled: false,
        socialUrl: '',
        socialName: social,
        buttonColor: "#ffffff",
      })
    }
  })
  
  const {register, handleSubmit, control, watch, formState:{
    isSubmitting, errors
  }} = useForm<LinksFormInput>({
    resolver: zodResolver(linksFormSchema),
    defaultValues:{
      links: formLinks
    }
  })

  const { data } = useSession()
  const avatar_url = data?.user.avatar_url
  const name = data?.user.name
  const username = data?.user.username
  const router = useRouter()
  async function handleRegisterLinks(data: any){
    const { links } = data as LinksFormOutput
    
    api.post('/users/generate-profile-links', {links})
    await router.push(`/profile/${username}`)
  }
  const { fields } = useFieldArray({
    control,
    name: 'links'
  })
  const links = watch('links')
  return(
    <>
      <NextSeo
        title="Configure sua conta e os links que deseja exibir | BioLinks"
        noindex
      />
      <Container>
        <HeaderProfile>
          <Avatar src={avatar_url} referrerPolicy="no-referrer" />
          <h2>{name}</h2>
          <span>@{username}</span>
        </HeaderProfile>
        <FormLinks onSubmit={handleSubmit(handleRegisterLinks)}>
            {
              fields.map((field, index) => {
                return(
                  <label key={field.id}>
                    <span>{field.socialName}</span>
                    <InputGroup>
                      <input type="hidden"
                      {...register(`links.${index}.socialName`)} />
                      <InputText 
                        type="text" 
                        {...register(`links.${index}.socialUrl`)} 
                        disabled={links[index].enabled === false}
                      />
                      <input type="color" {...register(`links.${index}.buttonColor`)} disabled={links[index].enabled === false} />
                      <Controller 
                        name={`links.${index}.enabled`}
                        control={control}
                        render={({field}) => {
                          return(
                            <Checkbox 
                              onCheckedChange={(checked) => {
                                field.onChange(checked === true)
                              }}
                              checked={field.value}
                            />
                          )
                        }}
                      />
                    </InputGroup>
                  </label>
                )
              })
            }
            {errors?.links?.message && (
              <FormError>{errors.links.message}</FormError>
            )}
            <Button type="submit" disabled={isSubmitting}>
              Gerar minha página
              <ArrowRight />
            </Button>
        </FormLinks>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async({req, res}) => {
  const session = await unstable_getServerSession(req,
     res,
      buildNextAuthOptions(req, res))
    const userLinks = await prisma.userLink.findMany({
      where:{
        user_id: session?.user?.id
      },
      select:{
        socialName: true,
        socialUrl: true
      }
    })

  return{
    props:{
      userLinks,
      session
    }
  }
}