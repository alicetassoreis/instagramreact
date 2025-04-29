import { useState } from "react";

export default function User() {
  const [nome, setNome] = useState("catanacomics");
  const [imagem, setImagem] = useState("assets/catanacomics.svg");

  function editarNome() {
    const novoNome = prompt("Digite o novo nome:");
    if (novoNome) {
      setNome(novoNome);
    }
  }

  function editarImagem() {
    const novaImagem = prompt("Digite o link da nova imagem:");
    if (novaImagem) {
      setImagem(novaImagem);
    }
  }

  return (
    <div className="usuario">
      <img src={imagem} alt="Imagem de Perfil" onClick={editarImagem} />
      <div className="texto">
      <span>
        <strong>{nome}</strong>
        <ion-icon name="pencil-sharp" onClick={editarNome}></ion-icon>
        </span>
      </div>
    </div>
  );
}
