import { motion } from "motion/react";

interface SectionTitleProps {
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
  isInView: boolean;
}

export function SectionTitle({ badge, title, subtitle, isInView }: SectionTitleProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
      >
        <span className="text-primary text-sm font-semibold">{badge}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
