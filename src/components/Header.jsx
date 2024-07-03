import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { LinkIcon, LogOut } from 'lucide-react'
import { UrlState } from '@/context'
import { logout } from '@/db/apiAuth'
import {BarLoader} from "react-spinners";
import useFetch from "@/hooks/useFetch";

const Header = () => {

  const navigate= useNavigate()
  const {loading, fn: fnLogout} = useFetch(logout);
  
  const {user, fetchUser}=UrlState()

  return (
    <>
    <nav className='p-4 flex justify-between items-center'>

      <Link to='/'>
        <img src='/logo.png' alt='trimrr logo' className='h-16' />
      </Link>

      <div className="flex gap-4">
        {(!user) ?
        <Button onClick={()=>navigate("/auth")}>Login</Button>
        :(
          <DropdownMenu>
            <DropdownMenuTrigger className='w-10 rounded-full overflow-hidden'>
            <Avatar>
              <AvatarImage src={user?.user_metadata?.profile_pic} className="object-contain" />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className='text-center'>{user?.user_metadata?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to='/dashboard' className='flex items-center'>
                  <LinkIcon className='mr-2 h-3 w-4'/>
                  <span>My Links</span>
                </Link>  
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">
                <LogOut className='mr-2 h-3 w-4'/>
                <span onClick={()=>{fnLogout().then(() => {
                      fetchUser();
                      navigate("/");
                    });
                  }}

                >LogOut</span>
              </DropdownMenuItem>
            
            </DropdownMenuContent>
          </DropdownMenu>
        )
        }  
      </div>

    </nav>
    {loading && 
    <div className='flex-col justify-center items-center h-40 mt-40'> 
      <BarLoader className="mb-4 mx-auto " width={"60%"}  color="#36d7b7" />
      <div className='text-red-500 font-semibold text-lg w-fit mx-auto'>Logging Out ...</div>
    </div>}
    </>
  )
}
export default Header