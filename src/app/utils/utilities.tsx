export const languages = [
  {
    name: "JavaScript",
    svg: "icons/javascript.svg"
  },
  {
    name: "HTML",
    svg: "icons/html.svg"
  },
  {
    name: "CSS",
    svg: "icons/css.svg"
  },
  {
    name: "Python",
    svg: "icons/python.svg"
  },
  {
    name: "Java",
    svg: "icons/java.svg"
  },
  {
    name: "TypeScript",
    svg: "icons/typescript.svg"
  }
]

export const themes = ["monokai", "twilight", "terminal"]

export const backgrounds = [
  "linear-gradient(354deg, #ff75b5, #ffb86c)",
  "linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))",
  "linear-gradient(90deg, #93f9b9, #1d976c)",
  "linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))",
  "linear-gradient(337deg, #654ea3, #da98b4)",
  "#000",
  "#fff",
  "linear-gradient(270deg, #fc6767, #ec008c)",
  "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))",
  "linear-gradient(270deg, #514a9d, #24c6dc)"
]

export const initialCode = `function guessMyNumber() {
  const userGuess = prompt("Guess a number between 1 and 10:");
  const secretNumber = Math.ceil(Math.random() * 10);

  if (parseInt(userGuess) === secretNumber) {
    return "Wow, you must be a psychic!";
  } else {
    return \`Nope, the number was \${secretNumber}. Better luck next time!\`;
  }
}

console.log(guessMyNumber());`;
