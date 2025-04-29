import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      imagemUsuario: "assets/meowed.svg",
      nomeUsuario: "meowed",
      imagemConteudo: "assets/gato-telefone.svg",
      imagemCurtida: "assets/respondeai.svg",
      nomeCurtida: "respondeai",
      numeroCurtidas: 101523
    },
    {
      imagemUsuario: "assets/barked.svg",
      nomeUsuario: "barked",
      imagemConteudo: "assets/dog.svg",
      imagemCurtida: "assets/adorable_animals.svg",
      nomeCurtida: "adorable_animals",
      numeroCurtidas: 99159
    },
    {
      imagemUsuario: "assets/nathanwpylestrangeplanet.svg",
      nomeUsuario: "nathanwpylestrangeplanet",
      imagemConteudo: "assets/gato-telefone.svg",
      imagemCurtida: "assets/wawawicomics.svg",
      nomeCurtida: "wawawicomics",
      numeroCurtidas: 80123
    }
  ];

  return (
    <div className="posts">
      {posts.map((p, index) => (
        <Post key={index} {...p} />
      ))}
    </div>
  );
}
