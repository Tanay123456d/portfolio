"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "@/components/ui/Lightbox";
import PortfolioImage from "@/components/ui/PortfolioImage";
import { GalleryImage } from "@/types";
import { useCursorContext } from "@/components/ui/Cursor";

interface ProjectGalleryProps {
  images: GalleryImage[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setCursorVariant } = useCursorContext();

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="py-20">
        <div className="flex flex-col gap-16">
          {/* First image full-bleed */}
          {images[0] && (
            <motion.div
              className="w-full cursor-zoom-in"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => openLightbox(0)}
              onMouseEnter={() => setCursorVariant("view")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <PortfolioImage
                src={images[0].src}
                alt={images[0].alt}
                aspectRatio="16:9"
                fullWidth
              />
            </motion.div>
          )}

          {/* Remaining images in editorial grid */}
          <div className="flex flex-col gap-16 md:gap-24">
            {images.slice(1).map((image, i) => {
              const index = i + 1;
              const offset = i % 3;
              const widthClass = offset === 0 ? "w-full" : offset === 1 ? "w-full md:w-2/3" : "w-full md:w-3/4 md:ml-auto";

              return (
                <motion.div
                  key={i}
                  className={`${widthClass} cursor-zoom-in`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: 0.05 * (i % 3), ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => openLightbox(index)}
                  onMouseEnter={() => setCursorVariant("view")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <PortfolioImage
                    src={image.src}
                    alt={image.alt}
                    aspectRatio={image.aspectRatio}
                    fullWidth
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Lightbox
        images={images.map((img) => ({ src: img.src, alt: img.alt }))}
        initialIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={title}
      />
    </>
  );
}