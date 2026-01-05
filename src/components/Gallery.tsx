import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/images/img-1.jpg", alt: "Rénovation façade" },
    { src: "/images/img-2.jpg", alt: "Peinture maison" },
    { src: "/images/img-3.jpg", alt: "Travaux intérieurs" },
    { src: "/images/img-4.jpg", alt: "Finition extérieure" },
    { src: "/images/img-5.jpg", alt: "Projet résidentiel" },
    { src: "/images/img-6.jpg", alt: "Transformation bâtiment" },
    { src: "/images/img-7.jpg", alt: "Peinture murale" },
    { src: "/images/img-8.jpg", alt: "Rénovation intérieure" },
    { src: "/images/img-9.jpg", alt: "Construction peinte" },
    { src: "/images/img-10.jpg", alt: "Finition professionnelle" },
    { src: "/images/img-11.jpg", alt: "Travail de peinture" },
    { src: "/images/img-12.jpg", alt: "Rénovation complète" },
    { src: "/images/img-13.jpg", alt: "Aménagement extérieur" },
    { src: "/images/img-14.jpg", alt: "Peinture de façade" },
    { src: "/images/img-15.jpg", alt: "Finition mur" },
    { src: "/images/img-16.jpg", alt: "Travaux de couleur" },
    { src: "/images/img-17.jpg", alt: "Projet de peinture" },
    { src: "/images/img-18.jpg", alt: "Transformation maison" },
    { src: "/images/img-19.jpg", alt: "Peinture détails" },
    { src: "/images/img-20.jpg", alt: "Rénovation moderne" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="galerie" ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.2 }} className="mb-16 text-center">
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">{t.gallery.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4">{t.gallery.title}</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">{t.gallery.description}</p>
        </motion.div>

        {/* Slider */}
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.3 }} className="relative rounded-2xl overflow-hidden bg-background border border-border">
          <div className="relative aspect-video overflow-hidden">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="h-full w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />

            {/* Image description */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-lg font-medium">{images[currentIndex].alt}</p>
              <p className="text-sm text-white/70 mt-1">
                {currentIndex + 1} / {images.length}
              </p>
            </div>

            {/* Navigation buttons */}
            <Button
              onClick={prevSlide}
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              onClick={nextSlide}
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Thumbnails */}
          <div className="p-4 bg-background border-t border-border overflow-x-auto">
            <div className="flex gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative flex-shrink-0 h-16 w-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    index === currentIndex ? "border-accent" : "border-border hover:border-muted-foreground"
                  }`}
                >
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
