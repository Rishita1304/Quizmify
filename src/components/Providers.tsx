 import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
 
 type Props = {
    children: React.ReactNode
 }
 
 const Providers = ({children}: Props) => {
   return (
     <SessionProvider>
        {children}
     </SessionProvider>
   )
 }
 
 export default Providers