import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContactForm } from "@/hooks/useQueries";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Droplets,
  Facebook,
  HardHat,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shield,
  Star,
  Twitter,
  Wrench,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// ─── NAV ────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-lg" : "bg-navy/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-sm bg-orange flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-xl tracking-wide uppercase">
                Vaaraahee
              </span>
              <span className="text-orange font-bold text-[0.55rem] tracking-[0.25em] uppercase">
                CONSTRUCTIONS
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className="text-white/80 hover:text-orange text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a href="#contact">
              <Button
                data-ocid="nav.quote.button"
                className="bg-orange hover:bg-orange/90 text-white font-bold uppercase tracking-wider text-sm px-6 py-2 rounded-sm"
              >
                Get a Free Quote
              </Button>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            type="button"
            data-ocid="nav.menu.toggle"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-navy border-t border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-orange font-semibold uppercase tracking-wider text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  setMenuOpen(false);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full bg-orange hover:bg-orange/90 text-white font-bold uppercase tracking-wider text-sm rounded-sm"
              >
                Get a Free Quote
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── HERO ───────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/75" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-orange font-bold uppercase tracking-[0.3em] text-sm mb-4">
            Trusted Since 1998
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase text-white leading-tight mb-6 tracking-tight">
            Building Your <span className="text-orange">Future,</span>
            <br />
            Protecting Your <span className="text-orange">Investment</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-medium">
            Professional construction, structural repair, and waterproofing
            solutions delivered with precision and lasting quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services">
              <Button
                data-ocid="hero.services.button"
                size="lg"
                className="bg-orange hover:bg-orange/90 text-white font-bold uppercase tracking-wider px-8 py-4 text-sm rounded-sm w-full sm:w-auto"
              >
                Our Services
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="#about">
              <Button
                data-ocid="hero.learn_more.button"
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-navy font-bold uppercase tracking-wider px-8 py-4 text-sm rounded-sm w-full sm:w-auto"
              >
                Learn More
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/20 pt-10"
        >
          {[
            { value: "25+", label: "Years Experience" },
            { value: "1,200+", label: "Projects Completed" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "50+", label: "Expert Team Members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-orange">
                {stat.value}
              </div>
              <div className="text-white/70 text-xs font-semibold uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        <span className="text-white/50 text-xs uppercase tracking-widest">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

// ─── SERVICES ───────────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: HardHat,
    title: "Construction",
    description:
      "From foundations to finish, we deliver high-quality commercial and residential construction projects on time and within budget.",
    features: [
      "Commercial Buildings",
      "Residential Projects",
      "Foundation Work",
      "Steel Structures",
    ],
  },
  {
    icon: Wrench,
    title: "Structural Repair",
    description:
      "Expert repair services for concrete, masonry, and structural damage — restoring integrity and extending the life of your building.",
    features: [
      "Concrete Restoration",
      "Facade Repair",
      "Crack Injection",
      "Reinforcement",
    ],
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    description:
      "Advanced waterproofing systems for roofs, basements, terraces, and facades to keep your property dry and damage-free for decades.",
    features: [
      "Roof Waterproofing",
      "Basement Sealing",
      "Terrace Coating",
      "Injection Grouting",
    ],
  },
];

function ServicesSection() {
  return (
    <section id="services" className="bg-navy py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange font-bold uppercase tracking-[0.3em] text-sm">
            What We Do
          </span>
          <h2 className="text-3xl lg:text-5xl font-black uppercase text-white mt-3">
            Our Core Services
          </h2>
          <div className="w-16 h-1 bg-orange mx-auto mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white/5 border border-white/10 rounded-sm p-8 group hover:bg-orange/10 hover:border-orange/40 transition-all duration-300"
              data-ocid={`services.item.${i + 1}`}
            >
              <div className="w-14 h-14 rounded-sm bg-orange/15 flex items-center justify-center mb-6 group-hover:bg-orange transition-colors duration-300">
                <service.icon className="w-7 h-7 text-orange group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-black text-white uppercase mb-3">
                {service.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-white/60 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-orange flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-orange font-bold text-sm uppercase tracking-wider hover:gap-2 transition-all duration-200"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ──────────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden shadow-card">
              <img
                src="/assets/generated/about-team.dim_600x500.jpg"
                alt="Vaaraahee Constructions team at a construction site"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Accent badge */}
              <div className="absolute bottom-6 right-6 bg-orange text-white p-5 rounded-sm shadow-lg">
                <div className="text-3xl font-black leading-none">25+</div>
                <div className="text-xs font-bold uppercase tracking-wider mt-1">
                  Years of
                  <br />
                  Excellence
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-navy rounded-sm -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-orange font-bold uppercase tracking-[0.3em] text-sm">
              Who We Are
            </span>
            <h2 className="text-3xl lg:text-5xl font-black uppercase text-navy mt-3 mb-6 leading-tight">
              Your Trusted
              <br />
              Construction Partner
            </h2>
            <div className="w-16 h-1 bg-orange mb-6" />
            <p className="text-foreground/70 leading-relaxed mb-5">
              Since 1998, Vaaraahee Constructions has been the region's premier
              construction, repair, and waterproofing specialist. Our team of
              licensed engineers and skilled craftsmen approaches every project
              with uncompromising standards — from initial assessment to final
              inspection.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              We've built everything from high-rise commercial complexes to
              residential foundations, repaired hundreds of structures, and
              waterproofed thousands of surfaces. Our clients trust us because
              we treat every building as if it were our own.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Star, text: "Award-Winning Quality" },
                { icon: Shield, text: "Licensed & Insured" },
                { icon: CheckCircle2, text: "10-Year Warranty" },
                { icon: HardHat, text: "Safety First Culture" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-orange" />
                  </div>
                  <span className="text-sm font-semibold text-foreground/80">
                    {text}
                  </span>
                </div>
              ))}
            </div>
            <a href="#contact">
              <Button
                data-ocid="about.contact.button"
                className="bg-navy hover:bg-navy/90 text-white font-bold uppercase tracking-wider px-8 py-3 text-sm rounded-sm"
              >
                Work With Us
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ───────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    image: "/assets/generated/project-construction.dim_600x400.jpg",
    title: "Harbour View Tower",
    category: "Commercial Construction",
    location: "Downtown District",
  },
  {
    image: "/assets/generated/project-repair.dim_600x400.jpg",
    title: "Marina Office Complex Restoration",
    category: "Structural Repair",
    location: "Business Bay",
  },
  {
    image: "/assets/generated/project-waterproofing.dim_600x400.jpg",
    title: "Skyline Hotel Waterproofing",
    category: "Waterproofing",
    location: "Riverside Boulevard",
  },
  {
    image: "/assets/generated/project-roofing.dim_600x400.jpg",
    title: "Greenfield Residential Estate",
    category: "Roofing & Waterproofing",
    location: "North Suburbs",
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="bg-charcoal py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange font-bold uppercase tracking-[0.3em] text-sm">
            Our Portfolio
          </span>
          <h2 className="text-3xl lg:text-5xl font-black uppercase text-white mt-3">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-orange mx-auto mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer overflow-hidden rounded-sm"
              data-ocid={`projects.item.${i + 1}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors duration-300" />
                <div className="absolute top-3 left-3">
                  <span className="bg-orange text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4">
                <h3 className="text-white font-bold text-sm mb-1 line-clamp-1">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 text-white/50 text-xs">
                  <MapPin className="w-3 h-3" />
                  {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            data-ocid="projects.view_all.button"
            className="inline-flex items-center gap-2 text-orange font-bold uppercase tracking-wider text-sm border border-orange/50 px-8 py-3 rounded-sm hover:bg-orange hover:text-white transition-all duration-200"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── CONTACT ────────────────────────────────────────────────────────────────
const PROJECT_TYPES = [
  "Commercial Construction",
  "Residential Construction",
  "Structural Repair",
  "Waterproofing",
  "Roofing",
  "Facade Restoration",
  "Foundation Work",
  "Other",
];

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const { mutate, isPending, isSuccess, isError } = useSubmitContactForm();

  const handleChange = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        toast.success("Message sent! We'll get back to you within 24 hours.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });
      },
      onError: () => {
        toast.error("Something went wrong. Please try again.");
      },
    });
  };

  return (
    <section id="contact" className="bg-light-gray py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange font-bold uppercase tracking-[0.3em] text-sm">
            Get In Touch
          </span>
          <h2 className="text-3xl lg:text-5xl font-black uppercase text-navy mt-3">
            Request a Free Consultation
          </h2>
          <div className="w-16 h-1 bg-orange mx-auto mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 bg-white rounded-sm shadow-card p-8"
          >
            <h3 className="text-navy font-black text-xl uppercase mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label
                  htmlFor="name"
                  className="text-xs font-bold uppercase tracking-wider text-foreground/70 mb-1"
                >
                  Full Name *
                </Label>
                <Input
                  id="name"
                  data-ocid="contact.name.input"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="rounded-sm border-border focus:border-orange focus:ring-orange"
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="text-xs font-bold uppercase tracking-wider text-foreground/70 mb-1"
                >
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  data-ocid="contact.email.input"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="rounded-sm border-border focus:border-orange focus:ring-orange"
                />
              </div>
              <div>
                <Label
                  htmlFor="phone"
                  className="text-xs font-bold uppercase tracking-wider text-foreground/70 mb-1"
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  data-ocid="contact.phone.input"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="rounded-sm border-border focus:border-orange focus:ring-orange"
                />
              </div>
              <div>
                <Label className="text-xs font-bold uppercase tracking-wider text-foreground/70 mb-1">
                  Project Type *
                </Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(v) => handleChange("projectType", v)}
                  required
                >
                  <SelectTrigger
                    data-ocid="contact.project_type.select"
                    className="rounded-sm"
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {PROJECT_TYPES.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label
                  htmlFor="message"
                  className="text-xs font-bold uppercase tracking-wider text-foreground/70 mb-1"
                >
                  Message *
                </Label>
                <Textarea
                  id="message"
                  data-ocid="contact.message.textarea"
                  placeholder="Describe your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                  className="rounded-sm border-border focus:border-orange focus:ring-orange resize-none"
                />
              </div>
              <Button
                type="submit"
                data-ocid="contact.submit.button"
                disabled={isPending}
                className="w-full bg-orange hover:bg-orange/90 text-white font-bold uppercase tracking-wider text-sm rounded-sm py-3"
              >
                {isPending ? "Sending..." : "Send Message"}
              </Button>
              {isSuccess && (
                <p
                  data-ocid="contact.success_state"
                  className="text-green-600 text-sm text-center font-semibold"
                >
                  ✓ Message sent successfully!
                </p>
              )}
              {isError && (
                <p
                  data-ocid="contact.error_state"
                  className="text-destructive text-sm text-center font-semibold"
                >
                  Failed to send. Please try again.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-navy rounded-sm shadow-card p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-white font-black text-xl uppercase mb-8">
                Contact Details
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Our Office",
                    lines: [
                      "9-4-36/205, Tirumala Arcade",
                      "Lions Town Colony, Hasmathpet",
                      "Old Bowenpally - 500011",
                    ],
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    lines: [
                      "+91 93945 45070",
                      "+91 76659 40001",
                      "+91 96406 46544",
                    ],
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    lines: ["info@vaaraahee.com", "projects@vaaraahee.com"],
                  },
                ].map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-sm bg-orange/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <div className="text-orange text-xs font-bold uppercase tracking-wider mb-1">
                        {title}
                      </div>
                      {lines.map((line) => (
                        <div key={line} className="text-white/75 text-sm">
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="text-orange text-xs font-bold uppercase tracking-wider mb-4">
                Business Hours
              </div>
              <div className="space-y-1 text-white/70 text-sm">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span>7:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>8:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Emergency Only</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-sm overflow-hidden shadow-card"
          >
            <iframe
              title="Vaaraahee Constructions Office Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=78.47%2C17.44%2C78.52%2C17.48&layer=mapnik&marker=17.461%2C78.496"
              width="100%"
              height="100%"
              style={{ minHeight: "420px", border: 0 }}
              loading="lazy"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-sm bg-orange flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-xl tracking-wide uppercase">
                  Vaaraahee
                </span>
                <span className="text-orange font-bold text-[0.55rem] tracking-[0.25em] uppercase">
                  CONSTRUCTIONS
                </span>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-sm">
              Professional construction, repair, and waterproofing services.
              Building trust one project at a time since 1998.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="w-9 h-9 rounded-sm bg-white/10 hover:bg-orange flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/55 hover:text-orange text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Construction",
                "Structural Repair",
                "Waterproofing",
                "Roofing",
                "Facade Restoration",
                "Foundation Work",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/55 hover:text-orange text-sm transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-white/40 text-xs">
            © {year} Vaaraahee Constructions. All rights reserved.
          </span>
          <span className="text-white/40 text-xs">
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange hover:text-orange/80 transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen font-montserrat">
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
