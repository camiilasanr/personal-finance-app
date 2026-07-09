export default function BudgetHero() {
    return (
        <section
            className="
                glass-card
                rounded-[30px]
                p-8
                lg:p-10
            "
        >
            <p
                style={{
                    color: "#A1A1AA",
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: "16px",
                }}
            >
                Presupuesto del mes
            </p>

            <h2
                className="
                    mt-3
                    text-white
                    leading-none
                    text-[2.6rem]
                    sm:text-[3.4rem]
                    lg:text-[4.8rem]
                "
                style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    letterSpacing: "-0.05em",
                }}
            >
                67%
            </h2>

            <p
                className="mt-3"
                style={{
                    color: "#A1A1AA",
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                }}
            >
                $2.350.000 de $3.500.000 utilizados
            </p>

            <div
                className="mt-8 h-4 overflow-hidden rounded-full"
                style={{
                    background: "rgba(255,255,255,.06)",
                }}
            >
                <div
                    className="h-full rounded-full"
                    style={{
                        width: "67%",
                        background: "#FF5C00",
                    }}
                />
            </div>
        </section>
    );
}