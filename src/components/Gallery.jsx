import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const images = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
            alt: "Modern Computer Lab",
            category: "Lab"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
            alt: "Students in Class",
            category: "Students"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
            alt: "Group Study",
            category: "Students"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800",
            alt: "Computer Training",
            category: "Lab"
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
            alt: "Certificate Ceremony",
            category: "Events"
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800",
            alt: "Learning Session",
            category: "Students"
        }
    ];

    const handleNext = () => {
        const nextIndex = (selectedIndex + 1) % images.length;
        setSelectedIndex(nextIndex);
        setSelectedImage(images[nextIndex]);
    };

    const handlePrev = () => {
        const prevIndex = (selectedIndex - 1 + images.length) % images.length;
        setSelectedIndex(prevIndex);
        setSelectedImage(images[prevIndex]);
    };

    const openLightbox = (image, index) => {
        setSelectedImage(image);
        setSelectedIndex(index);
    };

    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Campus</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">Photo Gallery</h2>
                    <p className="text-gray-600 text-base sm:text-lg">Glimpses of our modern lab, students, and events</p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => openLightbox(image, index)}
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <p className="text-white font-bold">{image.alt}</p>
                                    <span className="text-white/80 text-sm">{image.category}</span>
                                </div>
                            </div>
                            {/* Zoom Icon */}
                            <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <ImageIcon size={20} className="text-primary" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                            >
                                <X size={24} className="text-white" />
                            </button>

                            {/* Navigation Arrows */}
                            <button
                                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                                className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                            >
                                <ChevronLeft size={24} className="text-white" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                                className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                            >
                                <ChevronRight size={24} className="text-white" />
                            </button>

                            {/* Image */}
                            <motion.img
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="max-w-full max-h-[90vh] rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                            />

                            {/* Image Info */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
                                <p className="text-white font-semibold">{selectedImage.alt}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Gallery;
