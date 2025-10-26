import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#4a8b91] to-[#35696b] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">SAVINGS</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Sua parceira em investimentos seguros e rentáveis.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#sobre"
                  className="text-white/80 hover:text-white text-sm transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="#educacao"
                  className="text-white/80 hover:text-white text-sm transition-colors"
                >
                  Educação
                </Link>
              </li>
              <li>
                <Link
                  href="#produtos"
                  className="text-white/80 hover:text-white text-sm transition-colors"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="#equipe"
                  className="text-white/80 hover:text-white text-sm transition-colors"
                >
                  Equipe
                </Link>
              </li>
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="font-bold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li className="text-white/80 text-sm">Acções</li>
              <li className="text-white/80 text-sm">Renda Fixa</li>
              <li className="text-white/80 text-sm">Fundos de Investimento</li>
              <li className="text-white/80 text-sm">COE</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Mail className="w-4 h-4" />
                contato@savings.ao
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Phone className="w-4 h-4" />
                +244923 295 140
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin className="w-4 h-4" />
                Telef. (Geral) +244 923 295 140 Rua: katakulu Mego, n°.21,
                Alvalade - Maianga Luanda - Angola.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 SAVINGS. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
          <p className="text-white/40 text-xs mt-4 text-center md:text-left">
            Telef. (Geral) +244 923 295 140 Rua: katakulu Mego, n°.21, Alvalade
            - Maianga Luanda - Angola.
          </p>
        </div>
      </div>
    </footer>
  );
}
