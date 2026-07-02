import { Link } from "react-router-dom";

import OnboardingLayout from "../components/onboarding/OnboardingLayout";
import OnboardingButton from "../components/onboarding/OnboardingButton";
import SkipButton from "../components/onboarding/SkipButton";

export default function OnboardingWelcome() {
    return (
        <OnboardingLayout currentStep={1}>
            <div className="flex flex-col">
                <h1
                    className="text-white font-semibold leading-tight"
                    style={{
                        fontSize: "34px",
                        letterSpacing: "-1px",
                    }}
                >
                    Te damos la bienvenida.
                </h1>

                <p
                    className="mt-6 text-[15px] leading-7"
                    style={{ color: "#A1A1AA" }}
                >
                    Tu cuenta ha sido creada correctamente.
                </p>

                <p
                    className="mt-2 text-[15px] leading-7"
                    style={{ color: "#6B7280" }}
                >
                    Ahora configuraremos tu espacio financiero.
                </p>

                <div className="mt-12 flex flex-col gap-4">
                    <Link to="/onboarding/goal">
                        <OnboardingButton>
                            Configurar Finora
                        </OnboardingButton>
                    </Link>

                    <SkipButton />
                </div>
            </div>
        </OnboardingLayout>
    );
}