import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, PiggyBank, LineChart, Wallet } from "lucide-react";

export function EducationalSection() {
  const educationalCards = [
    {
      icon: BookOpen,
      title: "O que são Valores Mobiliários?",
      description:
        "Valores mobiliários são títulos emitidos por empresas ou governos que representam direitos e deveres. Incluem Acções, Obrigações e Fundos de investimento e outros activos financeiros.",
    },
    {
      icon: PiggyBank,
      title: "Como Começar a Investir",
      description:
        "Comece definindo os seus objectivos financeiros, entenda o seu perfil de investidor e diversifique seus investimentos. Sempre invista apenas o que pode perder sem comprometer seu orçamento.",
    },
    {
      icon: LineChart,
      title: "Renda Fixa vs Renda Variável",
      description:
        "Renda fixa oferece retornos previsíveis e menor risco, ideal para reserva de emergência. Renda variável tem maior potencial de retorno, mas com mais volatilidade e risco.",
    },
    {
      icon: Wallet,
      title: "Diversificação de Carteira",
      description:
        "Não coloque todos os ovos na mesma cesta. Diversificar entre diferentes activos, sectores e classes reduz riscos e aumenta as chances de retornos consistentes no longo prazo.",
    },
  ];

  return (
    <section id="educacao" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Conteúdo Didáctico
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Aprenda os conceitos básicos sobre investimentos e tome decisões
            mais informadas sobre seu o futuro financeiro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {educationalCards.map((card, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-colors"
            >
              <CardHeader>
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[#4a8b91] to-[#35696b] flex items-center justify-center">
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {card.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
