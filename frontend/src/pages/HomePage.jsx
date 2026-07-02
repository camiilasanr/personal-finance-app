import Sidebar from "../components/home/Sidebar";
import Header from "../components/home/Header";
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
                background: "#090909",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            <Sidebar />

            <main className="flex-1 overflow-y-auto">
                <div className="mx-auto w-full max-w-[1400px] px-6 py-8 lg:px-10 lg:py-10">
                    <Header />

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