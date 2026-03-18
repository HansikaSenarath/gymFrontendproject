import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { scrollToSection } from "../../utils/helpers";
import logoGym from "../../assets/Logo/logoGym.jpg";

const footerLinks = {
  "Quick Links": [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Membership", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "Personal Training", href: "#services" },
    { label: "Group Classes", href: "#services" },
    { label: "Nutrition Coaching", href: "#services" },
    { label: "Online Training", href: "#services" },
  ],
  Support: [
    { label: "FAQs", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Careers", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center mb-4"
            >
              <img src={logoGym} alt="Gym Logo" className="h-12 w-auto object-contain" />
              <span className="ml-2 text-lg font-bold text-[#d5a310] dark:text-foreground">Fitness Sport Centre</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-secondary-foreground/80 mb-6 max-w-sm"
            >
              Transform your body and mind with our state-of-the-art facilities
              and expert trainers. Your journey to a healthier life starts here.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + sectionIndex * 0.1 }}
            >
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + sectionIndex * 0.1 + index * 0.05,
                    }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-secondary-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-secondary-foreground/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © 2026 Fitness Sport Centre. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
