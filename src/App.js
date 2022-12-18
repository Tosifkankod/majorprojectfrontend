import './App.css';

// Other
import { Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import Slider from './components/HomepageComponent/Slider/Slider';
import Announcement from './components/HomepageComponent/Announcement/AnnouncementContainer';
import Notes from './components/HomepageComponent/CoursesNote/Notes';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import AnnouncementPage from './components/Announcement/AnnouncementPage';
import Login from './components/Login/Login';



function App() {
  return (
    <div> 
      <Header />
      <Routes>
        <Route path='/' element={<><Slider /><Announcement /><Notes /> </>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/announcement' element={<AnnouncementPage/>} />
        <Route path='/Login' element={<Login/>} />
      </Routes>

      <Footer />
    </div>
    
  );
}

export default App;
