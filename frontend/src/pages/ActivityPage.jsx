import Sidebar from "../components/home/Sidebar";
import Header from "../components/home/Header";
import Logo from "../components/common/Logo";
import { Bell } from "lucide-react";

import FloatingActionButton from "../components/home/FloatingActionButton";
import BottomNavigation from "../components/home/BottomNavigation";

import ActivityHeader from "../components/activity/ActivityHeader";
import ActivitySearch from "../components/activity/ActivitySearch";
import ActivityFilters from "../components/activity/ActivityFilters";
import ActivityItem from "../components/activity/ActivityItem";

export default function ActivityPage() {
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
                                className="
                                    h-10
                                    w-10
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                "
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
                                className="
                                    h-10
                                    w-10
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                "
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

                    {/* Header escritorio */}
                    <div className="hidden lg:block">
                        <Header />
                    </div>

                    <div className="mt-8">
                        <ActivityHeader />
                    </div>

                    <div className="mt-8">
                        <ActivitySearch />
                    </div>

                    <div className="mt-6">
                        <ActivityFilters />
                    </div>

                    <section
                        className="
                            glass-card
                            mt-8
                            rounded-[30px]
                            p-8
                        "
                    >
                        <h2
                            className="mb-6 text-xs uppercase tracking-wider"
                            style={{
                                color: "#6B7280",
                                fontFamily: "var(--font-heading)",
                                fontWeight: 600,
                            }}
                        >
                            Hoy
                        </h2>

                        <ActivityItem
                            title="Éxito"
                            category="Alimentación"
                            time="2:30 PM"
                            amount="$120.000"
                        />

                        <ActivityItem
                            title="Uber"
                            category="Transporte"
                            time="7:45 PM"
                            amount="$24.000"
                        />

                        <ActivityItem
                            title="Transferencia recibida"
                            category="Ingresos"
                            time="9:00 AM"
                            amount="$1.500.000"
                            type="income"
                        />
                    </section>

                    <section
                        className="
                            glass-card
                            mt-8
                            rounded-[30px]
                            p-8
                        "
                    >
                        <h2
                            className="mb-6 text-xs uppercase tracking-wider"
                            style={{
                                color: "#6B7280",
                                fontFamily: "var(--font-heading)",
                                fontWeight: 600,
                            }}
                        >
                            Ayer
                        </h2>

                        <ActivityItem
                            title="Netflix"
                            category="Entretenimiento"
                            time="9:15 PM"
                            amount="$39.900"
                        />

                        <ActivityItem
                            title="Salario"
                            category="Ingresos"
                            time="8:00 AM"
                            amount="$4.500.000"
                            type="income"
                        />
                    </section>
                </div>

                <FloatingActionButton />

                <BottomNavigation />
            </main>
        </div>
    );
}