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
    description: "Transform your organization with strategic solutions and innovative digital experiences",
    benefits: [
      "Brand Strategy & Digital Marketing",
      "Custom Software Development",
      "UI/UX Design & Product Strategy",
      "Strategic Consulting & Workshops"
    ]
  },
  {
    id: "learners",
    icon: GraduationCap,
    title: "Lifelong Learners",
    description: "Access frameworks and resources to accelerate your professional growth",
    benefits: [
      "Personal Development Programs",
      "Knowledge Management Systems",
      "Learning Technology Integration",
      "Career Advancement Strategies"
    ]
  },
  {
    id: "innovators",
    icon: Lightbulb,
    title: "Innovators",
    description: "Partner with us to bring your groundbreaking ideas to life",
    benefits: [
      "Product Development & MVP Design",
      "Technology Consulting",
      "Innovation Workshops",
      "Go-to-Market Strategy"
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
            Solutions That Drive Growth
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tailored digital solutions and strategic consulting for businesses, innovators, and professionals
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
                      <HoverCardContent className="w-80 bg-background border-border">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">{benefit}</h4>
                          <p className="text-sm text-muted-foreground">
                            Let's collaborate to achieve your goals through innovative solutions and strategic guidance.
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