import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../lib/axios'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { Button, Container, ControlsContainer, Form, FormError, HeroContainer, InputText } from './styles'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api'
import { NextSeo } from 'next-seo'
const registerUserSchema = z.object({
  username: z.string().min(3,{
    message : 'Necessário pelo menos 3 digítos'
  }).regex(/^([a-z\\-]+)$/i, {
    message: 'Digite somente letras e hifen',
  }),
  name: z.string().min(3, {
    message : 'Necessário pelo menos 3 digítos'
  })
})

type RegisterUserData = z.infer<typeof registerUserSchema>
export default function Home(){
  const { handleSubmit, register, formState:{ isSubmitting, errors } } = useForm<RegisterUserData>({
    resolver: zodResolver(registerUserSchema)
  })
  const [errorUsernameAlreadyTaken, setErrorUsernameAlreadyTaken] = useState('')
  const router = useRouter()
  async function handleRegisterUser({name, username}: RegisterUserData){
    try{
      await api.post('/users',{
        name,
        username
      })
      router.push('/connect')
    }catch(err){
      if (err instanceof AxiosError && err?.response?.data?.message) {
        setErrorUsernameAlreadyTaken(err.response.data.message)
        return
      }
    }
  }

  async function handleLoginGoogle(){
    await signIn('google')
  }
  return(
    <>
    <NextSeo
        title="Link in bio | BioLinks"
        description="Salve seus links para todos estarem por dentro de seus canais"
      />
    <Container>
      <HeroContainer>
        <h1>Seja bem vindo ao BioLinks</h1>
        <p>Aqui você poderá criar seu perfil e mandar para todos seus seguidores se manterem atualizados sobre o que você anda fazendo</p>
      </HeroContainer>
      <Form onSubmit={handleSubmit(handleRegisterUser)}>
        <label>
          Nome do usuário
          <InputText type="text" {...register('username')}/>
          {errors.username && <FormError>{errors.username.message}</FormError>}
        </label>
        <label>
          Nome completo
        <InputText type="text" {...register('name')}/>
        {errors.name && <FormError>{errors.name.message}</FormError>}
        
        { errorUsernameAlreadyTaken && <span>Nome do usuário já cadastrado, tente novamente</span>}
        </label>
        <ControlsContainer>
          <Button type="submit">Pré cadastro</Button>
          <Button onClick={handleLoginGoogle} type="button">Login com google</Button>
        </ControlsContainer>
      </Form>
    </Container>
    </>
  )
}

