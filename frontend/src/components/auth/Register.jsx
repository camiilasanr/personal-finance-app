    import { useState } from "react";
    import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
    import { Link } from "react-router-dom";

    function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

        return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07070f] font-sans">
        {/* Fondo */}
            <div className="absolute left-[12%] top-[8%] h-[420px] w-[420px] rounded-full bg-blue-600/80 blur-[170px]" />

            <div className="absolute right-[8%] bottom-[2%] h-[420px] w-[420px] rounded-full bg-orange-500/80 blur-[140px]" />

            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

            <div
            className="relative z-10 mx-4 flex w-full max-w-[425px] flex-col gap-6 rounded-2xl px-8 pt-9 pb-10"
            style={{
                background: "rgba(22, 22, 30, 0.88)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
            }}
            >
            <div className="flex flex-col gap-1 text-center">
                <h1
                className="text-[42px] font-semibold text-white"
                style={{ letterSpacing: "-0.5px" }}
                >
                finora
                </h1>
            </div>

            <form
            className="flex flex-col gap-3"
            onSubmit={(e) => e.preventDefault()}
            >
            <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6060aa]">
                <User size={16} />
                </span>

                <input
                type="text"
                placeholder="Nombre"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full rounded-xl py-3 pl-9 pr-4 text-sm text-white outline-none transition-all placeholder:text-[#6060aa]"
                style={{
                    background: "rgba(40, 40, 55, 0.7)",
                    border: "1px solid rgba(255,255,255,0.07)",
                }}
                />
            </div>

            <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6060aa]">
                <User size={16} />
                </span>

                <input
                type="text"
                placeholder="Apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full rounded-xl py-3 pl-9 pr-4 text-sm text-white outline-none transition-all placeholder:text-[#6060aa]"
                style={{
                    background: "rgba(40, 40, 55, 0.7)",
                    border: "1px solid rgba(255,255,255,0.07)",
                }}
                />
            </div>

            <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6060aa]">
                <Mail size={16} />
                </span>

                <input
                type="text"
                placeholder="Email o teléfono"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl py-3 pl-9 pr-4 text-sm text-white outline-none transition-all placeholder:text-[#6060aa]"
                style={{
                    background: "rgba(40, 40, 55, 0.7)",
                    border: "1px solid rgba(255,255,255,0.07)",
                }}
                />
            </div>

            <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6060aa]">
                <Lock size={16} />
                </span>

                <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl py-3 pl-9 pr-10 text-sm text-white outline-none transition-all placeholder:text-[#6060aa]"
                style={{
                    background: "rgba(40, 40, 55, 0.7)",
                    border: "1px solid rgba(255,255,255,0.07)",
                }}
                />

                <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6060aa] transition-colors hover:text-[#9090cc]"
                >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
            </div>

            <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6060aa]">
                <Lock size={16} />
                </span>

                <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-xl py-3 pl-9 pr-10 text-sm text-white outline-none transition-all placeholder:text-[#6060aa]"
                style={{
                    background: "rgba(40, 40, 55, 0.7)",
                    border: "1px solid rgba(255,255,255,0.07)",
                }}
                />

                <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6060aa] transition-colors hover:text-[#9090cc]"
                >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
            </div>

            <button
                type="submit"
                className="mt-1 w-full rounded-xl py-3 text-sm font-semibold text-white transition-all active:scale-[0.98]"
                style={{
                background: "linear-gradient(135deg, #5b7cf6 0%, #38b9f5 100%)",
                boxShadow: "0 4px 20px rgba(91,124,246,0.4)",
                }}
            >
                Crear cuenta
            </button>
            </form>

                <div className="flex items-center gap-3">
                <div
                    className="flex-1 h-px"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                />
                <span className="text-xs text-[#6060aa]">
                    O continuar con
                </span>
                <div
                    className="flex-1 h-px"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                />
                </div>

                <div className="grid grid-cols-2 gap-3">
                <button
                    className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium text-white transition-all hover:brightness-110 active:scale-[0.98]"
                    style={{
                    background: "rgba(40, 40, 55, 0.7)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    }}
                >
                    <GoogleIcon />
                    Google
                </button>

                <button
                    className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium text-white transition-all hover:brightness-110 active:scale-[0.98]"
                    style={{
                    background: "rgba(40, 40, 55, 0.7)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    }}
                >
                    <FacebookIcon />
                    Facebook
                </button>
                </div>

                <p className="text-center text-xs text-[#6060aa]">
                ¿Ya tienes cuenta?{" "}
                <Link
                    to="/login"
                    className="font-medium text-[#5b7cf6] hover:underline"
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
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
        );
        }

        function FacebookIcon() {
        return (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
        );
        }

        export default Register;