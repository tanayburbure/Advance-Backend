import express from "express"
const app = express();
app.use(express.json());


app.get("/api/jokes", (req,res) => {
    const jokes = [
  {
    id: 1,
    title: "Why the Computer Was Cold",
    content: "Because it left its Windows open."
  },
  {
    id: 2,
    title: "Math Joke",
    content: "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else."
  },
  {
    id: 3,
    title: "Debugging Life",
    content: "I told my code a joke, but it didn’t laugh—it just threw an exception."
  },
  {
    id: 4,
    title: "Coffee Break",
    content: "Why do programmers prefer dark mode? Because light attracts bugs."
  },
  {
    id: 5,
    title: "Boolean Humor",
    content: "There are only 10 kinds of people in the world: those who understand binary and those who don’t."
  }
];

    res.send(jokes)
})


const port = process.env.PORT || 3000 ;
app.listen(port , () => {
    console.log(`serving at port ${port}`)
})