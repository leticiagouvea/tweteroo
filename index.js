import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;
    users.push({ username, avatar });
    res.send("OK");
});

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;
    const { avatar } = users.find(user => user.username === username);

    tweets.push({ username, tweet, avatar });
    res.send("OK");
});

app.get("sign-up", (req, res) => {
    res.send(users);
});

app.get("/tweets", (req, res) => {
    res.send(tweets.slice(- 10).reverse());
});

app.listen(5000, () => {
    console.log("App is running in port: 5000");
});