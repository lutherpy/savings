import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-[#4a8b91] to-[#35696b] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium">
              Distribuidora Autorizada pela CMC
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Invista com Segurança e Inteligência
          </h1>

          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            A SAVINGS é sua parceira em investimentos. Oferecemos soluções
            completas em valores mobiliários com tecnologia de ponta e
            atendimento personalizado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-[#35696b] hover:bg-white/90 font-semibold"
            >
              Começar a Investir
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
