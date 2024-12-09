import { motion } from "framer-motion";
import { Calendar, Rocket } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const events = [
  {
    title: "Digital Innovation Workshop",
    date: "April 15, 2024",
    type: "Workshop",
    description: "An interactive session on leveraging emerging technologies for business growth",
    location: "Virtual Event"
  },
  {
    title: "Strategic Marketing Masterclass",
    date: "April 22, 2024",
    type: "Masterclass",
    description: "Learn advanced digital marketing strategies for the modern landscape",
    location: "San Francisco, CA"
  },
  {
    title: "Future of Learning Conference",
    date: "May 5, 2024",
    type: "Conference",
    description: "Exploring the intersection of technology and education",
    location: "New York, NY"
  }
];

export const UpcomingEvents = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/cc7e3933-325f-45b1-9798-ed58f18bf45d.png')] opacity-10 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Upcoming Events & Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for transformative learning experiences and collaborative opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-primary mr-2" />
                  <span className="text-sm text-gray-400">{event.date}</span>
                </div>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm w-fit mb-4">
                  {event.type}
                </div>
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{event.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-400">{event.location}</span>
                  <Button variant="ghost" className="hover:text-primary">
                    Learn More
                    <Rocket className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};