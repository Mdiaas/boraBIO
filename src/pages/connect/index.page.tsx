import { ArrowRight } from "phosphor-react";
import { Box, Button, ButtonContainer, Container } from "./styles";
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

export default function ConnectProvider(){
  const session = useSession()
  const router = useRouter()
  const isSignedIn = session.status === 'authenticated'
  console.log(isSignedIn)
  async function handleConnectGoogle(){
    await signIn('google')
  } 
  async function handleNavigateToNextStep(){
    router.push('/generate-profile')
  }
  return(
    <>
      <NextSeo
        title="Conecte seu usuário com a conta do google | Bora BIO"
        noindex
      />
      <Container>
        <Box>
          <h1>Estamos quase lá!</h1>
          <p>Agora que você já garantiu seu nome de usuário, basta fazer o login com sua conta google para prosseguirmos</p>
          <ButtonContainer>
            {
              isSignedIn ?
              <Button disabled={!isSignedIn} onClick={handleNavigateToNextStep}>
                Próximo passo <ArrowRight />
              </Button>
              :
              <Button onClick={handleConnectGoogle}>
              Conectar-se
              <ArrowRight />
            </Button>
            
            }
          </ButtonContainer>
        </Box>
      </Container>
    </>
  )
}