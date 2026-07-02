import { Bell } from "lucide-react";

export default function Header() {
    return (
        <header className="flex items-start justify-between">
            <div>
                <h1
                    className="text-3xl font-semibold text-white"
                    style={{ letterSpacing: "-0.8px" }}
                >
                    Buenos días, Laura 👋
                </h1>

                <p
                    className="mt-2 text-sm"
                    style={{ color: "#A1A1AA" }}
                >
                    Todo está bajo control. Tus finanzas van por buen camino.
                </p>
            </div>

            <div className="flex items-center gap-3">
                <button
                    className="
            h-10
            w-10
            rounded-full
            flex
            items-center
            justify-center
            transition-all
            duration-200
            hover:scale-105
          "
                    style={{
                        background: "#161616",
                        border: "1px solid rgba(255,255,255,.05)",
                    }}
                >
                    <Bell
                        size={17}
                        color="#FFFFFF"
                        strokeWidth={1.8}
                    />
                </button>

                <button
                    className="
            h-10
            w-10
            rounded-full
            flex
            items-center
            justify-center
            font-semibold
            transition-all
            duration-200
            hover:scale-105
        "
                    style={{
                        background: "#FF5C00",
                        color: "#090909",
                    }}
                >
                    L
                </button>
            </div>
        </header>
    );
}