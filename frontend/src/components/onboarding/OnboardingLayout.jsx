import ProgressBar from "./ProgressBar";
import finoraLogo from "../../assets/brand/finora/finora_logotipo.svg";

export default function OnboardingLayout({
    currentStep,
    children,
}) {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center px-6 py-8"
            style={{
                background: "#090909",
                fontFamily: "var(--font-body)",
            }}
        >
            <div className="mb-10">
                <img
                    src={finoraLogo}
                    alt="Finora"
                    className="w-52 h-auto"
                />
            </div>

            <div
                className="w-full max-w-[490px] rounded-[30px] p-8 sm:p-10"
                style={{
                    background: "#161616",
                    border: "1px solid rgba(255,255,255,.06)",
                }}
            >
                <ProgressBar currentStep={currentStep} totalSteps={5} />

                <div className="mt-10">
                    {children}
                </div>
            </div>
        </div>
    );
}