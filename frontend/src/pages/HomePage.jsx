import Sidebar from "../components/home/Sidebar";
import Header from "../components/home/Header";
import Logo from "../components/common/Logo";
import { Bell } from "lucide-react";
import HeroBalance from "../components/home/HeroBalance";
import SummaryCards from "../components/home/SummaryCards";
import FinancialChart from "../components/home/FinancialChart";
import CategoryCard from "../components/home/CategoryCard";
import ActivityList from "../components/home/ActivityList";
import FloatingActionButton from "../components/home/FloatingActionButton";
import BottomNavigation from "../components/home/BottomNavigation";

export default function HomePage() {
    return (
        <div
            className="min-h-screen flex"
            style={{
                background: `
                    radial-gradient(
                        circle at top right,
                        rgba(255,92,0,.08),
                        transparent 28%
                    ),

                    radial-gradient(
                        circle at bottom left,
                        rgba(255,255,255,.025),
                        transparent 35%
                    ),

                    #090909
                `,
                fontFamily: "var(--font-body)",
            }}
        >
            <Sidebar />

            <main className="flex-1 overflow-y-auto">
                {/* 👇 Solo agregué pb-32 */}
                <div className="mx-auto w-full max-w-[1400px] px-6 py-8 pb-40 lg:px-10 lg:py-10 lg:pb-10">

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
                                    font-semibold
                                "
                                style={{
                                    background: "#FF5C00",
                                    color: "#090909",
                                    fontFamily: "var(--font-body)",
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

                    <div className="mt-10">
                        <HeroBalance />
                    </div>

                    <div className="mt-8">
                        <SummaryCards />
                    </div>

                    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
                        <FinancialChart />
                        <CategoryCard />
                    </div>

                    <div className="mt-8">
                        <ActivityList />
                    </div>

                </div>

                <FloatingActionButton />
                <BottomNavigation />
            </main>
        </div>
    );
}