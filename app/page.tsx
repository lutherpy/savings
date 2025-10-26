import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationalSection } from "@/components/educational-section"
import { ProductsSection } from "@/components/products-section"
import { ExecutiveSection } from "@/components/executive-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <EducationalSection />
      <ProductsSection />
      <ExecutiveSection />
      <Footer />
    </main>
  )
}
