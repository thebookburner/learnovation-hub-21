import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ValueProposition } from "@/components/ValueProposition";
import { Philosophy } from "@/components/Philosophy";
import { FeaturedWork } from "@/components/FeaturedWork";
import { ResourceHub } from "@/components/ResourceHub";

const Index = () => {
  return (
    <div className="min-h-screen bg-accent text-white">
      <Hero />
      <ValueProposition />
      <Features />
      <Philosophy />
      <FeaturedWork />
      <ResourceHub />
    </div>
  );
};

export default Index;