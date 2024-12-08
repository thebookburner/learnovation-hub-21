import { Building2, GraduationCap, Lightbulb } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const audiences = [
  {
    id: "businesses",
    title: "Businesses",
    icon: Building2,
    description: "Transform your organization with strategic insights and innovative solutions",
    benefits: [
      "Data-driven decision making",
      "Innovation frameworks",
      "Strategic consulting",
    ],
  },
  {
    id: "learners",
    title: "Lifelong Learners",
    icon: GraduationCap,
    description: "Master self-directed learning and unlock your full potential",
    benefits: [
      "Proven learning frameworks",
      "Personal growth roadmaps",
      "Community support",
    ],
  },
  {
    id: "innovators",
    title: "Innovators",
    icon: Lightbulb,
    description: "Create breakthrough solutions with cutting-edge tools and methodologies",
    benefits: [
      "AI-powered tools",
      "Creative problem-solving",
      "Technology integration",
    ],
  },
];

export const ValueProposition = () => {
  const [activeTab, setActiveTab] = useState("businesses");

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Who We Serve
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {audiences.map((audience) => (
            <Button
              key={audience.id}
              variant={activeTab === audience.id ? "default" : "outline"}
              onClick={() => setActiveTab(audience.id)}
              className="min-w-[120px]"
            >
              <audience.icon className="mr-2 h-4 w-4" />
              {audience.title}
            </Button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {audiences.map((audience) => (
              activeTab === audience.id && (
                <motion.div
                  key={audience.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <audience.icon className="h-8 w-8 text-primary mr-4" />
                        <h3 className="text-2xl font-semibold">{audience.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-6">{audience.description}</p>
                      <ul className="space-y-3">
                        {audience.benefits.map((benefit, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center text-gray-200"
                          >
                            <div className="h-2 w-2 bg-primary rounded-full mr-3" />
                            {benefit}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};