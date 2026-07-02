export default function ActivityItem({ title, category, time, amount, type = "expense" }) {
    const isIncome = type === "income";

    return (
        <div
            className="flex items-center justify-between gap-4 py-5"
            style={{
                borderBottom: "1px solid rgba(255,255,255,.03)",
            }}
        >
            <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">{title}</p>

                <p className="mt-1 truncate text-xs" style={{ color: "#A1A1AA" }}>
                    {category} · {time}
                </p>
            </div>

            <p
                className="shrink-0 text-sm font-semibold"
                style={{
                    color: isIncome ? "#34C759" : "#FF453A",
                }}
            >
                {isIncome ? "+" : "-"}
                {amount}
            </p>
        </div>
    );
}