const express = require("express");
const app = express();
const path = require("path")

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/api", (req, res) => {
    res.json( {message: "teste 2 /api"} )
})

app.get("*", (req, res)=>{
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
