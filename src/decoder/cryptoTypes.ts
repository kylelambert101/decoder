export const codeLetters: string[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export type CodeLetter = typeof codeLetters[number];

export interface CodeCharacter {
  rawValue: string;
  codeLetter: CodeLetter | undefined;
  position: number;
  transform: (c: string) => string;
}
