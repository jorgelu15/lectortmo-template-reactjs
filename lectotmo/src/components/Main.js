import Card from "./Card";

const Main = () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <main>
      <section class="hottest">
        <div class="main-hottest">
          <a class="active">Populares</a>
          <a>P. Seinen</a>
          <a>P. Josei</a>
        </div>
        <div class="list-hottest">
          <div class="list-hottest__list">
            {array.map((item, idx) => (
              <Card key={idx} />
            ))}
          </div>
          <a>Ver Todo</a>
        </div>
      </section>
      <section class="hottest">
        <h1>Ultimos añadidos</h1>
        <div class="list-hottest">
          <div class="list-hottest__list">
            {array.map((item, idx) => (
              <Card key={idx} />
            ))}
          </div>
        </div>
      </section>
      <section class="hottest">
        <h1>Ultimas Subidas</h1>
        <div class="list-hottest">
          <div class="list-hottest__list">
            {array.map((item, idx) => (
              <Card key={idx} />
            ))}
          </div>
          <a>Ver todos</a>
        </div>
      </section>
    </main>
  );
};

export default Main;
