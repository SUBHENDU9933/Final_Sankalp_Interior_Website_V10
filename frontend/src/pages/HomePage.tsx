import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, CheckCircle, Phone, Award, Users, Clock, TrendingUp,
  Home, ChefHat, DoorOpen, Layers, Building2, Play, ChevronLeft, ChevronRight, MapPin
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import LeadForm from '../components/LeadForm';
import TestimonialSection from '../components/TestimonialSection';
import SeoContentBlock from '../components/SeoContentBlock';
import CaseStudies from '../components/CaseStudies';
import { ALL_LOCATIONS } from '../seo/allLocations';

const heroSlides = [
  {
    image: '/images/hero-living.jpg',
    bengali: 'ঘর নয়,',
    bengali2: 'স্বপ্ন সাজাই আমরা।',
    english: 'Kolkata\'s Top-Rated Premium',
    english2: 'Interior Designer — Near You',
    subtitle: 'Kolkata & West Bengal\'s most trusted interior design company — 500+ homes transformed with premium quality and transparent pricing.',
    tag: 'Kolkata\'s #1 Interior Designer',
  },
  {
    image: '/images/project2.jpg',
    bengali: 'নিখুঁত ডিজাইন,',
    bengali2: 'সময়মতো ডেলিভারি।',
    english: 'Quality design. Transparent pricing.',
    english2: 'On-time delivery.',
    subtitle: 'No hidden costs. No surprises. A complete cost breakdown before work begins — and delivery on the date we promise.',
    tag: '500+ Projects Completed',
  },
  {
    image: '/images/kitchen.jpg',
    bengali: 'কলকাতা থেকে সারা পশ্চিমবঙ্গ',
    bengali2: '— আপনার পাশে আমরা।',
    english: 'Custom interiors for',
    english2: 'every space and budget.',
    subtitle: 'From compact 1BHK flats to sprawling villas — we design for every space, every budget, every dream across West Bengal.',
    tag: 'Serving All of West Bengal',
  },
  {
    image: '/images/bedroom.jpg',
    bengali: 'বিশ্বাসের সাথে,',
    bengali2: 'প্রতিটি কাজ সম্পূর্ণ।',
    english: 'Built on trust.',
    english2: 'Delivered with care.',
    subtitle: '500+ happy families trust Sankalp Interior Solution. Rated 4.9★ on Google — built on honesty, delivered with heart.',
    tag: '4.9★ Google Rated',
  },
  {
    image: '/images/false-ceiling.jpg',
    bengali: 'প্রতিটি কাজে নিখুঁততা,',
    bengali2: 'প্রতিটি ডিটেলে যত্ন।',
    english: 'Precision',
    english2: 'in every detail.',
    subtitle: 'From the first sketch to the final finish — every millimetre matters. We obsess over details so your home is flawless.',
    tag: 'Premium Craftsmanship',
  },
  {
    image: '/images/project1.jpg',
    bengali: 'আজই শুরু হোক',
    bengali2: 'আপনার স্বপ্নের বাড়ির যাত্রা।',
    english: 'Start your dream',
    english2: 'home journey today.',
    subtitle: 'Book a free home visit today. Our designer comes to you — no charges, no obligation. Just inspiration and honest advice.',
    tag: 'Free Consultation Today',
  },
];

const stats = [
  { value: '500+', label: 'Projects Completed', icon: Home },
  { value: '4.9★', label: 'Average Rating', icon: Star },
  { value: '8+', label: 'Years Experience', icon: Award },
  { value: '100%', label: 'Client Satisfaction', icon: Users },
];

