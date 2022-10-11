import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchAdvanced from "../components/SearchAdvanced/SearchAdvanced";
import TypeFilter from "../components/SearchAdvanced/TypeFilter";
import FilterGroups from "../components/SearchAdvanced/FilterGroups";
import ListGenders from "../components/SearchAdvanced/ListGenders";
import { useOpen } from "../hooks/useOpen";
import GroupsFounded from "../components/GroupsFounded";

const Groups = () => {
  const { open, setopen } = useOpen();
  return (
    <>
      <Header />
      <div className="container" style={{flexDirection: 'column'}}>
        <SearchAdvanced>
          <TypeFilter>
            <FilterGroups />
          </TypeFilter>
          <ListGenders open={open} />
        </SearchAdvanced>
        <GroupsFounded />
      </div>
      <Footer />
    </>
  );
};

export default Groups;
