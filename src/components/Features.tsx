import { Brain, Lightbulb, Rocket, Users } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    title: "Self-Directed Learning",
    description: "Master the art of learning independently with proven frameworks and strategies",
    icon: Brain,
  },
  {
    title: "Innovation Hub",
    description: "Access cutting-edge tools and resources for creative problem-solving",
    icon: Lightbulb,
  },
  {
    title: "Community Growth",
    description: "Join a community of lifelong learners and innovative thinkers",
    icon: Users,
  },
  {
    title: "Future-Ready Skills",
    description: "Develop the skills and mindset needed for tomorrow's challenges",
    icon: Rocket,
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Unlock Your Potential
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white/5 backdrop-blur-sm border-primary/10"
            >
              <feature.icon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};