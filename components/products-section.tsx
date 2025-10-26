import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Landmark, TrendingUp, Coins } from "lucide-react";

export function ProductsSection() {
  const products = [
    {
      icon: Building2,
      title: "Acções",
      description:
        "Invista em empresas listadas na bolsa de valores e participe do crescimento das maiores companhias do país.",
      features: ["Day Trade", "Swing Trade", "Buy & Hold"],
    },
    {
      icon: Landmark,
      title: "Renda Fixa",
      description:
        "Títulos públicos e privados com rentabilidade previsível e diferentes prazos de vencimento.",
      features: ["Tesouro Direto", "CDBs", "LCIs e LCAs"],
    },
    {
      icon: TrendingUp,
      title: "Fundos de Investimento",
      description:
        "Carteiras geridas por profissionais especializados com diversas estratégias de investimento.",
      features: [
        "Fundos Multimercado",
        "Fundos de Ações",
        "Fundos Imobiliários",
      ],
    },
    {
      icon: Coins,
      title: "COE",
      description:
        "Certificados de Operações Estruturadas que combinam renda fixa e variável em um único produto.",
      features: [
        "Capital Protegido",
        "Capital em Risco",
        "Diversas Estratégias",
      ],
    },
  ];

  return (
    <section id="produtos" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Serviços
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Uma ampla gama de serviços de investimento para atender todos os
            perfis e objectivos financeiros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-[#4a8b91] to-[#35696b] flex items-center justify-center">
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* <Button variant="outline" className="w-full bg-transparent">
                  Saiba Mais
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
