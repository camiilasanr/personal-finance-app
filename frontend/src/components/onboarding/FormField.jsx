export default function FormField({
    label,
    placeholder,
    type = "text",
    value,
    onChange,
    helper,
}) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium" style={{ color: "#A1A1AA" }}>
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full rounded-2xl px-4 py-4 text-sm outline-none transition-all placeholder:text-[#52525b]"
                style={{
                    background: "#0f0f0f",
                    border: "1px solid rgba(255,255,255,.08)",
                    color: "#FFFFFF",
                }}
            />

            {helper && (
                <p className="text-xs" style={{ color: "#6B7280" }}>
                    {helper}
                </p>
            )}
        </div>
    );
}