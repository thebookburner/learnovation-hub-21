import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ValueProposition } from "@/components/ValueProposition";

const Index = () => {
  return (
    <div className="min-h-screen bg-accent text-white">
      <Hero />
      <Features />
      <ValueProposition />
    </div>
  );
};

export default Index;