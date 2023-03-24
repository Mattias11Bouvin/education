import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Courses from "./Components/Courses";
import Footer from "./Components/Footer";
import CourseDetails from "./Components/CourseDetails";

function App() {
  const courses = [
    { 
      id: "html",
      title: "HTML",
      description:
        "Learn the fundamentals of HTML, including tags, attributes, and semantic markup.",
      information:
        "This course is designed for beginners and covers the basics of HTML, including tags, attributes, and semantic markup. Topics covered include creating links, adding images, and structuring content using headings and paragraphs. No prior knowledge is required.",
    },
    {
      id: "css",
      title: "CSS",
      description:
        "Explore the power of CSS, from basic styling to advanced layout techniques.",
      information:
        "This course is designed for intermediate learners and covers advanced styling techniques using CSS. Topics covered include CSS selectors, responsive design, and CSS frameworks. Prior knowledge of HTML is recommended",
    },
    {
      id: "javascript",
      title: "JavaScript",
      description:
        "Discover the world of JavaScript, from basic syntax to complex functionality.",
      information:
        " This course is designed for intermediate to advanced learners and covers complex functionality using JavaScript. Topics covered include DOM manipulation, event handling, and asynchronous programming. Prior knowledge of HTML and CSS is required.",
    },
    {
      id: "react",
      title: "React",
      description:
        "Learn how to build dynamic web applications using the React library.",
      information:
        "This course is designed for intermediate to advanced learners and covers complex functionality using JavaScript. Topics covered include DOM manipulation, event handling, and asynchronous programming. Prior knowledge of HTML and CSS is required.",
    },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/courses" element={<Courses courses={courses} />} />
          <Route
            path="/coursedetails/:courseId"
            element={<CourseDetails courses={courses} />}
          />

          <Route path="/about" element={<h1>About</h1>} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
