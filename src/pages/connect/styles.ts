import { styled } from "@stitches/react";

export const Container = styled('main', {
  height: '100vh',
  width: '100%',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
})

export const Box = styled('div', {
  display:'flex',
  flexDirection:'column',
  gap: '1rem',
  backgroundColor: '$gray800',
  padding: '4rem 4rem',
  borderRadius: 16,

  h1:{
    fontSize: '$2xl',
    color: '$golden'
  },
  p:{
    color: '$gray300',
  }
})
export const ButtonContainer = styled('div',{
  alignItems:'right',
})
export const Button = styled('button', {
  all:"unset",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  gap: 8,
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