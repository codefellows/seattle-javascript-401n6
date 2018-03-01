function mybodyparser() {
  let body = '';
  req.body.on("data", (data) => {
    body += data.toString();
  });

  req.body.on("end", () => {
    body += data.toString();
    req.body = body;
  });

  req.body.on("error", (error) => {
    throw error
  });
}