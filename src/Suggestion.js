export default function Suggestion({ imagem, usuario, razao }) {
    return (
      <div className="sugestao">
        <div className="usuario">
          <img src={imagem} alt="Sugestão" />
          <div className="texto">
            <div className="nome">{usuario}</div>
            <div className="razao">{razao}</div>
          </div>
        </div>
        <div className="seguir">Seguir</div>
      </div>
    );
  }
  