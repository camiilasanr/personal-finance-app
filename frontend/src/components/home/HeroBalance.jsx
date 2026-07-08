import { Eye, EyeOff, TrendingUp } from "lucide-react";
import { useState } from "react";
import { BackgroundGradient } from "../ui/background-gradient";

export default function HeroBalance() {
    const [hidden, setHidden] = useState(false);

    return (
        <BackgroundGradient
            containerClassName="rounded-[30px]"
            className="rounded-[30px] p-8 lg:p-10"
        >
            <div className="flex items-center justify-between">
                <span
                    className="text-base"
                    style={{
                        color: "#B3B3B3",
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        letterSpacing: "-0.2px",
                    }}
                >
                    Saldo disponible
                </span>

                <button
                    onClick={() => setHidden(!hidden)}
                    className="
                        h-9
                        w-9
                        rounded-full
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-200
                        hover:bg-white/5
                        hover:-translate-y-0.5
                        hover:rotate-6
                    "
                    style={{
                        background: "rgba(255,255,255,.04)",
                        border: "1px solid rgba(255,255,255,.05)",
                    }}
                >
                    {hidden ? (
                        <EyeOff
                            size={17}
                            color="#FFFFFF"
                            strokeWidth={1.8}
                        />
                    ) : (
                        <Eye
                            size={17}
                            color="#FFFFFF"
                            strokeWidth={1.8}
                        />
                    )}
                </button>
            </div>

            <h2
                className="mt-8 text-white leading-none"
                style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "clamp(60px,6vw,86px)",
                    letterSpacing: "-0.05em",
                    lineHeight: 1,
                }}
            >
                {hidden ? "••••••••" : "$8.540.000"}
            </h2>

            <div className="mt-8 flex items-center gap-3">
                <div
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        px-3
                        py-1.5
                        transition-all
                        duration-200
                    "
                    style={{
                        background: "rgba(52,199,89,.10)",
                        border: "1px solid rgba(52,199,89,.18)",
                        color: "#34C759",
                    }}
                >
                    <TrendingUp
                        size={14}
                        strokeWidth={2}
                    />

                    <span
                        className="text-sm"
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 600,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        +8.2%
                    </span>
                </div>

                <span
                    className="text-sm"
                    style={{
                        color: "#A1A1AA",
                        fontFamily: "var(--font-body)",
                        fontWeight: 400,
                    }}
                >
                    respecto al mes anterior
                </span>
            </div>
        </BackgroundGradient>
    );
}