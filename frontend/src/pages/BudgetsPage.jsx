import { Bell, Plus } from "lucide-react";

import Sidebar from "../components/home/Sidebar";
import Logo from "../components/common/Logo";

import FloatingActionButton from "../components/home/FloatingActionButton";
import BottomNavigation from "../components/home/BottomNavigation";

import BudgetHero from "../components/budgets/BudgetHero";
import BudgetInsight from "../components/budgets/BudgetInsight";
import BudgetTable from "../components/budgets/BudgetTable";

export default function BudgetsPage() {
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
                <div className="mx-auto w-full max-w-[900px] px-6 py-8 pb-40 lg:px-10 lg:py-10 lg:pb-10">

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

                    <section className="flex items-end justify-between gap-6 flex-wrap">
                        <h1
                            className="text-white"
                            style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "42px",
                                fontWeight: 700,
                                letterSpacing: "-0.04em",
                            }}
                        >
                            Presupuestos
                        </h1>

                        <button
                            className="
                                hidden
                                md:flex
                                items-center
                                gap-2
                                rounded-2xl
                                px-5
                                py-3
                            "
                            style={{
                                background: "#FF5C00",
                                color: "#090909",
                                fontFamily: "var(--font-heading)",
                                fontWeight: 600,
                            }}
                        >
                            <Plus size={18} />
                            Nuevo presupuesto
                        </button>
                    </section>

                    <div className="mt-10">
                        <BudgetHero />
                    </div>

                    <BudgetInsight />

                    <BudgetTable />

                </div>

                <FloatingActionButton />
                <BottomNavigation />
            </main>
        </div>
    );
}