const categories = [
    {
        name: "Alimentación",
        percentage: 42,
    },
    {
        name: "Hogar",
        percentage: 25,
    },
    {
        name: "Transporte",
        percentage: 15,
    },
    {
        name: "Salud",
        percentage: 8,
    },
];

export default function CategoryCard() {
    return (
        <section
            className="
                glass-card
                rounded-[30px]
                p-7
            "
        >
            <h3
                className="text-lg font-semibold text-white"
                style={{
                    fontFamily: "var(--font-heading)",
                }}
            >
                Gastos por categoría
            </h3>

            <p
                className="mt-1 text-sm"
                style={{
                    color: "#A1A1AA",
                    fontFamily: "var(--font-body)",
                }}
            >
                Distribución del gasto mensual
            </p>

            <div className="mt-8 flex flex-col gap-6">
                {categories.map((category) => (
                    <div key={category.name}>
                        <div className="mb-2 flex items-center justify-between">
                            <span
                                className="text-sm font-medium"
                                style={{
                                    color: "#FFFFFF",
                                    fontFamily: "var(--font-body)",
                                }}
                            >
                                {category.name}
                            </span>

                            <span
                                className="text-sm font-semibold"
                                style={{
                                    color: "#A1A1AA",
                                    fontFamily: "var(--font-body)",
                                }}
                            >
                                {category.percentage}%
                            </span>
                        </div>

                        <div
                            className="h-2 w-full overflow-hidden rounded-full"
                            style={{
                                background: "rgba(255,255,255,.05)",
                            }}
                        >
                            <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                    width: `${category.percentage}%`,
                                    background:
                                        category.percentage >= 40
                                            ? "#FF5C00"
                                            : "rgba(255,255,255,.18)",
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}