import { Groups } from "../../data/Groups";
import GroupCard from "../Cards/GroupCard";

const MyGroups = () => {
  return (
    <div className="myGroups-container">
      <h1>Mis Grupos</h1>
      <div className="groups-content">
        <div className="list-groups">
          <section class="hottest">
            <div class="list">
              <div class="list-hottest__list">
                {Groups.map((group, idx) => (
                  <GroupCard key={idx} group={group} />
                ))}
              </div>
              <a className="btn-see-more">Mostrar más</a>
            </div>
          </section>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MyGroups;
