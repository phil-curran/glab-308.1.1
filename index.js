const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write('<h1 style="color: red">Hello World!</h1>');
  res.write("<p>I wonder what else we can send...</p>");
  res.write("<hr>");
  res.write(`<p>URL: ${req.url}\n</p>`);

  // basic routing
  switch (req.url) {
    case "/":
      res.write(
        "<p>You've reached the home endpoint.</p></p><p><a href='/'>home</a></p><p><a href='/derp'>derp</a></p><p><a href='/test'>test</a></p><p><a href='/link'>link</a></p>"
      );
      break;
    case "/derp":
      res.write(
        "<p>You've reached the derpy endpoint.</p></p><p><a href='/'>home</a></p><p><a href='/derp'>derp</a></p><p><a href='/test'>test</a></p><p><a href='/link'>link</a></p>"
      );
      break;
    case "/test":
      res.write(
        "<p>You've reached the test endpoint.</p></p><p><a href='/'>home</a></p><p><a href='/derp'>derp</a></p><p><a href='/test'>test</a></p><p><a href='/link'>link</a></p>"
      );
      break;
    case "/link":
      res.write(
        "<p>You've reached the link endpoint.</p></p><p><a href='/'>home</a></p><p><a href='/derp'>derp</a></p><p><a href='/test'>test</a></p><p><a href='/link'>link</a></p>"
      );
      break;
    default:
      res.statusCode = 404;
      res.write("Error: 404 Not Found");
      break;
  }

  res.end();
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
