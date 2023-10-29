const http = require("http");
const getUsers = require("./modules/users");

process.env.PORT = 3003
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${port}`);

  if (url.searchParams.has("users")) {
    res.statusCode = 200;
    res.statusMessage = "ok";
    res.header = "Content-Type: application/json";
    res.write(getUsers());
    res.end();

    return;
  }

  if (url.searchParams.has("hello")) {
    if (url.searchParams.get("hello") !== "") {
      res.statusCode = 200;
      res.statusMessage = "ok";
      res.header = "Content-Type: text/plain";
      res.write(`Hello, .`);
      res.end();

      return;
    }

    res.statusCode = 400;
    res.statusMessage = "error";
    res.header = "Content-Type: text/plain";
    res.write("Enter a name");
    res.end();

    return;
  }

  if (req.url === "/") {
    res.statusCode = 200;
    res.statusMessage = "ok";
    res.header = "Content-Type: text/plain";
    res.write("Hello, World!");
    res.end();

    return;
  }

  res.statusCode = 500;
  res.statusMessage = "error";
  res.end();
});

server.listen(port, () => {
  console.log(`сервер запущен по адресу http://127.0.0.1:${port}`);
});
