import {
    Plus,
    X,
    ArrowDownLeft,
    ArrowUpRight,
    ArrowLeftRight,
} from "lucide-react";
import { useState } from "react";

export default function FloatingActionButton() {
    const [open, setOpen] = useState(false);

    const actions = [
        {
            icon: ArrowUpRight,
            label: "Nuevo ingreso",
        },
        {
            icon: ArrowDownLeft,
            label: "Nuevo gasto",
        },
        {
            icon: ArrowLeftRight,
            label: "Transferencia",
        },
    ];

    return (
        <div
            className="
                hidden
                lg:flex
                fixed
                bottom-8
                right-8
                z-50
                flex-col
                items-end
                gap-3
            "
        >
            {open && (
                <div
                    className="rounded-3xl p-2 flex flex-col gap-1"
                    style={{
                        background: "#161616",
                        border: "1px solid rgba(255,255,255,.05)",
                        boxShadow: "0 10px 40px rgba(0,0,0,.45)",
                    }}
                >
                    {actions.map(({ icon: Icon, label }) => (
                        <button
                            key={label}
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-2xl
                                px-4
                                py-3
                                transition-all
                                duration-200
                                hover:bg-white/[0.04]
                            "
                        >
                            <Icon
                                size={17}
                                strokeWidth={1.8}
                                color="#FFFFFF"
                            />

                            <span
                                className="text-sm"
                                style={{
                                    color: "#FFFFFF",
                                }}
                            >
                                {label}
                            </span>
                        </button>
                    ))}
                </div>
            )}

            <button
                onClick={() => setOpen(!open)}
                className="
                    h-14
                    w-14
                    rounded-full
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:scale-105
                    active:scale-95
                "
                style={{
                    background: "#FF5C00",
                    boxShadow: "0 8px 24px rgba(255,92,0,.18)",
                }}
            >
                {open ? (
                    <X
                        size={20}
                        color="#090909"
                        strokeWidth={2.2}
                    />
                ) : (
                    <Plus
                        size={20}
                        color="#090909"
                        strokeWidth={2.2}
                    />
                )}
            </button>
        </div>
    );
}