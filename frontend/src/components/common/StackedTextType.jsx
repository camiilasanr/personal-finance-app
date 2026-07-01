import { useEffect, useState } from "react";

const words = [
    { text: "Controla.", color: "#FFFFFF" },
    { text: "Ahorra.", color: "#FFFFFF" },
    { text: "Crece.", color: "#FF5C00" },
];

export default function StackedTextType() {
    const [lines, setLines] = useState(["", "", ""]);
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (lineIndex >= words.length) {
            const restart = setTimeout(() => {
                setLines(["", "", ""]);
                setLineIndex(0);
                setCharIndex(0);
            }, 2200);

            return () => clearTimeout(restart);
        }

        const currentWord = words[lineIndex].text;

        if (charIndex < currentWord.length) {
            const typing = setTimeout(() => {
                setLines((prev) => {
                    const next = [...prev];
                    next[lineIndex] = currentWord.slice(0, charIndex + 1);
                    return next;
                });

                setCharIndex((prev) => prev + 1);
            }, 85);

            return () => clearTimeout(typing);
        }

        const nextLine = setTimeout(() => {
            setLineIndex((prev) => prev + 1);
            setCharIndex(0);
        }, 450);

        return () => clearTimeout(nextLine);
    }, [lineIndex, charIndex]);

    return (
        <div className="flex flex-col gap-3">
            {words.map((word, index) => (
                <p
                    key={word.text}
                    className="font-semibold leading-none"
                    style={{
                        fontSize: "clamp(48px, 5.5vw, 80px)",
                        letterSpacing: "-2px",
                        color: word.color,
                        minHeight: "1em",
                        width: "8ch",
                    }}
                >
                    {lines[index]}
                    {lineIndex === index && <span style={{ color: "#FF5C00" }}>|</span>}
                </p>
            ))}
        </div>
    );
}