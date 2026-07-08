import { Bell } from "lucide-react";

import Sidebar from "../components/home/Sidebar";
import Header from "../components/home/Header";
import Logo from "../components/common/Logo";

import FloatingActionButton from "../components/home/FloatingActionButton";
import BottomNavigation from "../components/home/BottomNavigation";

import DashboardHero from "../components/dashboard/DashboardHero";
import DashboardStats from "../components/dashboard/DashboardStats";
import DashboardBudget from "../components/dashboard/DashboardBudget";
import DashboardActions from "../components/dashboard/DashboardActions";

export default function DashboardPage() {
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
                <div className="mx-auto w-full max-w-[1400px] px-6 py-8 lg:px-10 lg:py-10">

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

                    <div className="mt-2">
                        <DashboardHero />
                    </div>

                    <div className="mt-8">
                        <DashboardStats />
                    </div>

                    <div className="mt-8">
                        <DashboardBudget />
                    </div>

                    <div className="mt-8">
                        <DashboardActions />
                    </div>

                </div>

                <FloatingActionButton />
                <BottomNavigation />
            </main>
        </div>
    );
}