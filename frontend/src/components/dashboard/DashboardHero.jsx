import {
    ArrowDownLeft,
    ArrowUpRight,
    Repeat2,
} from "lucide-react";

export default function DashboardHero() {
    return (
        <section
            className="
                glass-card
                rounded-[30px]
                p-8
                lg:p-10
            "
        >
            <div>
                <p
                    style={{
                        color: "#A1A1AA",
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        fontSize: "16px",
                    }}
                >
                    Dinero disponible
                </p>

                <h2
                    className="mt-3 text-white leading-none"
                    style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "clamp(56px,7vw,82px)",
                        letterSpacing: "-0.05em",
                    }}
                >
                    $8.540.000
                </h2>

                <p
                    className="mt-4"
                    style={{
                        color: "#34C759",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        fontSize: "15px",
                    }}
                >
                    +8% frente al mes pasado
                </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
                <button
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-2xl
                        px-5
                        py-3
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                    "
                    style={{
                        background: "#FF5C00",
                        color: "#090909",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                    }}
                >
                    <ArrowDownLeft size={18} />
                    Agregar gasto
                </button>

                <button
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-2xl
                        px-5
                        py-3
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                    "
                    style={{
                        background: "rgba(255,255,255,.04)",
                        border: "1px solid rgba(255,255,255,.06)",
                        color: "#FFFFFF",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                    }}
                >
                    <ArrowUpRight size={18} />
                    Agregar ingreso
                </button>

                <button
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-2xl
                        px-5
                        py-3
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                    "
                    style={{
                        background: "rgba(255,255,255,.04)",
                        border: "1px solid rgba(255,255,255,.06)",
                        color: "#FFFFFF",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                    }}
                >
                    <Repeat2 size={18} />
                    Transferir
                </button>
            </div>
        </section>
    );
}