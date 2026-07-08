import { Search } from "lucide-react";

export default function ActivitySearch() {
    return (
        <div className="relative">
            <Search
                size={18}
                strokeWidth={1.8}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ color: "#6B7280" }}
            />

            <input
                type="text"
                placeholder="Buscar movimiento..."
                className="
                    w-full
                    rounded-[20px]
                    py-4
                    pl-12
                    pr-4
                    text-sm
                    outline-none
                    transition-all
                    duration-200
                    focus:border-[#FF5C00]
                "
                style={{
                    background: "rgba(22,22,22,.85)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,.06)",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                }}
            />
        </div>
    );
}