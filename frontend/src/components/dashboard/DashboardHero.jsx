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
                    className="
                        mt-3
                        text-white
                        leading-none
                        text-[2.6rem]
                        sm:text-[3.4rem]
                        lg:text-[5.2rem]
                    "
                    style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
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

            <div
                className="
                    mt-8
                    lg:mt-12
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                    sm:flex-wrap
                "
            >
                <button
                    className="
                        w-full
                        sm:w-auto
                        flex
                        items-center
                        justify-center
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
                        w-full
                        sm:w-auto
                        flex
                        items-center
                        justify-center
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
                        w-full
                        sm:w-auto
                        flex
                        items-center
                        justify-center
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