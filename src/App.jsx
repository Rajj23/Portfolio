import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import GitHubActivity from './components/GitHubActivity';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SocialSidebar from './components/SocialSidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialSidebar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <GitHubActivity />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
