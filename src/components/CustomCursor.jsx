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

        window.addEventListener('mousemove', updateMousePosition);

        // ⚡ Bolt: Replaced O(N) MutationObserver with O(1) event delegation
        // This prevents severe main-thread blocking when DOM nodes are added/removed
        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, input, textarea, select, .clickable')) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e) => {
            const clickable = e.target.closest('a, button, input, textarea, select, .clickable');
            // Only set hover to false if we are actually leaving the clickable element
            // (not just moving between its children)
            if (clickable && !clickable.contains(e.relatedTarget)) {
                setIsHovering(false);
            }
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
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
