import AdminHeader from "@/components/admin_components/adminHeader"
import { Metadata } from "next"

export  const metadata:Metadata={
    title:"admin section",
    robots:{
         index:false,
         nocache:true,   
    }
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section className=" flex flex-col sm:flex-row gap-4 sm:gap-20">
        
        <AdminHeader/>        

        {children}

        </section>
}