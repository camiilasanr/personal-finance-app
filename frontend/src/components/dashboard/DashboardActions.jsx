import {
    ArrowDownLeft,
    ArrowUpRight,
    PiggyBank,
    Repeat2,
} from "lucide-react";

const actions = [
    {
        icon: ArrowDownLeft,
        title: "Agregar gasto",
        color: "#FF453A",
    },
    {
        icon: ArrowUpRight,
        title: "Registrar ingreso",
        color: "#34C759",
    },
    {
        icon: Repeat2,
        title: "Transferir",
        color: "#4F8CFF",
    },
    {
        icon: PiggyBank,
        title: "Crear ahorro",
        color: "#FF5C00",
    },
];

export default function DashboardActions() {
    return (
        <section>
            <div className="mb-6">
                <h2
                    className="text-white"
                    style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "26px",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                    }}
                >
                    Acciones rápidas
                </h2>

                <p
                    className="mt-2"
                    style={{
                        color: "#A1A1AA",
                        fontFamily: "var(--font-body)",
                        fontSize: "15px",
                    }}
                >
                    Todo lo que necesitas hacer, en un solo lugar.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
                {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <button
                            key={action.title}
                            className="
                                glass-card
                                rounded-[30px]
                                p-6
                                text-left
                                transition-all
                                duration-200
                                hover:-translate-y-1
                            "
                        >
                            <div
                                className="
                                    h-12
                                    w-12
                                    rounded-2xl
                                    flex
                                    items-center
                                    justify-center
                                "
                                style={{
                                    background: "rgba(255,255,255,.05)",
                                }}
                            >
                                <Icon
                                    size={22}
                                    color={action.color}
                                    strokeWidth={2}
                                />
                            </div>

                            <h3
                                className="mt-6 text-white"
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 600,
                                    fontSize: "18px",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                {action.title}
                            </h3>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}