import Suggestion from "./Suggestion";

export default function Suggestions() {
  const suggestions = [
    { imagem: "assets/bad.vibes.memes.svg", usuario: "bad.vibes.memes", razao: "Segue você" },
    { imagem: "assets/chibirdart.svg", usuario: "chibirdart", razao: "Segue você" },
    { imagem: "assets/razoesparaacreditar.svg", usuario: "razoesparaacreditar", razao: "Novo no Instagram" },
    { imagem: "assets/adorable_animals.svg", usuario: "adorable_animals", razao: "Segue você" },
    { imagem: "assets/smallcutecats.svg", usuario: "smallcutecats", razao: "Segue você" }
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div className="ver-tudo">Ver tudo</div>
      </div>
      {suggestions.map((s, index) => (
        <Suggestion key={index} {...s} />
      ))}
    </div>
  );
}
