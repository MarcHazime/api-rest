const express = require("express");
const { Database } = require("sqlite3");
const typeorm = require("typeorm")
const app = express();
const Wilder = require("./entity/Wilder")


const dataSource = new typeorm.DataSource ({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder]
})


app.get("/", (req, res) => {
  res.send("Hello World");
});
const start = async () =>{
  await dataSource.initialize();
  dataSource.getRepository(Wilder).save({name:"First Wilder", name:"Second Wilder"})

app.listen(3000, () => console.log("Server started on 3000"));
}


start()