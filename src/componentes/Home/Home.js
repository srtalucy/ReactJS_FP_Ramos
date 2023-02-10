import "./Home.css";

const Home = () => {
  return (
    <div className="container-fluid main">
      <div className="row">
        <article className="col d-flex flex-column align-items-center">
          <h2 className="titulo">bienvenidos</h2>
          <p>venta de albumes de bts</p>
        </article>
      </div>
      <div className="row">
        <aside className="col-lg-6 col-sm-12">
          <h4>
            <span>historia de bts</span>
          </h4>
          <p> BTS (en hangul, 방탄소년단; romanización revisada del coreano,
            Bangtan Sonyeondan) es un grupo surcoreano formado en Seúl en 2010 y
            que debutó en 2013 bajo la compañía Big Hit Music.2 Está compuesto
            por siete integrantes: Jin, Suga, J-Hope, RM, Jimin, V y Jungkook,
            quienes coescriben y coproducen la mayor parte de su material
            discográfico. A pesar de haber sido creado con un estilo
            principalmente hip hop, ha llegado a incorporar una gran variedad de
            géneros en su repertorio musical. BTS es el artista con mayores
            ventas en la historia de Corea del Sur, con más de treinta millones
            en Gaon Music Chart, y mantiene el récord del álbum más vendido en
            ese país con Map of the Soul: 7. </p>
        </aside>
      </div>
    </div>
  );
};

export default Home;
