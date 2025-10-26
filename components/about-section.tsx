import { Shield, TrendingUp, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Sobre a SAVINGS
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Somos uma distribuidora de valores mobiliários comprometida em
            democratizar o acesso aos investimentos. Com anos de experiência no
            mercado financeiro, oferecemos as melhores soluções para você
            alcançar seus objetivos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#4a8b91] to-[#35696b] flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Segurança</h3>
            <p className="text-muted-foreground leading-relaxed">
              Regulamentados pela CMC e com as melhores práticas de segurança do
              mercado.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#4a8b91] to-[#35696b] flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Rentabilidade</h3>
            <p className="text-muted-foreground leading-relaxed">
              Acesso aos melhores produtos do mercado para maximizar seus
              retornos.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#4a8b91] to-[#35696b] flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Atendimento</h3>
            <p className="text-muted-foreground leading-relaxed">
              Equipe especializada pronta para ajudar você em cada etapa da sua
              jornada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
