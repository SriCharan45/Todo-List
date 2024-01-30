import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "permalist",
    password: "123456",
    port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let items = [];

app.get("/", async (req, res) => {
    try{
        const result = await db.query("SELECT * FROM items ORDER BY id ASC");
        items = result.rows;
        console.log(items);
        const date = new Date();
        res.render("index.ejs", {
            listTitle: date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
            listItems: items,
        });
    } catch (err) {
        console.log(err);
    }
});

app.post("/edit", async (req, res) => {
    try{
      const id = req.body.listItemId;
      const title = req.body.UpdatedListItem;
      console.log(id);
      console.log(title);
      await db.query("UPDATE items SET title = $1 WHERE id = $2", [title, id]);
      res.redirect("/");  
    } catch (err) {
        console.log(err);
    }
});

app.post("/delete", async (req, res) => {
    try{
        const id = req.body.deleteItemId;
        await db.query("DELETE FROM items WHERE id = $1", [id]);
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
});

app.post("/add", async (req, res) => {
    try{
        const title = req.body.newtitle;
        await db.query("INSERT INTO items (title) VALUES ($1)", [title]);
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
});

app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});