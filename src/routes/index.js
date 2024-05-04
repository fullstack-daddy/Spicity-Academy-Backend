import express from "express";

const app = express();
app.disable("x-powered-by");

app.get("/", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: [],
      message: "Welcome To Video Courses Database",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});

app.use('/add-course', addCourse)

export default app;
