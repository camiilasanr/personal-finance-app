import { Link } from "react-router-dom";

export default function SkipButton({ to = "/home", children = "Configurar después" }) {
    return (
        <Link
            to={to}
            className="block text-center text-sm font-medium transition-colors"
            style={{ color: "#6B7280" }}
        >
            {children}
        </Link>
    );
}