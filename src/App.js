import React, {
  useState
} from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Page from './components/Page';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  const [pages] = useState([{
    name: "about"
  },
  {
    name: "portfolio"
  },
  {
    name: "contact"
  },
  {
    name: "resume"
  }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  
return (
  <div>
    <Main
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      >
      </Main>
    <section>
      <Page currentPage={currentPage}></Page>
    </section>
  </div>
  );
}
        export default App;