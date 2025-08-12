import { AppSideBar } from "@/components/StudentSideBar";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

// const cookieStore = await cookies()
// const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

export default function studentLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeProvider 
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange> 
                
                    
                {/* defaultOpen={defaultOpen} */}
                <SidebarProvider >
                <AppSideBar />
                <main className="w-full">
                        
                     <Navbar />
                     <div className="px-4">
                      {children}
                       </div>
                        
                </main>
                 </SidebarProvider>
            </ThemeProvider>
        </>
            

    )
}