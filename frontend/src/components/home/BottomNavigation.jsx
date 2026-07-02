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
                -mt-8
                h-14
                w-14
                rounded-full
                flex
                items-center
                justify-center
                shadow-lg
              "
                            style={{
                                background: "#FF5C00",
                            }}
                        >
                            <Plus
                                size={22}
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
                gap-1
                flex-1
            "
                    >
                        <Icon
                            size={18}
                            strokeWidth={1.8}
                            color={active ? "#FFFFFF" : "#6B7280"}
                        />

                        <span
                            className="text-[11px]"
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