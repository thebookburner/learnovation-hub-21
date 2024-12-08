import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, GraduationCap, Lightbulb } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const audiences = [
  {
    id: "businesses",
    icon: Building2,
    title: "Businesses",
    description: "Transform your organization with strategic insights and innovative solutions",
    benefits: [
      "Data-driven decision making frameworks",
      "Innovation acceleration programs",
      "Strategic consulting and workshops",
      "Custom AI implementation strategies"
    ]
  },
  {
    id: "learners",
    icon: GraduationCap,
    title: "Lifelong Learners",
    description: "Master self-directed learning and unlock your full potential",
    benefits: [
      "Personalized learning frameworks",
      "Cognitive enhancement techniques",
      "Knowledge synthesis methods",
      "Mental model development"
    ]
  },
  {
    id: "innovators",
    icon: Lightbulb,
    title: "Innovators",
    description: "Bridge technology and human potential to create breakthrough solutions",
    benefits: [
      "AI-driven innovation tools",
      "Creative problem-solving methods",
      "Future-thinking frameworks",
      "Technology integration strategies"
    ]
  }
];

export const ValueProposition = () => {
  const [activeTab, setActiveTab] = useState("businesses");

  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-40" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Empowering Growth Across Domains
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover tailored solutions that match your unique journey and aspirations
          </p>
        </div>

        <Tabs
          defaultValue="businesses"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-4xl mx-auto"
        >
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {audiences.map(({ id, title }) => (
              <TabsTrigger
                key={id}
                value={id}
                className="text-sm md:text-base py-3"
              >
                {title}
              </TabsTrigger>
            ))}
          </TabsList>

          {audiences.map(({ id, icon: Icon, title, description, benefits }) => (
            <TabsContent
              key={id}
              value={id}
              className="mt-8 focus-visible:outline-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-accent/50 rounded-lg p-6 md:p-8 border border-border/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-300">{description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <HoverCard key={index}>
                      <HoverCardTrigger asChild>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="p-4 rounded-md bg-background/50 border border-border/50 cursor-pointer"
                        >
                          {benefit}
                        </motion.div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">{benefit}</h4>
                          <p className="text-sm text-muted-foreground">
                            Discover how this benefit can transform your journey and accelerate your growth.
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};