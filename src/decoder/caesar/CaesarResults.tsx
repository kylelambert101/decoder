import * as React from "react";
import { Label, Stack, getId } from "@fluentui/react";
import { codeLetters } from "../cryptoTypes";
import { getCaesarResultWithOffset } from "../cryptoUtilities";
import { isWord } from "../cryptoUtilities";

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
          {codeLetters.map((letter, index) => (
            <Stack.Item key={`${letter}OffsetLabel`}>
              <span>(Offset {index})</span>
            </Stack.Item>
          ))}
        </Stack>
        <Stack tokens={{ childrenGap: "0.25em" }}>
          {codeLetters.map((letter, index) => (
            <Stack.Item key={`${letter}OffsetResult`}>
              {message.length > 0 ? (
                getCaesarResultWithOffset(message, index)
                  .split(" ")
                  .map((word) =>
                    isWord(word) ? (
                      <p style={{ color: "red", display: "inline" }}>{word} </p>
                    ) : (
                      <p style={{ display: "inline" }}>{word} </p>
                    )
                  )
              ) : (
                <span>-</span>
              )}
            </Stack.Item>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CaesarResults;
