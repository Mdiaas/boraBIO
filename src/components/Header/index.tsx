import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Gear } from "phosphor-react";
import { ButonLogoff, ContainerControllers, DropdownMenuOption, Header, LinkEdit, LinkSignUp, MenuContent, MenuItem } from "./styles";

export function HeaderPage(){
  const {data} = useSession();
  const isLoggedIn = !!data
  
  function handleLogin(){
    signIn('google')
  }
  function handleLogoff(){
    signOut()
  }
  return(
    <Header>
      {isLoggedIn && 
          <DropdownMenuOption>
            <DropdownMenu.Trigger asChild>
              <Gear size={32}></Gear>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
            <MenuContent className="DropdownMenuContent" sideOffset={15}>
            <MenuItem className="DropdownMenuItem">
              <LinkEdit href={'/generate-profile'}>Editar perfil</LinkEdit>
            </MenuItem>
            <MenuItem className="DropdownMenuItem">
              <ButonLogoff onClick={handleLogoff}>Sair</ButonLogoff>
            </MenuItem>
            </MenuContent>
            </DropdownMenu.Portal>
          </DropdownMenuOption>
      }
      {!isLoggedIn && 
        <ContainerControllers>
          <button onClick={handleLogin}>Entrar</button>
          <LinkSignUp href={'/'}>Cadastre-se</LinkSignUp>
        </ContainerControllers>
      }
    </Header>
  )
}