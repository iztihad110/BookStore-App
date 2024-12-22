let app = require("./App");
let port = 3000;

app.listen(port, ()=>{
    console.log(`The Server started at http://localhost:${port}`);
})

