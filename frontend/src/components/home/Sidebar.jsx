import { Link, useLocation } from "react-router-dom";
import {
    Home,
    ArrowLeftRight,
    CreditCard,
    PieChart,
    Target,
    User,
    LogOut,
} from "lucide-react";
import Logo from "../common/Logo";

const NAV_ITEMS = [
    {
        icon: Home,
        label: "Inicio",
        to: "/home",
    },
    {
        icon: ArrowLeftRight,
        label: "Movimientos",
        to: "/movimientos",
    },
    {
        icon: CreditCard,
        label: "Cuentas",
        to: "/cuentas",
    },
    {
        icon: PieChart,
        label: "Presupuestos",
        to: "/presupuestos",
    },
    {
        icon: Target,
        label: "Metas",
        to: "/metas",
    },
];

export default function Sidebar() {
    const location = useLocation();

    return (
        <aside
            className="
        hidden
        lg:flex
        flex-col
        justify-between
        w-[220px]
        h-screen
        sticky
        top-0
        px-5
        py-8
        border-r
      "
            style={{
                background: "#090909",
                borderColor: "rgba(255,255,255,.05)",
            }}
        >
            <div>
                <div className="mb-14">
                    <Logo />
                </div>

                <nav className="flex flex-col gap-2">
                    {NAV_ITEMS.map(({ icon: Icon, label, to }) => {
                        const active = location.pathname === to;

                        return (
                            <Link
                                key={to}
                                to={to}
                                className={`
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  transition-all
                  duration-200
                `}
                                style={{
                                    background: active
                                        ? "rgba(255,255,255,.05)"
                                        : "transparent",
                                }}
                            >
                                {active && (
                                    <div
                                        className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full"
                                        style={{
                                            background: "#FF5C00",
                                        }}
                                    />
                                )}

                                <Icon
                                    size={18}
                                    strokeWidth={1.8}
                                    color={active ? "#FFFFFF" : "#6B7280"}
                                    className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-[2px]
                  "
                                />

                                <span
                                    className="text-sm font-medium"
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
            </div>

            <div className="flex flex-col gap-6">
                <div
                    className="h-px"
                    style={{
                        background: "rgba(255,255,255,.05)",
                    }}
                />

                <button
                    className="
            flex
            items-center
            gap-3
            transition-colors
          "
                >
                    <div
                        className="
              size-10
              rounded-full
              flex
              items-center
              justify-center
            "
                        style={{
                            background: "#161616",
                        }}
                    >
                        <User
                            size={18}
                            color="#FFFFFF"
                            strokeWidth={1.8}
                        />
                    </div>

                    <div className="text-left">
                        <p className="text-sm font-medium text-white">
                            Laura Gómez
                        </p>

                        <p
                            className="text-xs"
                            style={{
                                color: "#A1A1AA",
                            }}
                        >
                            Ver perfil
                        </p>
                    </div>
                </button>

                <Link
                    to="/login"
                    className="
            flex
            items-center
            gap-3
            text-sm
            transition-colors
            "
                    style={{
                        color: "#6B7280",
                    }}
                >
                    <LogOut
                        size={17}
                        strokeWidth={1.8}
                    />

                    Cerrar sesión
                </Link>
            </div>
        </aside>
    );
}