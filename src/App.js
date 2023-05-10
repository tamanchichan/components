import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Banner />
        <div className='container'>
          <Gallery />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
