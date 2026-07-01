    function DashboardPage() {
    return (
        <div className="min-h-screen bg-[#07070f] text-white">
        <aside className="fixed left-0 top-0 h-screen w-64 border-r border-white/10 bg-[#0d1020]/90 p-6">
            <h1 className="text-3xl font-semibold">finora</h1>
            <p className="mt-1 text-sm text-white/50">Gestión financiera</p>

            <nav className="mt-10 flex flex-col gap-3 text-sm">
            <a className="rounded-xl bg-white/10 px-4 py-3 text-white" href="#">
                Dashboard
            </a>
            <a className="rounded-xl px-4 py-3 text-white/60 hover:bg-white/10 hover:text-white" href="#">
                Movimientos
            </a>
            <a className="rounded-xl px-4 py-3 text-white/60 hover:bg-white/10 hover:text-white" href="#">
                Presupuestos
            </a>
            <a className="rounded-xl px-4 py-3 text-white/60 hover:bg-white/10 hover:text-white" href="#">
                Metas
            </a>
            <a className="rounded-xl px-4 py-3 text-white/60 hover:bg-white/10 hover:text-white" href="#">
                Cuentas
            </a>
            <a className="rounded-xl px-4 py-3 text-white/60 hover:bg-white/10 hover:text-white" href="#">
                Configuración
            </a>
            </nav>
        </aside>

        <main className="ml-64 min-h-screen p-8">
            <div className="flex items-center justify-between">
            <div>
                <h2 className="text-4xl font-semibold">Dashboard</h2>
                <p className="mt-2 text-white/50">Resumen de tus finanzas</p>
            </div>

            <button className="rounded-xl bg-gradient-to-r from-[#5b7cf6] to-[#38b9f5] px-5 py-3 text-sm font-semibold">
                + Nuevo movimiento
            </button>
            </div>

            <section className="mt-8 grid grid-cols-4 gap-5">
            <Card title="Saldo total" value="$0" />
            <Card title="Ingresos del mes" value="$0" />
            <Card title="Gastos del mes" value="$0" />
            <Card title="Presupuesto usado" value="0%" />
            </section>

            <section className="mt-8 grid grid-cols-2 gap-5">
            <Panel title="Ingresos vs Gastos" />
            <Panel title="Gastos por categoría" />
            </section>

            <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Últimos movimientos</h3>
                <button className="text-sm text-[#38b9f5]">Ver todos →</button>
            </div>

            <p className="mt-10 text-center text-sm text-white/40">
                Aún no hay movimientos registrados
            </p>
            </section>
        </main>
        </div>
    );
    }

    function Card({ title, value }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <p className="text-sm text-white/50">{title}</p>
        <h3 className="mt-3 text-3xl font-semibold">{value}</h3>
        </div>
    );
    }

    function Panel({ title }) {
    return (
        <div className="h-80 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex h-full items-center justify-center text-sm text-white/40">
            Sin datos para mostrar
        </div>
        </div>
    );
    }

    export default DashboardPage;