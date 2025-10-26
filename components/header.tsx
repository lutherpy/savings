import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Versão Desktop */}
        <div className="hidden md:flex items-center justify-between lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-60 h-10 flex items-center justify-center">
              <Image
                src="/logo-savings.jpg"
                alt="Logo Savings"
                width={300}
                height={10}
                className="object-contain w-full h-20"
                priority
              />
            </div>
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Página Inicial
            </Link>
            <Link
              href="#sobre"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#educacao"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Conteúdo Didáctico
            </Link>
            <Link
              href="#produtos"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#board"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Corpo Executivo
            </Link>
          </nav>

          <Button className="bg-gradient-to-r from-[#4a8b91] to-[#35696b] text-white hover:opacity-90">
            Abrir Conta
          </Button>
        </div>

        {/* Versão Mobile */}
        <div className="flex flex-col items-center justify-center md:hidden py-4 space-y-3">
          <Link href="/" className="flex items-center justify-center">
            <div className="w-48 h-auto flex items-center justify-center">
              <Image
                src="/logo-savings.jpg"
                alt="Logo Savings"
                width={250}
                height={80}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </Link>

          <Button className="w-full max-w-[200px] bg-gradient-to-r from-[#4a8b91] to-[#35696b] text-white hover:opacity-90">
            Abrir Conta
          </Button>
        </div>
      </div>
    </header>
  );
}
