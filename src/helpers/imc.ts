export type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  imc: number[];
  valueImc?: number;
};

export const levels: Level[] = [
  {
    title: "Abaixo do peso",
    color: "#96a3ab",
    icon: "down",
    imc: [0, 18.54],
  },
  {
    title: "Normal",
    color: "#0ead69",
    icon: "up",
    imc: [18.55, 24.9],
  },
  { 
    title: "Sobrepeso", 
    color: "#e2b036", 
    icon: "down", 
    imc: [25, 30] 
  },
  { 
    title: "Obesidade", 
    color: "#c3423f", 
    icon: "down", 
    imc: [30.1, 99.9] },
];

export const calculateImc = (height: number, weight: number) => {
  const imc = weight / (height * height);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      let levelCopy: Level = { ...levels[i] };

      levelCopy.valueImc = parseFloat(imc.toFixed(2));
      console.log(parseFloat(imc.toFixed(2)));

      return levelCopy;
    }
  }

  return null;
};
