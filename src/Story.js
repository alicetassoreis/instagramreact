export default function Story({ imagem, usuario }) {
    return (
      <div className="story">
        <div className="imagem">
          <img src={imagem} alt="Story" />
        </div>
        <div className="usuario">{usuario}</div>
      </div>
    );
  }
  