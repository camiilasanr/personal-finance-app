import { Link, useLocation } from "react-router-dom";
import {
    Home,
    ArrowLeftRight,
    Plus,
    Target,
    User,
} from "lucide-react";

const ITEMS = [
    {
        icon: Home,
        label: "Inicio",
        to: "/home",
    },
    {
        icon: ArrowLeftRight,
        label: "Mov.",
        to: "/movimientos",
    },
    {
        icon: Plus,
        label: "",
        to: "/nuevo",
        fab: true,
    },
    {
        icon: Target,
        label: "Metas",
        to: "/metas",
    },
    {
        icon: User,
        label: "Perfil",
        to: "/perfil",
    },
];

export default function BottomNavigation() {
    const location = useLocation();

    return (
        <nav
            className="
                lg:hidden
                fixed
                bottom-0
                left-0
                right-0
                h-20
                px-3
                flex
                items-center
                justify-between
                z-40
            "
            style={{
                background: "rgba(9,9,9,.96)",
                backdropFilter: "blur(20px)",
                borderTop: "1px solid rgba(255,255,255,.05)",
            }}
        >
            {ITEMS.map(({ icon: Icon, label, to, fab }) => {
                if (fab) {
                    return (
                        <button
                            key={to}
                            className="
                                -mt-6
                                h-16
                                w-16
                                rounded-full
                                flex
                                items-center
                                justify-center
                                shadow-lg
                                shrink-0
                            "
                            style={{
                                background: "#FF5C00",
                                boxShadow: "0 8px 24px rgba(255,92,0,.25)",
                            }}
                        >
                            <Plus
                                size={24}
                                color="#090909"
                                strokeWidth={2.5}
                            />
                        </button>
                    );
                }

                const active = location.pathname === to;

                return (
                    <Link
                        key={to}
                        to={to}
                        className="
                            flex
                            flex-col
                            items-center
                            justify-center
                            gap-1.5
                            flex-1
                        "
                    >
                        <Icon
                            size={20}
                            strokeWidth={2}
                            color={active ? "#FFFFFF" : "#6B7280"}
                        />

                        <span
                            className="text-xs font-medium"
                            style={{
                                color: active ? "#FFFFFF" : "#6B7280",
                            }}
                        >
                            {label}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}