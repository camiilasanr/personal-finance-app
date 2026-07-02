import Sidebar from "../components/home/Sidebar";
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
                fontFamily: "'Inter', sans-serif",
            }}
        >
            <Sidebar />

            <main className="flex-1 overflow-y-auto">
                <div className="mx-auto w-full max-w-[900px] px-6 py-8 lg:px-10 lg:py-12 pb-28">
                    <ActivityHeader />

                    <div className="mt-8">
                        <ActivitySearch />
                    </div>

                    <div className="mt-5">
                        <ActivityFilters />
                    </div>

                    <section className="mt-10">
                        <div
                            className="flex items-end justify-between pb-4"
                            style={{ borderBottom: "1px solid rgba(255,255,255,.04)" }}
                        >
                            <h2
                                className="text-xs font-semibold uppercase tracking-wider"
                                style={{ color: "#6B7280" }}
                            >
                                Hoy
                            </h2>

                            <span className="text-xs" style={{ color: "#52525b" }}>
                                3 movimientos
                            </span>
                        </div>

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

                    <section className="mt-10">
                        <div
                            className="flex items-end justify-between pb-4"
                            style={{ borderBottom: "1px solid rgba(255,255,255,.04)" }}
                        >
                            <h2
                                className="text-xs font-semibold uppercase tracking-wider"
                                style={{ color: "#6B7280" }}
                            >
                                Ayer
                            </h2>

                            <span className="text-xs" style={{ color: "#52525b" }}>
                                2 movimientos
                            </span>
                        </div>

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