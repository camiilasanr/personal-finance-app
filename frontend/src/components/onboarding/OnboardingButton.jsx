export default function OnboardingButton({
    children,
    onClick,
    type = "button",
    disabled = false,
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className="
        w-full
        rounded-2xl
        py-4
        text-sm
        font-semibold
        transition-all
        duration-200
        active:scale-[0.98]
        disabled:opacity-40
        disabled:cursor-not-allowed
        "
            style={{
                background: "#FF5C00",
                color: "#090909",
            }}
        >
            {children}
        </button>
    );
}