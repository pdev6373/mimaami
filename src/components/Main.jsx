import img1 from "../assets/Rectangle 32.svg";
import img2 from "../assets/Rectangle 33.svg";
import img3 from "../assets/Rectangle 34.svg";
import img4 from "../assets/Rectangle 35.svg";

export const Main = () => {
  const details = [
    {
      img: img1,
      title: "Nature’s best",
      body: "Ultrices etiam est venenatis pulvinar.",
    },
    {
      img: img2,
      title: "Handmade",
      body: "Egestas molestie cras quis vestibulum.",
    },
    {
      img: img3,
      title: "100% Sustainable",
      body: "Eu, lacus consectetur in morbi quam massa.",
    },
    {
      img: img4,
      title: "Made from Ghana",
      body: "Mauris dui maecenas ut consectetur.",
    },
  ];

  return (
    <main className="main">
      {details.map((detail) => (
        <div key={detail.title} className="main__options">
          <img src={detail.img} className="main__img" />
          <h3 className="main__title">{detail.title}</h3>
          <p className="main__body">{detail.body}</p>
        </div>
      ))}
    </main>
  );
};
