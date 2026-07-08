import { useState } from "react";

const filters = ["Todos", "Ingresos", "Gastos"];

export default function ActivityFilters() {
    const [activeFilter, setActiveFilter] = useState("Todos");

    return (
        <div className="flex items-center gap-3 overflow-x-auto pb-1">
            {filters.map((filter) => {
                const active = activeFilter === filter;

                return (
                    <button
                        key={filter}
                        type="button"
                        onClick={() => setActiveFilter(filter)}
                        className="
                            rounded-full
                            px-5
                            py-2.5
                            whitespace-nowrap
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                        "
                        style={{
                            background: active
                                ? "#FF5C00"
                                : "rgba(22,22,22,.85)",
                            color: active
                                ? "#090909"
                                : "#A1A1AA",
                            border: active
                                ? "1px solid #FF5C00"
                                : "1px solid rgba(255,255,255,.06)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            fontFamily: active
                                ? "var(--font-heading)"
                                : "var(--font-body)",
                            fontWeight: active ? 600 : 500,
                            fontSize: "13px",
                            letterSpacing: active ? "-0.02em" : "0",
                        }}
                    >
                        {filter}
                    </button>
                );
            })}
        </div>
    );
}