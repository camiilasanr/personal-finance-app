import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

const DATA = [
    { month: "Feb", balance: 6200000 },
    { month: "Mar", balance: 5900000 },
    { month: "Abr", balance: 7100000 },
    { month: "May", balance: 6800000 },
    { month: "Jun", balance: 7400000 },
    { month: "Jul", balance: 8100000 },
    { month: "Ago", balance: 8540000 },
];

function formatMoney(value) {
    return "$" + value.toLocaleString("es-CO");
}

function CustomTooltip({ active, payload }) {
    if (!active || !payload?.length) return null;

    return (
        <div
            className="rounded-2xl px-4 py-3"
            style={{
                background: "rgba(22,22,22,.95)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,.06)",
                boxShadow: "0 10px 30px rgba(0,0,0,.35)",
            }}
        >
            <p
                className="text-xs"
                style={{
                    color: "#A1A1AA",
                    fontFamily: "var(--font-body)",
                }}
            >
                Patrimonio
            </p>

            <p
                className="mt-1 text-sm font-semibold text-white"
                style={{
                    fontFamily: "var(--font-body)",
                }}
            >
                {formatMoney(payload[0].value)}
            </p>
        </div>
    );
}

export default function FinancialChart() {
    return (
        <section
            className="
                glass-card
                rounded-[30px]
                p-7
            "
        >
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h3
                        className="text-lg font-semibold text-white"
                        style={{
                            fontFamily: "var(--font-heading)",
                        }}
                    >
                        Evolución del patrimonio
                    </h3>

                    <p
                        className="mt-1 text-sm"
                        style={{
                            color: "#A1A1AA",
                            fontFamily: "var(--font-body)",
                        }}
                    >
                        Últimos siete meses
                    </p>
                </div>

                <span
                    className="text-xs"
                    style={{
                        color: "#6B7280",
                        fontFamily: "var(--font-body)",
                    }}
                >
                    Actualizado hoy
                </span>
            </div>

            <div className="h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={DATA}
                        margin={{
                            top: 10,
                            right: 5,
                            left: 5,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid
                            vertical={false}
                            stroke="rgba(255,255,255,.04)"
                        />

                        <XAxis
                            dataKey="month"
                            tick={{
                                fill: "#6B7280",
                                fontSize: 12,
                            }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis hide />

                        <Tooltip
                            cursor={{
                                stroke: "rgba(255,255,255,.06)",
                                strokeWidth: 1,
                            }}
                            content={<CustomTooltip />}
                        />

                        <Line
                            type="monotone"
                            dataKey="balance"
                            stroke="#FF5C00"
                            strokeWidth={3}
                            dot={false}
                            activeDot={{
                                r: 6,
                                fill: "#FF5C00",
                                stroke: "#161616",
                                strokeWidth: 2,
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}