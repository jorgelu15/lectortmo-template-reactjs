import Footer from "../components/Footer";
import Header from "../components/Header";
import MangasFounded from "../components/MangasFounded";
import SearchAdvanced from "../components/SearchAdvanced/SearchAdvanced";

const Library = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="mangasFounded">
          <SearchAdvanced />
          <MangasFounded />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Library;
