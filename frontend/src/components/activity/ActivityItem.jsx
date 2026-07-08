export default function ActivityItem({
    title,
    category,
    time,
    amount,
    type = "expense",
}) {
    const isIncome = type === "income";

    return (
        <div
            className="
                flex
                items-center
                justify-between
                gap-4
                py-5
                transition-all
                duration-200
                hover:translate-x-1
            "
            style={{
                borderBottom: "1px solid rgba(255,255,255,.03)",
            }}
        >
            <div className="min-w-0">
                <p
                    className="truncate text-base text-white"
                    style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                    }}
                >
                    {title}
                </p>

                <p
                    className="mt-1 truncate text-sm"
                    style={{
                        color: "#A1A1AA",
                        fontFamily: "var(--font-body)",
                        fontWeight: 400,
                    }}
                >
                    {category} · {time}
                </p>
            </div>

            <p
                className="shrink-0 text-base"
                style={{
                    color: isIncome ? "#34C759" : "#FF453A",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                }}
            >
                {isIncome ? "+" : "-"}
                {amount}
            </p>
        </div>
    );
}