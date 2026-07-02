import { useState } from "react";
import { Link } from "react-router-dom";

import OnboardingLayout from "../components/onboarding/OnboardingLayout";
import OnboardingButton from "../components/onboarding/OnboardingButton";
import SkipButton from "../components/onboarding/SkipButton";
import OptionCard from "../components/onboarding/OptionCard";

const goals = [
    {
        id: "spending",
        title: "Controlar mis gastos",
        description: "Entender en qué se va tu dinero.",
    },
    {
        id: "saving",
        title: "Ahorrar más",
        description: "Construir mejores hábitos financieros.",
    },
    {
        id: "accounts",
        title: "Organizar mis cuentas",
        description: "Mantener todo tu dinero en un solo lugar.",
    },
    {
        id: "overview",
        title: "Tener una visión completa",
        description: "Entender tus finanzas al instante.",
    },
];

export default function OnboardingGoal() {
    const [selectedGoal, setSelectedGoal] = useState("");

    return (
        <OnboardingLayout currentStep={2}>
            <div className="flex flex-col">
                <h1
                    className="text-white font-semibold leading-tight"
                    style={{
                        fontSize: "34px",
                        letterSpacing: "-1px",
                    }}
                >
                    ¿Qué quieres lograr con Finora?
                </h1>

                <p
                    className="mt-6 text-[15px] leading-7"
                    style={{ color: "#A1A1AA" }}
                >
                    Personalizaremos tu experiencia desde el primer día.
                </p>

                <div className="mt-9 grid grid-cols-1 gap-4">
                    {goals.map((goal) => (
                        <OptionCard
                            key={goal.id}
                            title={goal.title}
                            description={goal.description}
                            selected={selectedGoal === goal.id}
                            onClick={() => setSelectedGoal(goal.id)}
                        />
                    ))}
                </div>

                <div className="mt-10 flex flex-col gap-4">
                    <Link
                        to={selectedGoal ? "/onboarding/account" : "#"}
                        onClick={(event) => {
                            if (!selectedGoal) event.preventDefault();
                        }}
                    >
                        <OnboardingButton disabled={!selectedGoal}>
                            Continuar
                        </OnboardingButton>
                    </Link>

                    <SkipButton />
                </div>
            </div>
        </OnboardingLayout>
    );
}