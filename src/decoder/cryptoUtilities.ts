import { CodeCharacter, codeLetters } from "./cryptoTypes";
/**
 * Split a message string into an array of CodeCharacters
 * @param message
 */
export const splitIntoCodeCharacters = (message: string): CodeCharacter[] => {
  return message.split("").map((char, index) => ({
    rawValue: char,
    codeLetter: codeLetters.find((c) => c === char.toUpperCase()),
    position: index,
    transform:
      char.toUpperCase() === char
        ? (c: string) => c.toUpperCase()
        : (c: string) => c.toLowerCase(),
  }));
};

/**
 * Calculate the resulting string if `message` is encoded by a Caesar
 * cipher with offset `offset`
 * @param message Message to decode
 * @param offset Number of positions to shift the cipher
 */
export const getCaesarResultWithOffset = (
  message: CodeCharacter[],
  offset: number
): string => {
  const adjustedAlphabet = [
    ...codeLetters.slice(offset),
    ...codeLetters.slice(0, offset),
  ];

  return message
    .map((letter) =>
      typeof letter.codeLetter === "undefined"
        ? letter.rawValue
        : letter.transform(
            adjustedAlphabet[codeLetters.indexOf(letter.codeLetter)]
          )
    )
    .join("");
};
