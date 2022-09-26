import { useContext } from "react";
import Context from "../views/Context";


export default function Favoritos() {
  const { fotos, setFotos } = useContext(Context);

  const sacarFavorito = (id) => {
    const fotoIndex = fotos.findIndex((elem) => elem.id === id);
    fotos[fotoIndex].favorito =!fotos[fotoIndex].favorito;
    setFotos([...fotos]);

  };
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
       {fotos.filter((elem) => elem.favorito)
       .map((elem,i) => (
        <img
        src={elem.src}
        alt=""
        onClick={() => sacarFavorito(elem.id)}
        key={i}
        />
       ))}
      </div>
    </div>
  );
}
