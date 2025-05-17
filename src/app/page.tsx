import About from "@/components/about/about";
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
      
    </div>
  );
}
