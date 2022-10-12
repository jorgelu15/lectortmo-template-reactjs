import CoverUrl from "./CoverUrl";
import BannerContent from "./BannerContent";
import { Profiles } from "../../data/Profiles";

const Cover = ({children}) => {
  return (
    <div className="cover">
      <CoverUrl cover={Profiles[0].cover}>
        <BannerContent name={Profiles[0].name} thumb={Profiles[0].thumb} />
      </CoverUrl>
      {children}
    </div>
  );
};

export default Cover;
