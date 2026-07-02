export default function ProgressBar({ currentStep = 1, totalSteps = 5 }) {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <div className="w-full">
            <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-medium" style={{ color: "#6B7280" }}>
                    Configuración inicial
                </span>

                <span className="text-xs font-medium" style={{ color: "#6B7280" }}>
                    Paso {currentStep} de {totalSteps}
                </span>
            </div>

            <div
                className="h-px w-full overflow-hidden rounded-full"
                style={{ background: "rgba(255,255,255,0.08)" }}
            >
                <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                        width: `${progress}%`,
                        background: "#FF5C00",
                    }}
                />
            </div>
        </div>
    );
}