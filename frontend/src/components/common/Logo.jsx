import finoraLogo from "../../assets/brand/finora/finora_horizontal.svg";

export default function Logo() {
    return (
        <img
            src={finoraLogo}
            alt="Finora"
            className="w-[180px] h-auto select-none"
            draggable={false}
        />
    );
}