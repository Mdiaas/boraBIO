import { styled } from "@stitches/react";

export const Container = styled('main',{
  display:"flex",
  flexDirection:'column',
  maxWidth:1180,
  margin: '0 auto',
  marginTop: 96,
  height: '100vh'
})

export const HeaderProfile = styled('div', {
  display:"flex",
  flexDirection:'column',
  justifyContent:"center",
  alignItems:"center",
  gap: 8,
  
  h2:{
    fontSize: '$xl',
    color: '$golden'
  },
  span:{
    color: '$gray200'
  }
})

export const FormLinks = styled('form', {
  marginTop: '3rem',
  width: '60%',
  margin: '0 auto',
  display:'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  label:{
    display:'flex',
    flexDirection: 'column',
    gap:'0.25rem',
    color: '$golden',
  }
})

export const InputText = styled('input',{
  all:'unset',
  padding: '0.75rem 0.75rem',
  borderRadius: 6,
  backgroundColor: '$gray800',
  border: '1px solid $gray800',
  flex:1,
  '&:focus':{
    border: '1px solid $golden'
  },
  '&:disabled':{
    backgroundColor: '$gray900'
  }
})




export const Button = styled('button', {
  all:"unset",
  marginTop: '1.5rem',
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  gap: '0.5rem',
  color: '$golden',
  border: '1px solid $golden',
  cursor:'pointer',
  padding: '1rem 2rem',
  borderRadius: 8,
  transition: 'background-color 0.2s ease-in',
  '&:hover':{
    color: '$gray800',
    backgroundColor: '$golden',
  }
})

export const InputGroup = styled('div',{
  display:"flex",
  alignItems:"center",
  gap: '0.5rem',
})

export const FormError = styled('p', {
  color: '$red500',
  fontSize: '$sm'
})