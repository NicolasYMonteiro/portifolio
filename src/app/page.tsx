import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Portfolio from "@/components/portfolio/portfolio";
import Servicos from "@/components/servicos/servicos";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Servicos />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
