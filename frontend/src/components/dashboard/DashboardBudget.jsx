const categories = [
    {
        name: "Alimentación",
        percentage: 42,
        amount: "$1.204.000",
    },
    {
        name: "Hogar",
        percentage: 25,
        amount: "$720.000",
    },
    {
        name: "Transporte",
        percentage: 15,
        amount: "$430.000",
    },
    {
        name: "Salud",
        percentage: 8,
        amount: "$230.000",
    },
];

export default function DashboardBudget() {
    return (
        <section
            className="
                glass-card
                rounded-[30px]
                p-8
            "
        >
            <div className="flex items-center justify-between">
                <div>
                    <h2
                        className="text-white"
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "26px",
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                        }}
                    >
                        ¿En qué gastas más?
                    </h2>

                    <p
                        className="mt-2"
                        style={{
                            color: "#A1A1AA",
                            fontFamily: "var(--font-body)",
                            fontSize: "15px",
                        }}
                    >
                        Distribución de tus gastos este mes.
                    </p>
                </div>
            </div>

            <div className="mt-10 flex flex-col gap-8">
                {categories.map((category) => (
                    <div key={category.name}>
                        <div className="mb-3 flex items-center justify-between">
                            <div>
                                <p
                                    className="text-white"
                                    style={{
                                        fontFamily: "var(--font-heading)",
                                        fontWeight: 600,
                                        fontSize: "17px",
                                    }}
                                >
                                    {category.name}
                                </p>

                                <p
                                    className="mt-1"
                                    style={{
                                        color: "#A1A1AA",
                                        fontFamily: "var(--font-body)",
                                        fontSize: "14px",
                                    }}
                                >
                                    {category.amount}
                                </p>
                            </div>

                            <span
                                style={{
                                    color: "#FFFFFF",
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 700,
                                    fontSize: "18px",
                                }}
                            >
                                {category.percentage}%
                            </span>
                        </div>

                        <div
                            className="h-[8px] rounded-full"
                            style={{
                                background: "rgba(255,255,255,.05)",
                            }}
                        >
                            <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                    width: `${category.percentage}%`,
                                    background: "#FF5C00",
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}