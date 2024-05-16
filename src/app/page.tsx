import { MenuSandwich } from "@/components/menu";
import "./globals.css";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-12 mainClass">
      <MenuSandwich/>
      <div className="projeto">
        <p>Olá, tudo bem?
        </p>
      </div>
    </main>
  );
}
