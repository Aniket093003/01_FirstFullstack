import express from "express";

const app = express();


app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Introduction to React",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      title: "Understanding Components",
      content: "Components are the building blocks of a React application.",
    },
    {
      id: 3,
      title: "React State Management",
      content:
        "State allows React components to manage and update data over time.",
    },
    {
      id: 4,
      title: "Props in React",
      content: "Props are used to pass data from one component to another.",
    },
    {
      id: 5,
      title: "Using Hooks",
      content:
        "Hooks are functions that let you use state and other React features without writing a class.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`working att http://localhost:${port}`);
});
