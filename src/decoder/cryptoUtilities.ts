import { CodeCharacter, CodeLetter, codeLetters } from "./cryptoTypes";
import { words } from "./words";
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
 * @param inputAlphabet
 * @param outputAlphabet
 */
const getSubstitutionResult = (
  message: CodeCharacter[],
  inputAlphabet: CodeLetter[],
  outputAlphabet: CodeLetter[]
) => {
  return message.map((letter) =>
    typeof letter.codeLetter === "undefined"
      ? letter.rawValue
      : letter.transform(
          outputAlphabet[
            (inputAlphabet || codeLetters).indexOf(letter.codeLetter)
          ]
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

  return getSubstitutionResult(
    codedMessage,
    // Typescript doesn't like that I'm using a readonly array here but it's fine.
    //@ts-ignore
    codeLetters,
    adjustedAlphabet
  ).join("");
};
/**
 * Calculate the resulting string if `message` is encoded by an Atbash
 * cipher
 * @param message Message to decode
 */
export const getAtbashResult = (message: string): string => {
  const codedMessage = splitIntoCodeCharacters(message);
  const reversedAlphabet = [...codeLetters].reverse();
  return getSubstitutionResult(
    codedMessage,
    // Typescript doesn't like that I'm using a readonly array here but it's fine.
    //@ts-ignore
    codeLetters,
    reversedAlphabet
  ).join("");
};

/**
 * Determine whether a string is numeric and between 1 and 26 (inclusive).
 * @param s
 */
const isValidA1Z26Number = (s: string): boolean => {
  // Rule out non-numbers
  if (s === " " || isNaN(Number(s))) return false;
  const number = Number(s);
  return 1 <= number && number <= 26;
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
    codeNumber: isValidA1Z26Number(item[0])
      ? // Cipher code is 1-indexed so subtract one
        Number(item[0]) - 1
      : undefined,
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

export const getAlphabetStartingAt = (letter: CodeLetter) => {
  const ind = codeLetters.indexOf(letter);
  return [...codeLetters.slice(ind), ...codeLetters.slice(0, ind)];
};

export const getVigenereResult = (message: string, key: string): string => {
  let currentKeyInd = 0;
  return splitIntoCodeCharacters(message)
    .map((char) =>
      typeof char.codeLetter !== "undefined"
        ? getSubstitutionResult(
            [char],
            getAlphabetStartingAt(
              key[currentKeyInd++ % key.length] as CodeLetter
            ),
            // Typescript doesn't like that I'm using a readonly array here but it's fine.
            //@ts-ignore
            codeLetters
          )
        : char.rawValue
    )
    .join("");
};

/**
 * Determine whether or not a string is a valid english word.
 * Returns true if all sequential letter sequences in the string are valid
 * words. Non-letter characters are treated as separators.
 * @param word
 */
export const isWord = (word: string): boolean => {
  const wordPattern = /[a-z']+/g;
  return [...word.toLowerCase().matchAll(wordPattern)].reduce(
    (prev, item) => prev && Reflect.get(words, item[0]),
    true
  );
};
