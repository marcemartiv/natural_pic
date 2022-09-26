import "../assets/css/galeria.css";
import { useContext } from "react";
import Context from "../views/Context";
import Heart from "./Heart";

export default function Home() {
  const { fotos, setFotos } = useContext(Context);

  const setFavorito =(id) => {
    const fotoIndex = fotos.findIndex((elem) => elem.id === id);
    fotos[fotoIndex].favorito =!fotos[fotoIndex].favorito;
    setFotos([...fotos]);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
     {fotos.map ((elem, i) => ( 
      <div
      onClick={() => setFavorito(elem.id)}
      className="foto"
      style={{ backgroundImage: `url(${elem.src})`}}
      key={i}
      >
        <Heart filled={elem.favorito}/>

        <p> {elem.desc} </p>
        </div>
     ))}
    </div>
  );
}
