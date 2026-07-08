import { Bell } from "lucide-react";
import { colors } from "../../design-system";

export default function Header() {
    return (
        <header className="flex items-start justify-between pb-2">
            <div>
                <h1
                    className="text-white text-3xl font-semibold tracking-[-0.5px]"
                    style={{
                        fontFamily: "var(--font-heading)",
                    }}
                >
                    Hola, Laura
                </h1>

                <p
                    className="mt-2 text-sm"
                    style={{
                        color: colors.textSecondary,
                        fontFamily: "var(--font-body)",
                    }}
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
                        hover:bg-white/5
                        hover:-translate-y-0.5
                    "
                    style={{
                        background: colors.surface,
                        border: `1px solid ${colors.border}`,
                        boxShadow: "0 8px 24px rgba(0,0,0,.25)",
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
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                    "
                    style={{
                        background: colors.primary,
                        color: colors.background,
                        boxShadow: "0 8px 24px rgba(255,92,0,.18)",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "var(--font-body)",
                            fontWeight: 700,
                        }}
                    >
                        L
                    </span>
                </button>
            </div>
        </header>
    );
}