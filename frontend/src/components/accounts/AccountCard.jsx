export default function AccountCard({
    name,
    nickname,
    number,
    balance,
}) {
    const accentColor =
        name === "Bancolombia"
            ? "#34C759"
            : name === "Nu"
            ? "#FF453A"
            : "#FF9F0A";

    return (
        <button
            className="
                w-full
                rounded-[28px]
                border
                border-white/[0.05]
                bg-[#151515]
                px-8
                py-6
                text-left
                transition-all
                duration-300
                hover:border-white/[0.08]
                hover:bg-white/[0.02]
                hover:-translate-y-0.5
            "
        >
            <div
                className="
                    flex
                    flex-col
                    gap-6
                    md:flex-row
                    md:items-center
                    md:justify-between
                "
            >
                {/* Lado izquierdo */}
                <div className="flex items-start gap-5">

                    <div
                        className="h-14 w-1 rounded-full shrink-0"
                        style={{
                            background: accentColor,
                        }}
                    />

                    <div>
                        <h3
                            className="text-white"
                            style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "24px",
                                fontWeight: 700,
                                letterSpacing: "-0.04em",
                            }}
                        >
                            {name}
                        </h3>

                        <p
                            className="mt-1"
                            style={{
                                color: "#8F8F95",
                                fontFamily: "var(--font-body)",
                                fontSize: "15px",
                            }}
                        >
                            {nickname}
                        </p>
                    </div>

                </div>

                {/* Saldo */}
                <div className="md:text-right">

                    <h2
                        className="leading-none"
                        style={{
                            color: "#FFFFFF",
                            fontFamily: "var(--font-heading)",
                            fontSize: "30px",
                            fontWeight: 700,
                            letterSpacing: "-0.04em",
                        }}
                    >
                        {balance}
                    </h2>

                    <p
                        className="mt-3"
                        style={{
                            color: "#6B7280",
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                            letterSpacing: "0.08em",
                        }}
                    >
                        {number}
                    </p>

                </div>
            </div>
        </button>
    );
}