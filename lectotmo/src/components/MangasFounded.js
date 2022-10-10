import CardFounded from "./CardFounded";
const MangasFounded = () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <main className="main-founded">
      <section class="mangasFounded-list">
        <div class="list-mangasFounded">
          <div class="list-mangasFounded__list">
            {array.map((item, idx) => (
              <CardFounded key={idx} />
            ))}
          </div>
          <a className="btn-see-more">Mostrar más</a>
        </div>
      </section>
    </main>
  );
};

export default MangasFounded;
