import { useOpen } from "../hooks/useOpen";
import Header from "../components/Header";
import SearchAdvanced from "../components/SearchAdvanced/SearchAdvanced";
import TypeFilter from "../components/SearchAdvanced/TypeFilter";
import FilterSearch from "../components/SearchAdvanced/FilterSearch";
import MangasFounded from "../components/MangasFounded";
import Footer from "../components/Footer";

const Library = () => {
  const { open, setopen } = useOpen();
  return (
    <>
      <Header />
      <div className="container" style={{ flexDirection: "column" }}>
        <SearchAdvanced>
          <TypeFilter>
            <FilterSearch open={open} setopen={setopen} />
          </TypeFilter>
        </SearchAdvanced>
        <MangasFounded />
      </div>
      <Footer />
    </>
  );
};

export default Library;
