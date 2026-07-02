export default function OptionCard({
    title,
    description,
    selected = false,
    onClick,
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="
        w-full
        rounded-[24px]
        p-6
        text-left
        transition-all
        duration-200
        "
            style={{
                background: "#161616",
                border: selected
                    ? "1px solid #FF5C00"
                    : "1px solid rgba(255,255,255,.06)",
            }}
        >
            <h3
                className="text-base font-semibold"
                style={{
                    color: "#FFFFFF",
                    letterSpacing: "-0.3px",
                }}
            >
                {title}
            </h3>

            <p
                className="mt-2 text-sm leading-6"
                style={{
                    color: "#A1A1AA",
                }}
            >
                {description}
            </p>
        </button>
    );
}