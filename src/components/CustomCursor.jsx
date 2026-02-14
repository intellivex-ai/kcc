import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', updateMousePosition);

        // Add hover listeners to clickable elements
        const clickables = document.querySelectorAll('a, button, input, textarea, select, .clickable');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // MutationObserver to handle dynamically added elements
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    const newClickables = document.querySelectorAll('a, button, input, textarea, select, .clickable');
                    newClickables.forEach(el => {
                        el.removeEventListener('mouseenter', handleMouseEnter);
                        el.removeEventListener('mouseleave', handleMouseLeave);
                        el.addEventListener('mouseenter', handleMouseEnter);
                        el.addEventListener('mouseleave', handleMouseLeave);
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
            observer.disconnect();
        };
    }, [isVisible]);

    // Hide on touch devices
    if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) return null;

    const variants = {
        default: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            height: 24,
            width: 24,
            opacity: isVisible ? 1 : 0,
            border: "2px solid #0056D2",
            backgroundColor: "transparent",
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            height: 64,
            width: 64,
            opacity: 1,
            border: "2px solid rgba(0, 86, 210, 0.1)",
            backgroundColor: "rgba(0, 86, 210, 0.05)",
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: isVisible ? 1 : 0
        },
        hover: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 0 // Hide dot on hover for cleaner look
        }
    };

    return (
        <>
            {/* Main Ring Cursor */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
                transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
            />
            {/* Center Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block"
                variants={dotVariants}
                animate={isHovering ? "hover" : "default"}
                transition={{ type: "tween", ease: "linear", duration: 0 }}
            />
        </>
    );
};

export default CustomCursor;
