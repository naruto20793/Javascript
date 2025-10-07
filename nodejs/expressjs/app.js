//importe o express
import express from "express"

const  app = express()
const port = 3000

//midelware para definir o cabecalho da resposta como HTML
app.use((req, res, next) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    next()
});

//roteamento basico
app.get("/", (req, res) => {
    res.status(200).send("<h1>Página Inicial</h1>");
});

app.get("/sobre", (req, res) => {
    res.status(200).send("<h1>Sobre Nós</h1>");
});

app.get("/contato", (req, res) => {
    res.status(200).send("<h1>Contato</h1>");
});

app.get("/fotos", (req, res) => {
    res.status(200).send("<h1>Galeria de Fotos</h1>");
});

//rota para lidar com paginas nao encontradas
app.use((req, res) => {
    res.status(404).send("<h1>Página Não Encontrada</h1>");
});

//iniciar o servidor para ouvir na porta definida
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

