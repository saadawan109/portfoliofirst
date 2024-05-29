import ScrollToTop from "react-scroll-to-top"
import './App.css';
import Header from './Components/Header'
import ServicesCredo from './Components/ServicesCredo'
import AboutMe from './Components/AboutMe';
import Photography from './Components/Photography'

function App() {
  return (
    <>
      <Header />
      <ServicesCredo />
      <AboutMe />
      <Photography />
      <ScrollToTop/>
    </>
  );
}

export default App;
