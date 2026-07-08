import { useState } from "react";
import { Link } from "react-router-dom";

import OnboardingLayout from "../components/onboarding/OnboardingLayout";
import OnboardingButton from "../components/onboarding/OnboardingButton";
import SkipButton from "../components/onboarding/SkipButton";
import FormField from "../components/onboarding/FormField";

export default function OnboardingIncome() {
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [account, setAccount] = useState("");

    const canContinue =
        amount.trim() !== "" && category.trim() !== "" && account.trim() !== "";

    return (
        <OnboardingLayout currentStep={4}>
            <div className="flex flex-col">
                <h1
                    className="text-white font-semibold leading-tight"
                    style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "34px",
                        letterSpacing: "-1px",
                    }}
                >
                    ¿Cuál fue tu último ingreso?
                </h1>

                <p
                    className="mt-6 text-[15px] leading-7"
                    style={{
                        color: "#A1A1AA",
                        fontFamily: "var(--font-body)",
                    }}
                >
                    Esto nos ayudará a construir tu resumen financiero desde el primer día.
                </p>

                <div className="mt-9 flex flex-col gap-5">
                    <FormField
                        label="Monto"
                        placeholder="$0"
                        type="number"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                    />

                    <FormField
                        label="Categoría"
                        placeholder="Ej. Salario"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    />

                    <FormField
                        label="Cuenta"
                        placeholder="Ej. Bancolombia"
                        value={account}
                        onChange={(event) => setAccount(event.target.value)}
                    />
                </div>

                <div className="mt-10 flex flex-col gap-4">
                    <Link
                        to={canContinue ? "/onboarding/expense" : "#"}
                        onClick={(event) => {
                            if (!canContinue) event.preventDefault();
                        }}
                    >
                        <OnboardingButton disabled={!canContinue}>
                            Guardar y continuar
                        </OnboardingButton>
                    </Link>

                    <SkipButton to="/onboarding/expense" />
                </div>
            </div>
        </OnboardingLayout>
    );
}