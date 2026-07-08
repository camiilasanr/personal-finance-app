import "../index.css";

export default function TypographyLab() {
    const value = "$8.540.000";
    const percent = "+12.48%";

    const fonts = [
        { name: "Inter", family: "Inter" },
        { name: "Cabinet Grotesk", family: "Cabinet Grotesk" },
        { name: "Space Grotesk", family: "Space Grotesk" },
        { name: "Geist Mono", family: "Geist Mono" },
        { name: "IBM Plex Mono", family: "IBM Plex Mono" },
        { name: "JetBrains Mono", family: "JetBrains Mono" },
    ];

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#090909",
                color: "#FFF",
                padding: "60px",
                fontFamily: "Inter",
            }}
        >
            <h1
                style={{
                    fontFamily: "Cabinet Grotesk",
                    fontSize: 42,
                    fontWeight: 700,
                    marginBottom: 60,
                }}
            >
                FINORA • Typography Lab
            </h1>

            <div
                style={{
                    display: "grid",
                    gap: 28,
                }}
            >
                {fonts.map((font) => (
                    <div
                        key={font.name}
                        style={{
                            background: "#161616",
                            border: "1px solid rgba(255,255,255,.06)",
                            borderRadius: 24,
                            padding: 32,
                        }}
                    >
                        <p
                            style={{
                                color: "#A1A1AA",
                                fontFamily: "Inter",
                                marginBottom: 24,
                                fontSize: 15,
                            }}
                        >
                            {font.name}
                        </p>

                        <p
                            style={{
                                fontFamily: font.family,
                                fontSize: 18,
                                margin: 0,
                                color: "#A1A1AA",
                            }}
                        >
                            Saldo disponible
                        </p>

                        <h2
                            style={{
                                fontFamily: font.family,
                                fontSize: 64,
                                fontWeight: 700,
                                letterSpacing: "-2px",
                                margin: "16px 0 0",
                                lineHeight: 1,
                            }}
                        >
                            {value}
                        </h2>

                        <p
                            style={{
                                marginTop: 18,
                                fontFamily: font.family,
                                fontSize: 26,
                                fontWeight: 600,
                                color: "#34C759",
                            }}
                        >
                            {percent}
                        </p>

                        <button
                            style={{
                                marginTop: 28,
                                padding: "14px 22px",
                                borderRadius: 14,
                                border: "none",
                                background: "#FF5C00",
                                color: "#090909",
                                fontFamily: font.family,
                                fontWeight: 700,
                                fontSize: 15,
                                cursor: "pointer",
                            }}
                        >
                            Continuar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}