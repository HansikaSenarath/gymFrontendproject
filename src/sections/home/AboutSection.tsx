import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Award, Users, Target, Heart } from "lucide-react";
import { ImageWithFallback } from "../../app/components/figma/ImageWithFallback";

const features = [
  {
    icon: Award,
    title: "Expert Trainers",
    description: "Certified professionals dedicated to your success",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join a supportive fitness family",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Personalized plans to achieve your targets",
  },
  {
    icon: Heart,
    title: "Wellness Focus",
    description: "Holistic approach to health and fitness",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554686177-87b3c0e1a575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZyUyMGNsaWVudHxlbnwxfHx8fDE3NzM1MzY1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Personal trainer coaching"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040304]/50 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-card border border-border p-6 rounded-xl shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary p-3 rounded-full">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
            >
              <span className="text-primary text-sm font-semibold">
                About PowerFit
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Your Journey to a{" "}
              <span className="text-primary">Healthier Life</span> Starts Here
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              At Fitness Sport Centre, we believe fitness is more than just
              working out—it's a lifestyle. Our state-of-the-art facility
              combines cutting-edge equipment with expert guidance to create an
              environment where you can thrive and achieve your fitness goals.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
