export const getCategory = (cat) => {
  switch (cat) {
    case "bio":
      return "Biologia";
    case "psi":
      return "Psicologia";
    case "sports":
      return "Deportes";
    case "scifi":
      return "Ciencia Ficcion";
    case "right":
      return "Derecho";
    case "self":
      return "Auto-Ayuda";
    default:
      return;
  }
};
