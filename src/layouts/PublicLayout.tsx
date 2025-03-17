import { Footer } from "@/components/Footer"
import Header from "@/components/Header"
import AuthHandler from "@/handlers/AuthHandler"
import { Outlet } from "react-router-dom"

export const PublicLayout = () => {
  return (
    <div className="w-full  min-h-screen relative flex flex-col">
        {/* handler to store the user data */}
       <div className="absolute top-0 left-0 w-full h-full z-0">
       <img
        src="/assets/img/bg.png"
        className="w-full h-full object-cover"
        alt="Background"
      /></div> 
        
      <div className="relative z-10 flex flex-col flex-grow">
        {/* handler to store the user data */}
        <AuthHandler />

        <Header />

          <Outlet />
        <Footer/>
      </div>
      
    </div>
  )
}

