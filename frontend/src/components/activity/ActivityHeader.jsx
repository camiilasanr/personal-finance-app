export default function ActivityHeader() {
    return (
        <header className="flex flex-col gap-2">
            <h1
                className="text-white font-semibold leading-tight"
                style={{
                    fontSize: "34px",
                    letterSpacing: "-1px",
                }}
            >
                Actividad
            </h1>

            <p
                className="text-[15px] leading-7"
                style={{ color: "#A1A1AA" }}
            >
                Todo lo que ha ocurrido con tu dinero.
            </p>
        </header>
    );
}