import CardFounded from "./Cards/CardFounded";
import { Mangas } from "../data/Mangas";
const MangasFounded = () => {
  return (
    <main className="main-founded">
      <section class="mangasFounded-list">
        <div class="list-mangasFounded">
          <div class="list-mangasFounded__list">
            {Mangas.map((manga, idx) => (
              <CardFounded key={idx} manga={manga} />
            ))}
          </div>
          <a className="btn-see-more">Mostrar más</a>
        </div>
      </section>
    </main>
  );
};

export default MangasFounded;
