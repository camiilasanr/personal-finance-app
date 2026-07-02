import { ArrowDownRight, ArrowUpRight, Wallet } from "lucide-react";

const cards = [
    {
        title: "Ingresos del mes",
        value: "$4.200.000",
        subtitle: "+12% respecto al mes anterior",
        color: "#34C759",
        icon: ArrowUpRight,
    },
    {
        title: "Gastos del mes",
        value: "$2.870.000",
        subtitle: "-3% respecto al mes anterior",
        color: "#FF453A",
        icon: ArrowDownRight,
    },
    {
        title: "Presupuesto utilizado",
        value: "68%",
        subtitle: "$1.250.000 disponibles",
        color: "#FF5C00",
        icon: Wallet,
    },
];

export default function SummaryCards() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cards.map((card) => {
                const Icon = card.icon;

                return (
                    <article
                        key={card.title}
                        className="
                rounded-3xl
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
            "
                        style={{
                            background: "#161616",
                            border: "1px solid rgba(255,255,255,.05)",
                        }}
                    >
                        <div className="flex items-center justify-between">
                            <p
                                className="text-sm font-medium"
                                style={{ color: "#A1A1AA" }}
                            >
                                {card.title}
                            </p>

                            <div
                                className="h-10 w-10 rounded-full flex items-center justify-center"
                                style={{
                                    background: "rgba(255,255,255,.04)",
                                }}
                            >
                                <Icon
                                    size={18}
                                    color={card.color}
                                    strokeWidth={1.8}
                                />
                            </div>
                        </div>

                        <h3
                            className="mt-6 text-3xl font-semibold text-white"
                            style={{ letterSpacing: "-1px" }}
                        >
                            {card.value}
                        </h3>

                        <p
                            className="mt-2 text-sm"
                            style={{ color: card.color }}
                        >
                            {card.subtitle}
                        </p>
                    </article>
                );
            })}
        </section>
    );
}