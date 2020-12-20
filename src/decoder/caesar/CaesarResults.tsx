import { Label, Stack } from "@fluentui/react";
import * as React from "react";
import { codeLetters } from "../cryptoTypes";
import {
  getCaesarResultWithOffset,
  splitIntoCodeCharacters,
} from "../cryptoUtilities";
import { getId } from "@fluentui/react";

interface Props {
  message: string;
}

const CaesarResults = ({ message }: Props) => {
  const resultStackId = getId("resultStack");
  const codedMessage = splitIntoCodeCharacters(message);
  return (
    <Stack>
      <Label htmlFor={resultStackId}>Caesar Cipher Results</Label>
      <Stack horizontal tokens={{ childrenGap: "1em" }}>
        <Stack tokens={{ childrenGap: "0.25em" }}>
          {codeLetters.map((_letter, index) => (
            <span>(Offset {index})</span>
          ))}
        </Stack>
        <Stack tokens={{ childrenGap: "0.25em" }}>
          {codeLetters.map((_letter, index) => (
            <span>{getCaesarResultWithOffset(codedMessage, index)}</span>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CaesarResults;
