    import express from "express";
    import cors from "cors";

    const app = express();

    app.use(cors());
    app.use(express.json());

    app.get("/", (req, res) => {
    res.json({
        message: "Bienvenido a la API de Finora 🚀",
    });
    });

    export default app;