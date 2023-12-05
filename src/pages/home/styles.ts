import { styled } from "../../styles";

export const Container = styled('div',{
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  height:'100vh',
  gap: '1rem',
  '@media (max-width: 900px)':{
    flexDirection: 'column',
    gap: '2rem'
  }
})

export const Form = styled('form',{
  display:"flex",
  flexDirection: "column",
  gap: '1rem',
  width: '100%',
  maxWidth: 512,
  backgroundColor: "$gray800",
  padding: '2rem 2rem',
  borderRadius: 16,
  '> label':{
    display:"flex",
    flexDirection: "column",
    gap: '0.25rem',
    color: '$golden'
  },
  
  '@media (max-width: 900px)':{
    maxWidth: '90%'
  }
})
export const InputText = styled('input',{
  all:'unset',
  backgroundColor: '$gray900',
  padding: '0.75rem 0.75rem',
  color: "$gray300",
  borderRadius: 6
})

export const ControlsContainer = styled('div', {
  marginTop: '1rem',
  display:"flex",
  justifyContent: "space-between",
  gap: '0.5rem'
})

export const Button = styled('button', {
  all: 'unset',
  width: '50%',
  cursor:'pointer',
  color: '$golden',
  border: '1px solid $golden',
  padding: '1rem 2rem',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  borderRadius: 8,
  transition: 'background-color 0.5s ease-in',
  '&:hover':{
    color: '$gray800',
    backgroundColor: '$golden',
  }
})

export const FormError = styled('p', {
  fontSize: '0.75rem',
  color: "$red100"
})

export const HeroContainer = styled('div', {
  maxWidth: 512,
  textAlign:'center',
  h1:{
    color: "$golden"
  },
  '@media (max-width: 900px)':{
    gap: '2rem',
    width:'100%',
  }
})