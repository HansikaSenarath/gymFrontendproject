import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { Textarea } from "../../app/components/ui/textarea";
import { toast } from "sonner";
import { useInquiry } from "../../hooks/useInquiry";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@powerfitgym.com",
    link: "mailto:info@powerfitgym.com",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "123 Fitness Street, Health City, HC 12345",
    link: "#",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { submit, isSubmitting } = useInquiry();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit(formData);
    toast.success(
      "Inquiry submitted successfully! We'll get back to you soon.",
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            badge="Get In Touch"
            title={
              <>
                Ready to{" "}
                <span className="text-primary">Start Your Journey?</span>
              </>
            }
            subtitle="Contact us today and take the first step towards a healthier, stronger you"
            isInView={isInView}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                      <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="p-6 bg-card border border-border rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
              <div className="space-y-2">
                {[
                  { day: "Monday - Friday", hours: "6:00 AM - 10:00 PM" },
                  { day: "Saturday - Sunday", hours: "7:00 AM - 9:00 PM" },
                  { day: "Holidays", hours: "8:00 AM - 6:00 PM" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-muted-foreground">{day}</span>
                    <span className="font-semibold">{hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <div className="space-y-6">
                {[
                  {
                    id: "name",
                    label: "Name",
                    type: "text",
                    placeholder: "Your full name",
                  },
                  {
                    id: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "your.email@example.com",
                  },
                ].map(({ id, label, type, placeholder }, i) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <label htmlFor={id} className="block mb-2">
                      {label}
                    </label>
                    <Input
                      id={id}
                      name={id}
                      type={type}
                      value={formData[id as keyof typeof formData]}
                      onChange={handleChange}
                      required={id !== "phone"}
                      placeholder={placeholder}
                      className="bg-input-background"
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  <label htmlFor="message" className="block mb-2">
                    Message{" "}
                    <span className="text-sm text-muted-foreground">
                      (10-1000 characters)
                    </span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your fitness goals... (minimum 10 characters)"
                    rows={5}
                    minLength={10}
                    maxLength={1000}
                    className="bg-input-background resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
