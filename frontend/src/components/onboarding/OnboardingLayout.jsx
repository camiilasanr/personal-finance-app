import ProgressBar from "./ProgressBar";

export default function OnboardingLayout({
    currentStep,
    children,
}) {
    return (
        <div
            className="min-h-screen flex items-center justify-center px-6 py-8"
            style={{
                background: "#090909",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            <div className="w-full max-w-[560px]">
                <div className="mb-12 text-center">
                    <span
                        className="text-white text-3xl font-semibold"
                        style={{ letterSpacing: "-0.5px" }}
                    >
                        finora
                    </span>
                </div>

                <div
                    className="rounded-[30px] p-8 sm:p-10"
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
        </div>
    );
}