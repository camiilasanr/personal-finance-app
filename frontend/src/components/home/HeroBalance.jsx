import { Eye, EyeOff, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function HeroBalance() {
    const [hidden, setHidden] = useState(false);

    return (
        <section
            className="rounded-[30px] p-8 lg:p-10"
            style={{
                background: "#161616",
                border: "1px solid rgba(255,255,255,.05)",
            }}
        >
            <div className="flex items-center justify-between">
                <span
                    className="text-sm font-medium"
                    style={{ color: "#A1A1AA" }}
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
            hover:scale-105
          "
                    style={{
                        background: "rgba(255,255,255,.04)",
                    }}
                >
                    {hidden ? (
                        <EyeOff size={17} color="#FFFFFF" />
                    ) : (
                        <Eye size={17} color="#FFFFFF" />
                    )}
                </button>
            </div>

            <h2
                className="mt-8 font-semibold text-white leading-none"
                style={{
                    fontSize: "clamp(52px,6vw,82px)",
                    letterSpacing: "-4px",
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
        "
                    style={{
                        background: "rgba(52,199,89,.12)",
                        color: "#34C759",
                    }}
                >
                    <TrendingUp size={14} />

                    <span className="text-sm font-medium">
                        +8.2%
                    </span>
                </div>

                <span
                    className="text-sm"
                    style={{
                        color: "#A1A1AA",
                    }}
                >
                    respecto al mes anterior
                </span>
            </div>
        </section>
    );
}