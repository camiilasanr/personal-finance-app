export default function ActivityHeader() {
    return (
        <header className="flex flex-col gap-2">
            <h1
                className="text-white leading-tight"
                style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "34px",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                }}
            >
                Actividad
            </h1>

            <p
                className="text-[15px] leading-7"
                style={{
                    color: "#A1A1AA",
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                }}
            >
                Todo lo que ha ocurrido con tu dinero.
            </p>
        </header>
    );
}