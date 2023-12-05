import { styled } from "@stitches/react";

export const Container = styled('main', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems:'center',
  margin: '2rem auto',
  width: '100%',
  maxWidth: 512
})

export const Header = styled('div',{
  display: 'flex',
  flexDirection: 'column',
  alignItems:'center',
  justifyContent:'center',
  gap: '0.25rem',
  color: '$gray200',
  h2:{
    color: '$golden' 
  }
})

export const ListLinks = styled('div', {
  width:512,
  marginTop: '4rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems:'center',
  justifyContent:'center',
  gap: '2rem',
  minWidth: 240,
  '@media (max-width: 900px)':{
    width:'80%',
  }
})

export const ButtonLink = styled('a', {
  all:'unset',
  maxWidth: 368,
  width: '100%',
  padding: '1.5rem 0',
  cursor: 'pointer',
  border: 'none',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  gap: '0.5rem',
  borderRadius: '0.5rem',
  backgroundSize: '300% 100%',
  mozTransition: 'all .4s ease-in-out',
  oTransition: 'all .4s ease-in-out',
  webkitTransition: 'all .4s ease-in-out',
  transition: 'all .4s ease-in-out',
  '&:hover':{
    backgroundPosition: '100% 0',
    mozTransition: 'all .4s ease-in-out',
    oTransition: 'all .4s ease-in-out',
    webkitTransition: 'all .4s ease-in-out',
    transition: 'all .4s ease-in-out',
    boxShadow: '4px 4px 15px 0 rgba(128, 128, 128, 1)',
  }
})