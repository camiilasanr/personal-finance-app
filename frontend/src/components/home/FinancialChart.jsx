import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
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
                background: "#161616",
                border: "1px solid rgba(255,255,255,.06)",
            }}
        >
            <p
                className="text-xs"
                style={{ color: "#A1A1AA" }}
            >
                Patrimonio
            </p>

            <p
                className="mt-1 text-sm font-semibold text-white"
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
        rounded-3xl
        p-7
    "
            style={{
                background: "#161616",
                border: "1px solid rgba(255,255,255,.05)",
            }}
        >
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3
                        className="text-lg font-semibold text-white"
                    >
                        Evolución del patrimonio
                    </h3>

                    <p
                        className="text-sm mt-1"
                        style={{
                            color: "#A1A1AA",
                        }}
                    >
                        Últimos siete meses
                    </p>
                </div>

                <span
                    className="text-xs"
                    style={{
                        color: "#52525b",
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
                                stroke: "rgba(255,255,255,.05)",
                                strokeWidth: 1,
                            }}
                            content={<CustomTooltip />}
                        />

                        <Line
                            type="monotone"
                            dataKey="balance"
                            stroke="#FF5C00"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{
                                r: 5,
                                fill: "#FF5C00",
                                strokeWidth: 0,
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}