const services = [
  {
    icon: Home,
    title: 'Full Home Interior',
    desc: 'Complete home transformation from concept to completion with premium materials.',
    price: 'From ₹800/sq ft',
    image: '/images/project1.jpg',
  },
  {
    icon: ChefHat,
    title: 'Modular Kitchen',
    desc: 'Smart, functional kitchens with high-quality cabinets and fittings.',
    price: 'From ₹1.2 Lakhs',
    image: '/images/kitchen.jpg',
  },
  {
    icon: DoorOpen,
    title: 'Wardrobe Design',
    desc: 'Custom wardrobes maximizing space with elegant finishes.',
    price: 'From ₹45,000',
    image: '/images/wardrobe.jpg',
  },
  {
    icon: Layers,
    title: 'False Ceiling',
    desc: 'Stunning false ceiling designs with LED lighting integration.',
    price: 'From ₹65/sq ft',
    image: '/images/false-ceiling.jpg',
  },
  {
    icon: Building2,
    title: 'Commercial Interior',
    desc: 'Professional office and retail spaces that impress clients.',
    price: 'From ₹600/sq ft',
    image: '/images/commercial.jpg',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Salt Lake, Kolkata',
    text: 'Sankalp transformed our 2BHK completely within budget and on time. The design quality is outstanding. Highly recommend!',
    rating: 5,
    project: '2BHK Interior – ₹4.5L',
  },
  {
    name: 'Rahul Banerjee',
    location: 'Newtown, Kolkata',
    text: 'Best interior designers in Kolkata! Transparent pricing, no hidden costs. Our modular kitchen looks absolutely stunning.',
    rating: 5,
    project: 'Modular Kitchen – ₹1.8L',
  },
  {
    name: 'Anita Das',
    location: 'Rajarhat, Kolkata',
    text: 'Professional team, excellent execution. They understood exactly what we wanted and delivered beyond expectations.',
    rating: 5,
    project: '3BHK Full Interior – ₹8.2L',
  },
];

const process = [
  { step: '01', title: 'Free Consultation', desc: 'Book a free home visit. Our expert visits, understands your needs & space.' },
  { step: '02', title: '3D Design', desc: 'Get a stunning 3D visualization of your future home before work begins.' },
  { step: '03', title: 'Execution', desc: 'Our skilled craftsmen execute the design with premium materials & precision.' },
  { step: '04', title: 'Handover', desc: 'We hand over your dream home on time with a quality guarantee.' },
];

