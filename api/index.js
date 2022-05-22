import app from "./app.js";

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Servidor escuchando en ${port}`.green));
app.on("error", error => console.log(error))