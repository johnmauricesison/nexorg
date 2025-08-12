import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { WebNavigationMenu } from "@/components/WebNavigationMenu";

export default function Home() {
  return (
    <>
      <ThemeProvider attribute="class"defaultTheme="system"enableSystem disableTransitionOnChange> 
              <WebNavigationMenu></WebNavigationMenu>
      </ThemeProvider>
      

    </>
  );
}