const pricingPlans = [
  {
    name: 'Essential',
    price: '₹800',
    unit: 'per sq ft',
    desc: 'Perfect for budget-conscious homeowners',
    features: ['Basic furniture & fittings', 'Modular kitchen (basic)', 'Standard false ceiling', 'Basic wardrobe', 'Painting & flooring'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Premium',
    price: '₹1,400',
    unit: 'per sq ft',
    desc: 'Most popular – Best value for money',
    features: ['Premium furniture & materials', 'Modular kitchen (premium)', 'Designer false ceiling + LED', 'Sliding wardrobe', 'Italian marble / wooden flooring', 'Home automation basics'],
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'Ultra Premium',
    price: '₹2,200+',
    unit: 'per sq ft',
    desc: 'Luxury without compromise',
    features: ['Luxury imported materials', 'Chef-grade modular kitchen', 'Cinematic ceiling design', 'Walk-in wardrobe', 'Smart home automation', 'Dedicated project manager'],
    cta: 'Go Luxury',
    popular: false,
  },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, label, icon: Icon, animate }: any) {
  const isNumeric = /^\d+/.test(value);
  const numericPart = isNumeric ? parseInt(value) : 0;
  const suffix = value.replace(/^\d+/, '');
  const count = useCountUp(numericPart, 1800, animate);

  return (
    <div className="text-center">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
        style={{ background: 'rgba(240, 124, 30, 0.12)' }}
      >
        <Icon size={28} className="text-orange-500" />
      </div>
      <div className="stat-number text-4xl md:text-5xl font-black mb-2">
        {isNumeric ? `${count}${suffix}` : value}
      </div>
      <p className="text-gray-500 text-sm font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>{label}</p>
    </div>
  );
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* ── YouTube Video Background ── */}
        <div className="absolute inset-0 z-0">

          {/* YouTube iframe — covers full hero, no controls, autoplay muted loop */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 'max(100vw, 177.78vh)',
            height: 'max(56.25vw, 100vh)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}>
            <iframe
              src="https://www.youtube.com/embed/fEm0RKh2WJ8?autoplay=1&mute=1&loop=1&playlist=fEm0RKh2WJ8&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1"
              title="Sankalp Interior Solution"
              allow="autoplay; encrypted-media; picture-in-picture"
              style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(5,12,30,0.85) 0%, rgba(9,21,48,0.78) 50%, rgba(9,21,48,0.65) 100%)', zIndex: 1 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,12,30,0.55) 0%, transparent 60%)', zIndex: 1 }} />
        </div>

        {/* ── Slide Content ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT — Text */}
            <div>
              {/* Tag pill — orange bg, white text */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{ background: '#f07c1e', color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                {slide.tag}
              </div>

              {/* Bengali line 1 — WHITE */}
              <div key={`bn1-${currentSlide}`} className="animate-fadeInUp">
                <span
                  className="block font-black leading-tight"
                  style={{
                    fontFamily: "'Noto Sans Bengali','Hind Siliguri',sans-serif",
                    fontSize: 'clamp(1.9rem,4vw,3.2rem)',
                    color: '#ffffff',
                    lineHeight: 1.3,
                    textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)',
                  }}
                >
                  {slide.bengali}
                </span>

                {/* Bengali line 2 — ORANGE */}
                <span
                  className="block font-black leading-tight mb-3"
                  style={{
                    fontFamily: "'Noto Sans Bengali','Hind Siliguri',sans-serif",
                    fontSize: 'clamp(1.9rem,4vw,3.2rem)',
                    color: '#f9a14b',
                    lineHeight: 1.3,
                    textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)',
                  }}
                >
                  {slide.bengali2}
                </span>

                {/* English headline — this is the page's H1, carries primary SEO keywords */}
                <h1 style={{ margin: 0, padding: 0 }}>
                  {/* English line 1 — WHITE */}
                  <span
                    className="block font-bold"
                    style={{
                      fontFamily: 'Montserrat,sans-serif',
                      fontSize: 'clamp(1.1rem,2.2vw,1.6rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.01em',
                      textShadow: '0 2px 12px rgba(0,0,0,0.8)',
                    }}
                  >
                    {slide.english}
                  </span>

                  {/* English line 2 — ORANGE */}
                  <span
                    className="block font-bold mb-5"
                    style={{
                      fontFamily: 'Montserrat,sans-serif',
                      fontSize: 'clamp(1.1rem,2.2vw,1.6rem)',
                      fontWeight: 700,
                      color: '#f9a14b',
                      letterSpacing: '-0.01em',
                      textShadow: '0 2px 12px rgba(0,0,0,0.8)',
                    }}
                  >
                    {slide.english2}
                  </span>
                </h1>
              </div>

              {/* Subtitle — white/70 */}
              <p key={`sub-${currentSlide}`}
                className="text-base md:text-lg leading-relaxed mb-8 max-w-xl animate-fadeInUp"
                style={{ color: 'rgba(255,255,255,0.90)', fontFamily: 'Poppins,sans-serif', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>
                {slide.subtitle}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                {/* Primary — solid orange */}
                <Link to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-bold text-base text-white transition-all hover:-translate-y-1"
                  style={{ background: '#f07c1e', fontFamily: 'Poppins,sans-serif', boxShadow: '0 4px 20px rgba(240,124,30,0.45)' }}>
                  Get Free Consultation <ArrowRight size={18} />
                </Link>
                {/* Secondary — white border, white text */}
                <a href="tel:+919748297025"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-bold text-base text-white transition-all hover:-translate-y-1"
                  style={{ border: '2px solid rgba(255,255,255,0.75)', fontFamily: 'Poppins,sans-serif' }}>
                  <Phone size={17} /> +91 97482 97025
                </a>
              </div>

              {/* Trust badges — white text with orange tick */}
              <div className="flex flex-wrap gap-4">
                {['500+ Happy Families', '4.9★ Google Rating', 'Free Home Visit', 'On-Time Delivery'].map(b => (
                  <div key={b} className="flex items-center gap-2 text-sm"
                    style={{ color: 'rgba(255,255,255,0.95)', fontFamily: 'Poppins,sans-serif', textShadow: '0 1px 6px rgba(0,0,0,0.7)', fontWeight: 500 }}>
                    <CheckCircle size={14} style={{ color: '#f07c1e', flexShrink: 0 }} />
                    {b}
                  </div>
                ))}
              </div>
            </div>{/* end LEFT */}

            {/* RIGHT — Lead Form card */}
            <div>
              <div className="rounded-2xl p-8 shadow-2xl"
                style={{ background: '#ffffff', border: '3px solid #f07c1e' }}>
                {/* Card header — orange strip */}
                <div className="-mx-8 -mt-8 mb-6 px-8 py-4 rounded-t-xl"
                  style={{ background: '#f07c1e' }}>
                  <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'Montserrat,sans-serif' }}>
                    🏠 Free Design Consultation
                  </h3>
                  <p className="text-white/80 text-sm mt-0.5" style={{ fontFamily: 'Poppins,sans-serif' }}>
                    Worth ₹2,999 — FREE for you today!
                  </p>
                </div>
                <LeadForm source="hero" compact />
              </div>
            </div>

          </div>{/* end grid */}
        </div>

        {/* ── Slide counter + indicators ── */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          {/* Numbered counter */}
          <span className="text-white/50 text-xs font-mono" style={{ fontFamily: 'Poppins,sans-serif' }}>
            {String(currentSlide + 1).padStart(2,'0')} / {String(heroSlides.length).padStart(2,'0')}
          </span>
          {/* Dot indicators */}
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === currentSlide ? '28px' : '8px',
                  height: '8px',
                  background: i === currentSlide ? '#f07c1e' : 'rgba(255,255,255,0.35)',
                }} />
            ))}
          </div>
        </div>

        {/* ── Prev / Next arrows ── */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.3)' }}
          onClick={() => setCurrentSlide(s => (s - 1 + heroSlides.length) % heroSlides.length)}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
          style={{ background: '#f07c1e', border: '1.5px solid #f07c1e' }}
          onClick={() => setCurrentSlide(s => (s + 1) % heroSlides.length)}
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

      </section>

      {/* ===== STATS ===== */}
      <section
        ref={statsRef}
        className="py-16 px-4"
        style={{ background: '#faf8f4' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} animate={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== BEFORE/AFTER ===== */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <SectionHeading
                tag="Transformation"
                title="See the "
                highlight="Difference"
                subtitle="Our before and after transformations speak louder than words. Every project is a complete lifestyle upgrade."
              />
              <div className="space-y-4 mb-8">
                {[
                  { label: 'Project Duration', value: '45–60 days' },
                  { label: 'Total Cost', value: '₹4.8 Lakhs (650 sq ft)' },
                  { label: 'Rooms Covered', value: 'Living + Kitchen + 2 Bedrooms' },
                  { label: 'Client Rating', value: '⭐⭐⭐⭐⭐ 5/5' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">{label}</span>
                    <span className="font-semibold text-gray-900 text-sm">{value}</span>
                  </div>
                ))}
              </div>
              <Link to="/projects" className="btn-primary">
                View All Projects
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="reveal-right">
              <BeforeAfterSlider
                beforeImage="/images/before.jpg"
                afterImage="/images/after.jpg"
                beforeLabel="Before Sankalp"
                afterLabel="After Sankalp"
              />
              <p className="text-center text-gray-400 text-sm mt-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ← Drag to compare Before & After →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section-padding px-4" style={{ background: '#f5f5f7' }}>
        <div className="max-w-7xl mx-auto">
          <div className="reveal">
            <SectionHeading
              tag="Our Services"
              title="Everything Your Home "
              highlight="Deserves"
              subtitle="From modular kitchens to complete home transformations — we handle it all with precision and passion."
              center
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="reveal card-hover bg-white rounded-2xl overflow-hidden shadow-sm"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="img-overlay" />
                  <div
                    className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(240, 124, 30, 0.9)' }}
                  >
                    <service.icon size={20} color="white" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="text-white font-semibold text-sm px-3 py-1 rounded-full"
                      style={{ background: 'rgba(240, 124, 30, 0.9)' }}
                    >
                      {service.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {service.desc}
                  </p>
                  <Link
                    to="/services"
                    className="text-orange-500 text-sm font-semibold flex items-center gap-1.5 hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link to="/services" className="btn-navy">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="reveal">
            <SectionHeading
              tag="How It Works"
              title="Simple 4-Step "
              highlight="Process"
              subtitle="We've streamlined our process to make your interior design journey stress-free and enjoyable."
              center
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={step.step} className="reveal text-center" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #f07c1e, #d4640a)',
                      boxShadow: '0 8px 30px rgba(240, 124, 30, 0.35)',
                    }}
                  >
                    <span className="text-white text-2xl font-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {step.step}
                    </span>
                  </div>
                  {i < process.length - 1 && (
                    <div
                      className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 w-full h-0.5 ml-4"
                      style={{ background: 'linear-gradient(90deg, #f07c1e, rgba(240,124,30,0.1))' }}
                    />
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING PREVIEW ===== */}
      <section className="section-padding px-4" style={{ background: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto">
          <div className="reveal">
            <SectionHeading
              tag="Pricing"
              title="Transparent "
              highlight="Pricing"
              subtitle="No hidden costs. No surprises. Choose a plan that fits your budget and requirements."
              center
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {pricingPlans.map((plan, i) => (
              <div
                key={plan.name}
                className={`reveal bg-white rounded-2xl p-8 shadow-sm ${plan.popular ? 'pricing-popular' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {plan.popular && (
                  <div
                    className="text-center text-white text-xs font-bold py-1.5 px-4 rounded-full mb-6 -mt-2"
                    style={{ background: 'linear-gradient(135deg, #f07c1e, #d4640a)', fontFamily: 'Poppins, sans-serif' }}
                  >
                    ⭐ MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{plan.desc}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black gradient-text" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm">{plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      <CheckCircle size={16} className="text-orange-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={plan.popular ? 'btn-primary w-full justify-center' : 'btn-navy w-full justify-center'}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6 reveal" style={{ fontFamily: 'Poppins, sans-serif' }}>
            * Prices are indicative. Final quote depends on project scope and materials chosen.{' '}
            <Link to="/pricing" className="text-orange-500 font-medium hover:underline">See detailed pricing →</Link>
          </p>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <TestimonialSection
        subtitle="Real stories from real homeowners across Kolkata & West Bengal."
        dark={false}
      />

      {/* ===== CASE STUDIES ===== */}
      <CaseStudies />

      {/* ===== WEST BENGAL COVERAGE ===== */}
      <section className="section-padding px-4" style={{ background: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto">
          <div className="reveal">
            <SectionHeading
              tag="Service Area"
              title="We Serve All of "
              highlight="West Bengal"
              subtitle={`From Kolkata to Siliguri, from Durgapur to the Sundarbans — ${ALL_LOCATIONS.length}+ cities and districts covered with free home visits.`}
              center
            />
          </div>
          {/* Region cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {ALL_LOCATIONS.slice(0, 16).map((loc, i) => (
              <Link key={loc.slug} to={`/${loc.slug}`}
                className="reveal flex items-center gap-2 p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 text-sm"
                style={{ border: '1px solid rgba(0,0,0,0.06)', transitionDelay: `${i * 0.04}s` }}>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(240,124,30,0.1)' }}>
                  <MapPin size={13} className="text-orange-500" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 text-xs truncate">{loc.name}</p>
                  <p className="text-gray-400 text-xs capitalize">{loc.type === 'area' ? 'city' : loc.type}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center reveal">
            <Link to="/locations" className="btn-primary">
              View All {ALL_LOCATIONS.length}+ Locations
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SEO CONTENT ACCORDION ===== */}
      <SeoContentBlock />

      {/* ===== CTA STRIP ===== */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: '#0f2044' }}>
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="section-tag mb-4">Limited Time Offer</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#ffffff' }}>
            Start Your Dream Home Journey{' '}
            <span style={{ color: '#f07c1e' }}>Today</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Book a free consultation now and get a complimentary 3D design worth ₹2,999.
            Limited slots available this month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg font-bold text-base text-white transition-all hover:-translate-y-1"
              style={{ background: '#f07c1e', fontFamily: 'Poppins,sans-serif', boxShadow: '0 4px 24px rgba(240,124,30,0.45)' }}>
              Book Free Consultation <ArrowRight size={20} />
            </Link>
            <a href="tel:+919748297025"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg font-bold text-base text-white transition-all hover:-translate-y-1"
              style={{ border: '2px solid rgba(255,255,255,0.7)', fontFamily: 'Poppins,sans-serif' }}>
              <Phone size={18} /> Call: +91 97482 97025
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
