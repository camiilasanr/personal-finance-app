import { useState } from "react";
import { ChevronDown, Lightbulb } from "lucide-react";

export default function BudgetInsight() {
    const [open, setOpen] = useState(false);

    return (
        <section
            className="
                glass-card
                relative
                mt-8
                overflow-hidden
                rounded-[30px]
            "
        >
            <div
                className="absolute left-0 top-0 h-full w-[6px]"
                style={{
                    background:
                        "linear-gradient(180deg,#FF5C00 0%,#FF8A00 100%)",
                }}
            />

            <button
                onClick={() => setOpen(!open)}
                className="
                    w-full
                    flex
                    items-center
                    justify-between
                    pl-10
                    pr-8
                    py-6
                    text-left
                    transition-all
                    duration-300
                    hover:bg-white/[0.02]
                "
            >
                <div>

                    <div className="flex items-center gap-2">
                        <Lightbulb
                            size={14}
                            color="#FF5C00"
                            strokeWidth={2.2}
                        />

                        <p
                            style={{
                                color: "#8F8F95",
                                fontFamily: "var(--font-body)",
                                fontSize: "14px",
                                fontWeight: 500,
                            }}
                        >
                            Insight del mes
                        </p>
                    </div>

                    <h3
                        className="mt-2 text-white"
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "22px",
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                        }}
                    >
                        Hogar necesita atención
                    </h3>

                </div>

                <ChevronDown
                    size={22}
                    color="#8F8F95"
                    className={`transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>

            <div
                className={`
                    grid
                    transition-all
                    duration-300
                    ${
                        open
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                    }
                `}
            >
                <div className="overflow-hidden">
                    <div className="pl-10 pr-8 pb-8">

                        <div
                            className="mb-6"
                            style={{
                                height: "1px",
                                background: "rgba(255,255,255,.05)",
                            }}
                        />

                        <div className="grid gap-5 md:grid-cols-3">

                            <div>
                                <p
                                    style={{
                                        color: "#6B7280",
                                        fontFamily: "var(--font-body)",
                                        fontSize: "13px",
                                    }}
                                >
                                    Utilizado
                                </p>

                                <h2
                                    className="mt-2 text-white"
                                    style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "34px",
                                        fontWeight: 700,
                                    }}
                                >
                                    89%
                                </h2>
                            </div>

                            <div>
                                <p
                                    style={{
                                        color: "#6B7280",
                                        fontFamily: "var(--font-body)",
                                        fontSize: "13px",
                                    }}
                                >
                                    Disponible
                                </p>

                                <h2
                                    className="mt-2 text-white"
                                    style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "34px",
                                        fontWeight: 700,
                                    }}
                                >
                                    $120.000
                                </h2>
                            </div>

                            <div>
                                <p
                                    style={{
                                        color: "#6B7280",
                                        fontFamily: "var(--font-body)",
                                        fontSize: "13px",
                                    }}
                                >
                                    Riesgo
                                </p>

                                <h2
                                    className="mt-2"
                                    style={{
                                        color: "#FF453A",
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "34px",
                                        fontWeight: 700,
                                    }}
                                >
                                    Alto
                                </h2>
                            </div>

                        </div>

                        <p
                            className="mt-8"
                            style={{
                                color: "#A1A1AA",
                                fontFamily: "var(--font-body)",
                                fontSize: "15px",
                                lineHeight: 1.8,
                            }}
                        >
                            La categoría{" "}
                            <strong style={{ color: "#FFFFFF" }}>
                                Hogar
                            </strong>{" "}
                            ha consumido el{" "}
                            <strong style={{ color: "#FFFFFF" }}>
                                89%
                            </strong>{" "}
                            del presupuesto mensual.

                            <br />
                            <br />

                            Si el ritmo de gasto continúa igual, es probable que
                            superes el límite antes de finalizar el mes.

                            <br />
                            <br />

                            Actualmente quedan{" "}
                            <strong style={{ color: "#FFFFFF" }}>
                                $120.000
                            </strong>{" "}
                            disponibles.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}