import { useState } from "react";

const filters = ["Todos", "Ingresos", "Gastos"];

export default function ActivityFilters() {
    const [activeFilter, setActiveFilter] = useState("Todos");

    return (
        <div className="flex items-center gap-2 overflow-x-auto">
            {filters.map((filter) => {
                const active = activeFilter === filter;

                return (
                    <button
                        key={filter}
                        type="button"
                        onClick={() => setActiveFilter(filter)}
                        className="rounded-full px-4 py-2 text-xs font-medium transition-all whitespace-nowrap"
                        style={{
                            background: active ? "#FF5C00" : "#161616",
                            color: active ? "#090909" : "#A1A1AA",
                            border: active
                                ? "1px solid #FF5C00"
                                : "1px solid rgba(255,255,255,.06)",
                        }}
                    >
                        {filter}
                    </button>
                );
            })}
        </div>
    );
}