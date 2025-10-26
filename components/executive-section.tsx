import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function ExecutiveSection() {
  return (
    <section id="equipe" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Corpo Executivo
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Nossa liderança é composta por profissionais experientes e
            comprometidos com a excelência.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <Card className="w-full max-w-sm border-2 border-primary/20">
              <CardContent className="pt-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-primary/20">
                  <AvatarFallback className="bg-gradient-to-br from-[#4a8b91] to-[#35696b] text-white text-2xl font-bold">
                    JC
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-1">
                  Coutinho Nobre Miguel
                </h3>
                <p className="text-sm text-primary font-semibold mb-2">
                  Accionista Maioritário
                </p>
              </CardContent>
            </Card>
          </div>
          {/* CEO */}
          <div className="flex justify-center mb-12">
            <Card className="w-full max-w-sm border-2 border-primary/20">
              <CardContent className="pt-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-primary/20">
                  <AvatarFallback className="bg-gradient-to-br from-[#4a8b91] to-[#35696b] text-white text-2xl font-bold">
                    JC
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold mb-1">Judith Correia</h3>
                <p className="text-sm text-primary font-semibold mb-2">
                  Presidente do Conselho de Administração
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Diretores */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6 text-center">
                <Avatar className="w-16 h-16 mx-auto mb-4 border-2 border-primary/20">
                  <AvatarFallback className="bg-gradient-to-br from-[#4a8b91] to-[#35696b] text-white text-lg font-bold">
                    CL
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold mb-1">Carlos Lima</h3>
                <p className="text-sm text-primary font-semibold mb-2">
                  Administrador Executivo
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6 text-center">
                <Avatar className="w-16 h-16 mx-auto mb-4 border-2 border-primary/20">
                  <AvatarFallback className="bg-gradient-to-br from-[#4a8b91] to-[#35696b] text-white text-lg font-bold">
                    PA
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold mb-1">Paulo Almeida</h3>
                <p className="text-sm text-primary font-semibold mb-2">
                  Diretor Comercial
                </p>
                <p className="text-xs text-muted-foreground">
                  MBA em Finanças pela FGV
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6 text-center">
                <Avatar className="w-16 h-16 mx-auto mb-4 border-2 border-primary/20">
                  <AvatarFallback className="bg-gradient-to-br from-[#4a8b91] to-[#35696b] text-white text-lg font-bold">
                    AS
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold mb-1">Ana Santos</h3>
                <p className="text-sm text-primary font-semibold mb-2">
                  Diretora de Compliance
                </p>
                <p className="text-xs text-muted-foreground">
                  Certificação CPA-20 e CEA
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Gerentes */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                name: "Carlos Mendes",
                role: "Gerente de Produtos",
                initials: "CM",
              },
              {
                name: "Juliana Lima",
                role: "Gerente de Atendimento",
                initials: "JL",
              },
              { name: "Fernando Rocha", role: "Gerente de TI", initials: "FR" },
              {
                name: "Beatriz Souza",
                role: "Gerente de Marketing",
                initials: "BS",
              },
            ].map((manager, index) => (
              <Card
                key={index}
                className="hover:border-primary/40 transition-colors"
              >
                <CardContent className="pt-6 text-center">
                  <Avatar className="w-12 h-12 mx-auto mb-3">
                    <AvatarFallback className="bg-gradient-to-br from-[#4a8b91] to-[#35696b] text-white text-sm font-bold">
                      {manager.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-sm font-bold mb-1">{manager.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {manager.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
