import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ValueProposition } from "@/components/ValueProposition";
import { Philosophy } from "@/components/Philosophy";
import { FeaturedWork } from "@/components/FeaturedWork";
import { ResourceHub } from "@/components/ResourceHub";
import { Testimonials } from "@/components/Testimonials";
import { BlogInsights } from "@/components/BlogInsights";
import { PersonalIntro } from "@/components/PersonalIntro";
import { SubscriptionOffer } from "@/components/SubscriptionOffer";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-accent text-white">
      <Hero />
      <ValueProposition />
      <Features />
      <Philosophy />
      <FeaturedWork />
      <ResourceHub />
      <Testimonials />
      <BlogInsights />
      <PersonalIntro />
      <SubscriptionOffer />
      <UpcomingEvents />
      <CallToAction />
    </div>
  );
};

export default Index;