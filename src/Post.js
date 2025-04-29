import { useState } from "react";

export default function Post({ imagemUsuario, nomeUsuario, imagemConteudo, imagemCurtida, nomeCurtida, numeroCurtidas }) {
  const [salvo, setSalvo] = useState(false);
  const [curtido, setCurtido] = useState(false);
  const [curtidas, setCurtidas] = useState(numeroCurtidas);

  function salvarPost() {
    setSalvo(!salvo);
  }

  function curtirPost() {
    if (!curtido) {
      setCurtido(true);
      setCurtidas(curtidas + 1);
    } else {
      setCurtido(false);
      setCurtidas(curtidas - 1);
    }
  }

  function curtirImagem() {
    if (!curtido) {
      setCurtido(true);
      setCurtidas(curtidas + 1);
    }
  }

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={imagemUsuario} alt="Usuário" />
          {nomeUsuario}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={imagemConteudo} alt="Conteúdo" onClick={curtirImagem} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              name={curtido ? "heart" : "heart-outline"}
              style={{ color: curtido ? "red" : "black" }}
              onClick={curtirPost}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name={salvo ? "bookmark" : "bookmark-outline"}
              onClick={salvarPost}
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={imagemCurtida} alt="Curtiu" />
          <div className="texto">
            Curtido por <strong>{nomeCurtida}</strong> e <strong>outras {curtidas.toLocaleString()} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
