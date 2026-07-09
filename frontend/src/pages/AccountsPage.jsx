import { Bell, Plus } from "lucide-react";

import Sidebar from "../components/home/Sidebar";
import Header from "../components/home/Header";
import Logo from "../components/common/Logo";

import FloatingActionButton from "../components/home/FloatingActionButton";
import BottomNavigation from "../components/home/BottomNavigation";

import AccountCard from "../components/accounts/AccountCard";

const accounts = [
    {
        name: "Bancolombia",
        nickname: "Principal",
        number: "•••• 4321",
        balance: "$4.850.000",
        color: "#34C759",
    },
    {
        name: "Nu",
        nickname: "Compras",
        number: "•••• 1204",
        balance: "-$820.000",
        color: "#FF453A",
    },
    {
        name: "Nequi",
        nickname: "Uso diario",
        number: "•••• 8526",
        balance: "$720.000",
        color: "#FF9F0A",
    },
];

export default function AccountsPage() {
    return (
        <div
            className="min-h-screen flex"
            style={{
                background: "#090909",
                fontFamily: "var(--font-body)",
            }}
        >
            <Sidebar />

            <main className="flex-1 overflow-y-auto">
                <div className="mx-auto w-full max-w-[900px] px-6 py-8 lg:px-10 lg:py-10">

                    {/* Header móvil */}
                    <div className="mb-8 flex items-center justify-between lg:hidden">
                        <Logo />

                        <div className="flex items-center gap-3">
                            <button
                                className="h-10 w-10 rounded-full flex items-center justify-center"
                                style={{
                                    background: "rgba(255,255,255,.04)",
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
                                className="h-10 w-10 rounded-full flex items-center justify-center"
                                style={{
                                    background: "#FF5C00",
                                    color: "#090909",
                                    fontFamily: "var(--font-heading)",
                                    fontWeight: 700,
                                }}
                            >
                                L
                            </button>
                        </div>
                    </div>


                    <section className="mt-2 flex items-end justify-between gap-6 flex-wrap">
                        <div>
                            <h1
                                className="text-white"
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "42px",
                                    fontWeight: 700,
                                    letterSpacing: "-0.04em",
                                }}
                            >
                                Mis cuentas
                            </h1>
                        </div>

                        <button
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-2xl
                                px-5
                                py-3
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                            "
                            style={{
                                background: "#FF5C00",
                                color: "#090909",
                                fontFamily: "var(--font-heading)",
                                fontWeight: 600,
                            }}
                        >
                            <Plus size={18} />
                            Agregar cuenta
                        </button>
                    </section>

                    <section className="mt-10 flex flex-col gap-5">
                        {accounts.map((account) => (
                            <AccountCard
                                key={account.number}
                                name={account.name}
                                nickname={account.nickname}
                                number={account.number}
                                balance={account.balance}
                                color={account.color}
                            />
                        ))}
                    </section>

                </div>

                <FloatingActionButton />
                <BottomNavigation />
            </main>
        </div>
    );
}