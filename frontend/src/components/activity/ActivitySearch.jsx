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
            rounded-2xl
            py-4
            pl-12
            pr-4
            text-sm
            outline-none
            transition-all
        "
                style={{
                    background: "#161616",
                    border: "1px solid rgba(255,255,255,.06)",
                    color: "#FFFFFF",
                }}
            />
        </div>
    );
}