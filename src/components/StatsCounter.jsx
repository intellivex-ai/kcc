import React, { useState, useEffect, useRef } from 'react';
import { motion, animate } from 'framer-motion';
import { Users, Award, Building, TrendingUp } from 'lucide-react';

const StatsCounter = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const stats = [
        {
            id: 1,
            icon: Users,
            value: 2000,
            suffix: '+',
            label: 'Happy Students',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
        },
        {
            id: 2,
            icon: Award,
            value: 500,
            suffix: '+',
            label: 'Certified Professionals',
            color: 'text-green-600',
            bgColor: 'bg-green-50'
        },
        {
            id: 3,
            icon: Building,
            value: 15,
            suffix: '+',
            label: 'Years of Excellence',
            color: 'text-purple-600',
            bgColor: 'bg-purple-50'
        },
        {
            id: 4,
            icon: TrendingUp,
            value: 95,
            suffix: '%',
            label: 'Success Rate',
            color: 'text-orange-600',
            bgColor: 'bg-orange-50'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const Counter = ({ value, suffix }) => {
        const nodeRef = useRef(null);

        useEffect(() => {
            if (!isVisible) return;

            const node = nodeRef.current;
            if (!node) return;

            // Use framer-motion's animate for performant counter animation
            // This avoids updating React state 60 times a second per counter
            const controls = animate(0, value, {
                duration: 2,
                ease: "easeOut",
                onUpdate(val) {
                    node.textContent = Math.floor(val) + suffix;
                }
            });

            return () => controls.stop();
        }, [isVisible, value, suffix]);

        return (
            <span ref={nodeRef} className="text-4xl sm:text-5xl lg:text-6xl font-black">
                0{suffix}
            </span>
        );
    };

    return (
        <section ref={sectionRef} className="py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                                <stat.icon size={32} className={stat.color} />
                            </div>
                            <div className={`${stat.color} mb-2`}>
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-gray-600 font-semibold text-sm sm:text-base">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;
