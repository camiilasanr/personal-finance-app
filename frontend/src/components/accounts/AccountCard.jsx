import {
    bancolombia,
    nequi,
    davivienda,
    nu,
} from "../../assets/banks";

const logos = {
    bancolombia,
    nequi,
    davivienda,
    nu,
};

export default function AccountCard({
    bank = "bancolombia",
    type = "Cuenta de ahorros",
    number = "•••• 4321",
    balance = "$4.850.000",
}) {
    const Logo = logos[bank];

    return (
        <article
            className="
                glass-card
                rounded-[30px]
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
            "
        >
            <div className="flex items-center gap-5">
                <img
                    src={Logo}
                    alt={bank}
                    className="
                        h-11
                        object-contain
                        shrink-0
                    "
                />

                <div>
                    <h3
                        className="text-white"
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 700,
                            fontSize: "22px",
                            letterSpacing: "-0.03em",
                            textTransform: "capitalize",
                        }}
                    >
                        {bank}
                    </h3>

                    <p
                        className="mt-1"
                        style={{
                            color: "#A1A1AA",
                            fontFamily: "var(--font-body)",
                            fontSize: "14px",
                        }}
                    >
                        {type}
                    </p>
                </div>
            </div>

            <div className="mt-10">
                <p
                    style={{
                        color: "#6B7280",
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        letterSpacing: "0.08em",
                    }}
                >
                    {number}
                </p>

                <h2
                    className="mt-4 text-white leading-none"
                    style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "42px",
                        letterSpacing: "-0.05em",
                    }}
                >
                    {balance}
                </h2>

                <p
                    className="mt-3"
                    style={{
                        color: "#A1A1AA",
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                    }}
                >
                    Disponible
                </p>
            </div>
        </article>
    );
}