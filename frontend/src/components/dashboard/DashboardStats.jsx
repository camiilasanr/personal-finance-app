const stats = [
    {
        title: "Ingresos",
        value: "$4.200.000",
        color: "#34C759",
    },
    {
        title: "Gastos",
        value: "$2.870.000",
        color: "#FF453A",
    },
    {
        title: "Ahorro",
        value: "$1.330.000",
        color: "#FF5C00",
    },
];

export default function DashboardStats() {
    return (
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {stats.map((stat) => (
                <article
                    key={stat.title}
                    className="
                        glass-card
                        rounded-[30px]
                        p-7
                    "
                >
                    <p
                        style={{
                            color: "#A1A1AA",
                            fontFamily: "var(--font-body)",
                            fontWeight: 500,
                            fontSize: "15px",
                        }}
                    >
                        {stat.title}
                    </p>

                    <h3
                        className="mt-4 text-white leading-none"
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 700,
                            fontSize: "38px",
                            letterSpacing: "-0.04em",
                        }}
                    >
                        {stat.value}
                    </h3>

                    <div
                        className="mt-6 h-[6px] rounded-full"
                        style={{
                            background: "rgba(255,255,255,.05)",
                        }}
                    >
                        <div
                            className="h-full rounded-full"
                            style={{
                                width: "72%",
                                background: stat.color,
                            }}
                        />
                    </div>
                </article>
            ))}
        </section>
    );
}