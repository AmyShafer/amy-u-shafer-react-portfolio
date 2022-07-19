import React, {
  useState
} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio / > ;
      case 'Contact':
        return <Contact / > ;
      default:
        return <About / > ;
    }
  };

  return ( <
    div class = "main-container" >
    <
    Header currentPage = {
      currentPage
    }
    handlePageChange = {
      handlePageChange
    }
    /> <
    main > {
      renderPage(currentPage)
    } < /main> <
    Footer / >
    <
    /div>
  );
}

export default App;