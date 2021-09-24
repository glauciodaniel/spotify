import "./MenuItem.css";
const itens = [
  {
    id: 1,
    text: "Início",
    icon: "Icone Home.svg",
  },
  {
    id: 2,
    text: "Buscar",
    icon: "Icone Search.svg",
  },
  {
    id: 3,
    text: "Sua Biblioteca",
    icon: "Icone Library.svg",
  },
  {
    id: 4,
    text: "Criar playlist",
    icon: "Icone Add.svg",
  },
  {
    id: 5,
    text: "Músicas Curtidas",
    icon: "Icone Favorito.svg",
  },
  {
    id: 6,
    text: "Seus episódios",
    icon: "Icone Podcast.svg",
  },
];

const MenuItem = () => {
  return (
    <ul className="menuItem">
      {itens.map((item) => (
        <li key={item.id}>
          <img
            src={`/images/icons/${item.icon}`}
            alt={item.itext}
            className="icon"
          />
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default MenuItem;
