import {
    ShoppingCart,
    Utensils,
    TrendingUp,
    Car,
    Heart,
} from "lucide-react";

const movements = [
    {
        icon: ShoppingCart,
        title: "Éxito",
        category: "Alimentación",
        date: "Hoy · 2:30 PM",
        amount: -120000,
    },
    {
        icon: Utensils,
        title: "Andrés Carne de Res",
        category: "Restaurantes",
        date: "Hoy · 1:15 PM",
        amount: -87000,
    },
    {
        icon: TrendingUp,
        title: "Transferencia recibida",
        category: "Ingresos",
        date: "Ayer · 9:00 AM",
        amount: 1500000,
    },
    {
        icon: Car,
        title: "Uber",
        category: "Transporte",
        date: "Ayer · 7:45 PM",
        amount: -24000,
    },
    {
        icon: Heart,
        title: "Farmacia Cruz Verde",
        category: "Salud",
        date: "Lunes · 11:30 AM",
        amount: -56000,
    },
];

function formatMoney(value) {
    return "$" + Math.abs(value).toLocaleString("es-CO");
}

export default function ActivityList() {
    return (
        <section className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <h3
                    className="text-lg text-white"
                    style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                    }}
                >
                    Actividad reciente
                </h3>

                <button
                    className="
                        text-sm
                        transition-all
                        duration-200
                        hover:translate-x-1
                    "
                    style={{
                        color: "#FF5C00",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                    }}
                >
                    Ver todo →
                </button>
            </div>

            <div
                className="
                    glass-card
                    overflow-hidden
                    rounded-[30px]
                "
            >
                {movements.map((movement, index) => {
                    const Icon = movement.icon;
                    const positive = movement.amount > 0;

                    return (
                        <div
                            key={movement.title}
                            className="
                                flex
                                items-center
                                justify-between
                                px-6
                                py-5
                                transition-all
                                duration-200
                                hover:bg-white/[0.02]
                            "
                            style={{
                                borderBottom:
                                    index !== movements.length - 1
                                        ? "1px solid rgba(255,255,255,.03)"
                                        : "none",
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-2xl
                                    "
                                    style={{
                                        background: "rgba(255,255,255,.04)",
                                    }}
                                >
                                    <Icon
                                        size={18}
                                        strokeWidth={1.8}
                                        color="#FFFFFF"
                                    />
                                </div>

                                <div>
                                    <p
                                        className="text-white"
                                        style={{
                                            fontFamily: "var(--font-heading)",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {movement.title}
                                    </p>

                                    <p
                                        className="mt-1 text-sm"
                                        style={{
                                            color: "#A1A1AA",
                                            fontFamily: "var(--font-body)",
                                        }}
                                    >
                                        {movement.category} · {movement.date}
                                    </p>
                                </div>
                            </div>

                            <span
                                className="text-base"
                                style={{
                                    color: positive ? "#34C759" : "#FF453A",
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 700,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                {positive ? "+" : "-"}
                                {formatMoney(movement.amount)}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}