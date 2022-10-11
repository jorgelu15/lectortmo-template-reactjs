import { Groups } from "../data/Groups";
import GroupCard from "./Cards/GroupCard";
const GroupsFounded = () => {
  return (
    <main className="main-founded">
      <section class="hottest">
        <div class="list-hottest">
          <div class="list-hottest__list">
            {Groups.map((group, idx) => (
              <GroupCard key={idx} group={group} />
            ))}
          </div>
          <a className="btn-see-more">Mostrar más</a>
        </div>
      </section>
    </main>
  );
};

export default GroupsFounded;
