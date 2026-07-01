import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
    { text: "Controla.", color: "#FFFFFF" },
    { text: "Ahorra.", color: "#FFFFFF" },
    { text: "Crece.", color: "#FF5C00" },
];

export default function AnimatedLoginText() {
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleCount(0);

            setTimeout(() => setVisibleCount(1), 250);
            setTimeout(() => setVisibleCount(2), 900);
            setTimeout(() => setVisibleCount(3), 1550);
        }, 4200);

        setTimeout(() => setVisibleCount(1), 250);
        setTimeout(() => setVisibleCount(2), 900);
        setTimeout(() => setVisibleCount(3), 1550);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col gap-3">
            {words.map((word, index) => (
                <motion.p
                    key={`${word.text}-${visibleCount >= index + 1}`}
                    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                    animate={
                        visibleCount >= index + 1
                            ? { opacity: 1, y: 0, filter: "blur(0px)" }
                            : { opacity: 0, y: 24, filter: "blur(8px)" }
                    }
                    transition={{
                        duration: 0.75,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-semibold leading-none"
                    style={{
                        fontSize: "clamp(48px, 5.5vw, 80px)",
                        letterSpacing: "-2px",
                        color: word.color,
                        minHeight: "1em",
                    }}
                >
                    {word.text}
                </motion.p>
            ))}
        </div>
    );
}