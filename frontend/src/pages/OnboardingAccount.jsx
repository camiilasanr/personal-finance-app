import { useState } from "react";
import { Link } from "react-router-dom";

import OnboardingLayout from "../components/onboarding/OnboardingLayout";
import OnboardingButton from "../components/onboarding/OnboardingButton";
import SkipButton from "../components/onboarding/SkipButton";
import FormField from "../components/onboarding/FormField";

export default function OnboardingAccount() {
    const [accountName, setAccountName] = useState("");
    const [initialBalance, setInitialBalance] = useState("");

    const canContinue = accountName.trim() !== "";

    return (
        <OnboardingLayout currentStep={3}>
            <div className="flex flex-col">
                <h1
                    className="text-white font-semibold leading-tight"
                    style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "34px",
                        letterSpacing: "-1px",
                    }}
                >
                    ¿Dónde está tu dinero?
                </h1>

                <p
                    className="mt-6 text-[15px] leading-7"
                    style={{
                        color: "#A1A1AA",
                        fontFamily: "var(--font-body)",
                    }}
                >
                    Empecemos creando tu primera cuenta.
                </p>

                <p
                    className="mt-6 text-[15px] leading-7"
                    style={{
                        color: "#A1A1AA",
                        fontFamily: "var(--font-body)",
                    }}
                >
                    Puedes agregar más cuando quieras.
                </p>

                <div className="mt-9 flex flex-col gap-5">
                    <FormField
                        label="Nombre de la cuenta"
                        placeholder="Ej. Bancolombia"
                        value={accountName}
                        onChange={(event) => setAccountName(event.target.value)}
                    />

                    <FormField
                        label="Saldo inicial"
                        placeholder="$0"
                        type="number"
                        value={initialBalance}
                        onChange={(event) => setInitialBalance(event.target.value)}
                        helper="Puedes actualizar este valor más adelante."
                    />
                </div>

                <div className="mt-10 flex flex-col gap-4">
                    <Link
                        to={canContinue ? "/onboarding/income" : "#"}
                        onClick={(event) => {
                            if (!canContinue) event.preventDefault();
                        }}
                    >
                        <OnboardingButton disabled={!canContinue}>
                            Continuar
                        </OnboardingButton>
                    </Link>

                    <SkipButton />
                </div>
            </div>
        </OnboardingLayout>
    );
}