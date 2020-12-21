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
  message: string,
  offset: number
): string => {
  const codedMessage = splitIntoCodeCharacters(message);
  const adjustedAlphabet = [
    ...codeLetters.slice(offset),
    ...codeLetters.slice(0, offset),
  ];

  return getSubstitutionResult(codedMessage, adjustedAlphabet).join("");
};
/**
 * Calculate the resulting string if `message` is encoded by an Atbash
 * cipher
 * @param message Message to decode
 */
export const getAtbashResult = (message: string): string => {
  const codedMessage = splitIntoCodeCharacters(message);
  const reversedAlphabet = [...codeLetters].reverse();
  return getSubstitutionResult(codedMessage, reversedAlphabet).join("");
};

/**
 * Calculate the resulting string if `message` is encoded by an A1Z26
 * cipher
 * @param message Message to decode
 */
export const getA1Z26Result = (
  message: string,
  letterDelimiter: string
): string => {
  // A1Z26 coded messages are set up differently from normal so parsing has to be custom
  const pattern = /(\d+|[^\d])/g;
  // Use a new `codeNumber` field because numbers aren't of type CodeLetter
  const matches: (CodeCharacter & { codeNumber: number | undefined })[] = [
    ...message.matchAll(pattern),
  ].map((item, ind) => ({
    rawValue: item[0],
    codeNumber:
      item[0] === " " || isNaN(Number(item[0].toString()))
        ? undefined
        : // Cipher code is 1-indexed so subtract one
          Number(item[0]) - 1,
    codeLetter: undefined,
    position: ind,
    transform: (c: string) => (c === letterDelimiter ? "" : c.toUpperCase()),
  }));

  return matches
    .map((m) =>
      m.transform(
        typeof m.codeNumber === "undefined"
          ? m.rawValue
          : codeLetters[m.codeNumber]
      )
    )
    .join("");
};
