import { Sidebar } from "@/layout/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"flex flex-col justify-between min-h-screen"}>
        <header>header</header>
        <main className={"flex flex-grow"}>
          <aside className="w-96">
            <Sidebar />
          </aside>

          <article className={"flex-grow"}>{children}</article>
        </main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
