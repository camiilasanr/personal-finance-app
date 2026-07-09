export default function BudgetTable() {
    const budgets = [
        {
            category: "Alimentación",
            spent: "$850.000",
            limit: "$1.200.000",
            remaining: "$350.000",
            status: "Normal",
            color: "#34C759",
        },
        {
            category: "Transporte",
            spent: "$320.000",
            limit: "$600.000",
            remaining: "$280.000",
            status: "Atención",
            color: "#FF9F0A",
        },
        {
            category: "Hogar",
            spent: "$980.000",
            limit: "$1.100.000",
            remaining: "$120.000",
            status: "Crítico",
            color: "#FF453A",
        },
        {
            category: "Entretenimiento",
            spent: "$180.000",
            limit: "$500.000",
            remaining: "$320.000",
            status: "Normal",
            color: "#34C759",
        },
    ];

    return (
        <section
            className="
                glass-card
                rounded-[30px]
                p-8
                mt-8
            "
        >
            <h2
                className="text-white"
                style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "30px",
                    letterSpacing: "-0.04em",
                }}
            >
                Presupuestos por categoría
            </h2>

            {/* Desktop */}
            <div className="hidden md:block mt-8 overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr
                            style={{
                                color: "#8F8F95",
                                fontFamily: "var(--font-body)",
                                fontSize: "14px",
                            }}
                        >
                            <th className="pb-5 text-left font-medium">
                                Categoría
                            </th>

                            <th className="pb-5 text-right font-medium">
                                Gastado
                            </th>

                            <th className="pb-5 text-right font-medium">
                                Límite
                            </th>

                            <th className="pb-5 text-right font-medium">
                                Restante
                            </th>

                            <th className="pb-5 text-right font-medium">
                                Estado
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {budgets.map((budget) => (
                            <tr
                                key={budget.category}
                                className="border-t border-white/5 hover:bg-white/[0.02] transition-colors"
                            >
                                <td className="py-5 text-white font-medium">
                                    {budget.category}
                                </td>

                                <td className="py-5 text-right text-white">
                                    {budget.spent}
                                </td>

                                <td className="py-5 text-right text-[#8F8F95]">
                                    {budget.limit}
                                </td>

                                <td className="py-5 text-right text-white">
                                    {budget.remaining}
                                </td>

                                <td className="py-5 text-right">
                                    <span
                                        className="rounded-full px-3 py-1 text-xs font-semibold"
                                        style={{
                                            background: `${budget.color}22`,
                                            color: budget.color,
                                        }}
                                    >
                                        {budget.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile */}
            <div className="mt-8 space-y-4 md:hidden">
                {budgets.map((budget) => (
                    <article
                        key={budget.category}
                        className="rounded-2xl border border-white/5 bg-[#151515] p-5"
                    >
                        <div className="flex items-center justify-between">
                            <h3
                                className="text-white"
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 700,
                                    fontSize: "18px",
                                }}
                            >
                                {budget.category}
                            </h3>

                            <span
                                className="rounded-full px-3 py-1 text-xs font-semibold"
                                style={{
                                    background: `${budget.color}22`,
                                    color: budget.color,
                                }}
                            >
                                {budget.status}
                            </span>
                        </div>

                        <div className="mt-5 space-y-3">
                            <div className="flex justify-between">
                                <span style={{ color: "#8F8F95" }}>
                                    Gastado
                                </span>

                                <strong className="text-white">
                                    {budget.spent}
                                </strong>
                            </div>

                            <div className="flex justify-between">
                                <span style={{ color: "#8F8F95" }}>
                                    Límite
                                </span>

                                <strong className="text-white">
                                    {budget.limit}
                                </strong>
                            </div>

                            <div className="flex justify-between">
                                <span style={{ color: "#8F8F95" }}>
                                    Restante
                                </span>

                                <strong className="text-white">
                                    {budget.remaining}
                                </strong>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}