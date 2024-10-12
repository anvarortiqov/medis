import { Sidebar } from "@/layout/Sidebar";
import { Header } from "@/layout/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"flex flex-col justify-between min-h-screen"}>
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[65px] lg:px-6">
          <Header/>
      </header>
      <main className={"flex flex-grow"}>
          <aside className="w-80">
              <Sidebar/>
          </aside>

          <article className={"flex-grow"}>{children}</article>
      </main>
      <footer> </footer>
      </body>
    </html>
  );
}
