import { CodeCharacter, CodeLetter, codeLetters } from "./cryptoTypes";
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
 * Calculate the results of a substitution cipher of `message` using
 * `alternativeAlphabet` as the substitution
 * @param message
 * @param alternativeAlphabet
 */
const getSubstitutionResult = (
  message: CodeCharacter[],
  alternativeAlphabet: CodeLetter[]
) => {
  return message.map((letter) =>
    typeof letter.codeLetter === "undefined"
      ? letter.rawValue
      : letter.transform(
          alternativeAlphabet[codeLetters.indexOf(letter.codeLetter)]
        )
  );
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

  return getSubstitutionResult(message, adjustedAlphabet).join("");
};
/**
 * Calculate the resulting string if `message` is encoded by an Atbash
 * cipher
 * @param message Message to decode
 */
export const getAtbashResult = (message: CodeCharacter[]): string => {
  const reversedAlphabet = [...codeLetters].reverse();
  return getSubstitutionResult(message, reversedAlphabet).join("");
};
