import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PhotoCard = ({ src, alt, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-xl cursor-pointer break-inside-avoid mb-6 bg-muted"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            {description && <p className="text-sm text-white/80 line-clamp-2">{description}</p>}
          </div>
          <div className="absolute top-4 right-4 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
            <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/30 transition-colors">
              <ZoomIn size={20} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors duration-200 z-50"
              aria-label="Close"
            >
              <X size={24} className="text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center text-white">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                {description && <p className="text-white/70 max-w-2xl mx-auto">{description}</p>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoCard;
