import { useOrder } from "../../hooks/useOrder";

const ListChapters = (props) => {
  const { chapters } = props;
  const { items, handleOrder } = useOrder(chapters);
  return (
    <>
      <div className="list-chapters">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <p className="title">Lista de Capitulos</p>
          <div>
            <span onClick={() => handleOrder()}>ASC/DESC</span>
            <input type="text" name="q_chapter" placeholder="Filtrar..." />
          </div>
        </div>
        <div className="chapters">
          {items.map((chapter) => (
            <a className="chapter">
              <p>Capítulo: {chapter.name}</p>
              <p>Fecha de publicacion: {chapter.datePost}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListChapters;
