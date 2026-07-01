import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [focused, setFocused] = useState(null);

    const inputStyle = (field) => ({
        background: "#0f0f0f",
        border:
            focused === field
                ? "1px solid #FF5C00"
                : "1px solid rgba(255,255,255,0.08)",
        color: "#fff",
    });

    return (
        <div
            className="min-h-screen flex items-center justify-center px-6 py-6"
            style={{ background: "#090909", fontFamily: "'Inter', sans-serif" }}
        >
            <div className="w-full max-w-[430px] flex flex-col gap-5">
                <div className="text-center">
                    <span
                        className="text-white text-2xl font-semibold"
                        style={{ letterSpacing: "-0.5px" }}
                    >
                        finora
                    </span>
                </div>

                <div
                    className="w-full flex flex-col gap-5 p-8"
                    style={{
                        background: "#161616",
                        borderRadius: "24px",
                        border: "1px solid rgba(255,255,255,0.06)",
                        boxShadow: "0 2px 40px rgba(0,0,0,0.6)",
                    }}
                >
                    <div className="flex flex-col gap-1">
                        <h1
                            className="text-white font-semibold"
                            style={{ fontSize: "22px", letterSpacing: "-0.4px" }}
                        >
                            Crear cuenta
                        </h1>
                        <p className="text-sm" style={{ color: "#A1A1AA" }}>
                            Empieza a controlar tus finanzas hoy.
                        </p>
                    </div>

                    <form className="flex flex-col gap-2.5" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium" style={{ color: "#A1A1AA" }}>
                                    Nombres
                                </label>
                                <input
                                    type="text"
                                    placeholder="Joan Sebastián"
                                    onFocus={() => setFocused("firstName")}
                                    onBlur={() => setFocused(null)}
                                    className="w-full px-4 py-2.5 text-sm text-white outline-none rounded-xl transition-all placeholder:text-[#52525b]"
                                    style={inputStyle("firstName")}
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium" style={{ color: "#A1A1AA" }}>
                                    Apellidos
                                </label>
                                <input
                                    type="text"
                                    placeholder="Martínez"
                                    onFocus={() => setFocused("lastName")}
                                    onBlur={() => setFocused(null)}
                                    className="w-full px-4 py-2.5 text-sm text-white outline-none rounded-xl transition-all placeholder:text-[#52525b]"
                                    style={inputStyle("lastName")}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium" style={{ color: "#A1A1AA" }}>
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                placeholder="tucorreo@email.com"
                                onFocus={() => setFocused("email")}
                                onBlur={() => setFocused(null)}
                                className="w-full px-4 py-2.5 text-sm text-white outline-none rounded-xl transition-all placeholder:text-[#52525b]"
                                style={inputStyle("email")}
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium" style={{ color: "#A1A1AA" }}>
                                Contraseña
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    onFocus={() => setFocused("password")}
                                    onBlur={() => setFocused(null)}
                                    className="w-full px-4 py-2.5 pr-11 text-sm text-white outline-none rounded-xl transition-all placeholder:text-[#52525b]"
                                    style={inputStyle("password")}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" 
                                    style={{ color: "#52525b" }}
                                >
                                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium" style={{ color: "#A1A1AA" }}>
                                Confirmar contraseña
                            </label>

                            <div className="relative">
                                <input
                                    type={showConfirm ? "text" : "password"}
                                    placeholder="••••••••"
                                    onFocus={() => setFocused("confirm")}
                                    onBlur={() => setFocused(null)}
                                    className="w-full px-4 py-2.5 pr-11 text-sm text-white outline-none rounded-xl transition-all placeholder:text-[#52525b]"
                                    style={inputStyle("confirm")}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                    style={{ color: "#52525b" }}
                                >
                                    {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
                                </button>
                            </div>
                        </div>

                        <label className="flex items-start gap-2.5 cursor-pointer mt-1">
                            <div className="relative mt-0.5 flex-shrink-0">
                                <input type="checkbox" className="peer sr-only" />
                                <div
                                    className="w-4 h-4 rounded peer-checked:bg-[#FF5C00] transition-all"
                                    style={{
                                        border: "1px solid rgba(255,255,255,0.15)",
                                    }}
                                />
                            </div>

                            <span className="text-xs leading-relaxed" style={{ color: "#A1A1AA" }}>
                                Acepto los{" "}
                                <a href="#" style={{ color: "#FF5C00" }}>
                                    Términos de servicio
                                </a>{" "}
                                y la{" "}
                                <a href="#" style={{ color: "#FF5C00" }}>
                                    Política de privacidad
                                </a>
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="mt-1 w-full py-3 rounded-xl text-sm font-semibold text-black cursor-pointer"
                            style={{ background: "#FF5C00" }}
                        >
                            Crear cuenta
                        </button>
                    </form>

                    <div className="flex items-center gap-3">
                        <div
                            className="flex-1 h-px"
                            style={{ background: "rgba(255,255,255,0.06)" }}
                        />
                        <span className="text-xs" style={{ color: "#52525b" }}>
                            o continúa con
                        </span>
                        <div
                            className="flex-1 h-px"
                            style={{ background: "rgba(255,255,255,0.06)" }}
                        />
                    </div>

                    <button
                        className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-sm font-medium text-white cursor-pointer"
                        style={{
                            background: "#0f0f0f",
                            border: "1px solid rgba(255,255,255,0.08)",
                        }}
                    >
                        <GoogleIcon />
                        Continuar con Google
                    </button>
                </div>

                <p className="text-center text-sm" style={{ color: "#52525b" }}>
                    ¿Ya tienes cuenta?{" "}
                    <Link
                        to="/login"
                        className="font-medium"
                        style={{ color: "#FF5C00" }}
                    >
                        Iniciar sesión
                    </Link>
                </p>
            </div>
        </div>
    );
}

function GoogleIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
    );
}
