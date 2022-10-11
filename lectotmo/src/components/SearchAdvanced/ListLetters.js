import { Letters } from "../../data/Letters";
const ListLetters = () => {
  return (
    <>
      {Letters.map((letter) => (
        <a>{letter}</a>
      ))}
    </>
  );
};

export default ListLetters;
