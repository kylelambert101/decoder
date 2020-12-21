import * as React from "react";
import { Label, Stack, getId } from "@fluentui/react";
import { codeLetters } from "../cryptoTypes";
import { getCaesarResultWithOffset } from "../cryptoUtilities";

interface Props {
  message: string;
}

const CaesarResults = ({ message }: Props) => {
  const resultStackId = getId("resultStack");

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
            <span>{getCaesarResultWithOffset(message, index)}</span>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CaesarResults;
