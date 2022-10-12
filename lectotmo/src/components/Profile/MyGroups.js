import { Groups } from "../../data/Groups";
import Card from "../Cards/Card";

const MyGroups = () => {
  return (
    <div className="myGroups-container">
      <h1>Mis Grupos</h1>
      <div className="groups-content">
        <div className="list-groups">
          <section class="hottest">
            <div class="list-hottest__list">
              {Groups.map((group, idx) => (
                <Card key={idx} file={group} />
              ))}
            </div>
            <a className="btn-see-more">Mostrar más</a>
          </section>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MyGroups;
