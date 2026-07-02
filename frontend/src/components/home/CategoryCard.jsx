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
            className="rounded-3xl p-7"
            style={{
                background: "#161616",
                border: "1px solid rgba(255,255,255,.05)",
            }}
        >
            <h3 className="text-lg font-semibold text-white">
                Gastos por categoría
            </h3>

            <p
                className="mt-1 text-sm"
                style={{
                    color: "#A1A1AA",
                }}
            >
                Distribución del gasto mensual
            </p>

            <div className="mt-8 flex flex-col gap-6">
                {categories.map((category) => (
                    <div key={category.name}>
                        <div className="flex items-center justify-between mb-2">
                            <span
                                className="text-sm"
                                style={{
                                    color: "#FFFFFF",
                                }}
                            >
                                {category.name}
                            </span>

                            <span
                                className="text-sm font-medium"
                                style={{
                                    color: "#A1A1AA",
                                }}
                            >
                                {category.percentage}%
                            </span>
                        </div>

                        <div
                            className="h-2 w-full rounded-full overflow-hidden"
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