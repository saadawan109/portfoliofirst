import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import Header from "./Components/Header";
import ServicesCredo from "./Components/ServicesCredo";
import AboutMe from "./Components/AboutMe";
import Photography from "./Components/Photography";
import ReviewsCrousel from "./Components/ReviewsCrousel";
import TableCreate from "./Components/TableCreate";
import BlogPost from "./Components/BlogPost"


function App() {
  return (
    <>
      <Header />
      <ServicesCredo />
      <AboutMe />
      <Photography />
      <ReviewsCrousel />
      <ScrollToTop />
      <TableCreate />
      <BlogPost />
    </>
  );
}

export default App;
