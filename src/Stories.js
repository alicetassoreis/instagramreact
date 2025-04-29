import Story from "./Story";

export default function Stories() {
  const stories = [
    { imagem: "assets/9gag.svg", usuario: "9gag" },
    { imagem: "assets/meowed.svg", usuario: "meowed" },
    { imagem: "assets/barked.svg", usuario: "barked" },
    { imagem: "assets/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
    { imagem: "assets/wawawicomics.svg", usuario: "wawawiwacomics" },
    { imagem: "assets/respondeai.svg", usuario: "respondeai" },
    { imagem: "assets/filomoderna.svg", usuario: "filomoderna" },
    { imagem: "assets/memeriagourmet.svg", usuario: "memeriagourmet" },
  ];

  return (
    <div className="stories">
      {stories.map((s, index) => (
        <Story key={index} imagem={s.imagem} usuario={s.usuario} />
      ))}
    </div>
  );
}
