import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Search } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { ImageWithFallback } from "../../app/components/figma/ImageWithFallback";
import { servicesData, serviceCategories } from "../../data/servicesData";

export function ServicesSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = servicesData.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || s.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="services" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle
            badge="Our Services"
            title={<>Comprehensive <span className="text-primary">Fitness Solutions</span></>}
            subtitle="Explore our wide range of services designed to meet your unique fitness needs"
            isInView={isInView}
          />
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-input-background"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceCategories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                className={selectedCategory === cat.id ? "bg-primary text-primary-foreground" : ""}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040304]/80 to-transparent" />
                <div className="absolute bottom-4 left-4 p-3 bg-primary rounded-full">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button
                  variant="outline"
                  className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-muted-foreground text-lg">No services found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
