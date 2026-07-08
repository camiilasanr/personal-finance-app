import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import HomePage from "./pages/HomePage";
import ActivityPage from "./pages/ActivityPage";
import DashboardPage from "./pages/DashboardPage";
import AccountsPage from "./pages/AccountsPage";

import OnboardingWelcome from "./pages/OnboardingWelcome";
import OnboardingGoal from "./pages/OnboardingGoal";
import OnboardingAccount from "./pages/OnboardingAccount";
import OnboardingIncome from "./pages/OnboardingIncome";
import OnboardingExpense from "./pages/OnboardingExpense";

import TypographyLab from "./pages/TypographyLab";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* HOME */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/cuentas" element={<AccountsPage />} />

        {/* ONBOARDING */}
        <Route path="/onboarding" element={<OnboardingWelcome />} />
        <Route path="/onboarding/goal" element={<OnboardingGoal />} />
        <Route path="/onboarding/account" element={<OnboardingAccount />} />
        <Route path="/onboarding/income" element={<OnboardingIncome />} />
        <Route path="/onboarding/expense" element={<OnboardingExpense />} />

        {/* LAB */}
        <Route path="/lab/fonts" element={<TypographyLab />} />
      </Routes>
    </BrowserRouter>
  );
}