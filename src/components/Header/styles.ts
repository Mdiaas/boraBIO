import { styled } from "@stitches/react";
import Link from "next/link";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
export const Header = styled('div', {
  width: '100%',
  maxWidth: 512,
  margin: '4rem auto',
  display: "flex",
  alignItems:"center",
  justifyContent:"flex-end",

  svg:{
    color: '$golden',
    cursor: "pointer"
  }
})
export const ContainerControllers = styled('div',{
  width:'100%',
  display:'flex',
  alignItems:'center',
  justifyContent:'flex-end',
  gap: '2rem',

  button:{
    all:'unset',
    cursor: 'pointer',
    color: '$golden',
    border: '1px solid $golden',
    padding: '1rem 1rem',
    borderRadius: 8,
    minWidth: '5rem',
    display:'flex',
    alignItems: 'center',
    justifyContent:'center',
    transition: '0.5s',
    '&:hover':{
      transition: '0.5s',
      color: '$gray800',
      backgroundColor: '$golden',
    }
  },

  '@media (max-width: 900px)':{
    justifyContent:'center',
  }
})

export const DropdownMenuOption = styled(DropdownMenu.Root, {
  
})
export const LinkSignUp = styled(Link, {
  all: 'unset',
  cursor: 'pointer',
  color: '$golden',
  border: '1px solid $golden',
  padding: '1rem 1rem',
  borderRadius: 8,
  minWidth: '5rem',
  display:'flex',
  alignItems: 'center',
  justifyContent:'center',
  transition: '0.5s',
  '&:hover':{
    transition: '0.5s',
    color: '$gray800',
    backgroundColor: '$golden',
  }
})
export const MenuContent = styled(DropdownMenu.Content, {
  minWidth: 200,
  backgroundColor: '$gray800',
  borderRadius: 8
})
export const MenuItem = styled(DropdownMenu.Item, {
  lineHeight: 3,
  padding: '1rem 1rem',
  minWidth: 200,
  cursor: 'pointer'
})

export const ButonLogoff = styled('button',{
  all:'unset',
  width:'100%'
})

export const LinkEdit = styled(Link,{
  all:'unset',
  width:'100%'
})