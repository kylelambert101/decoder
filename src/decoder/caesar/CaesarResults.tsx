import * as React from "react";
import { Stack } from "@fluentui/react";
import { codeLetters } from "../cryptoTypes";
import { getCaesarResultWithOffset } from "../cryptoUtilities";
import ResultMessage from "../results/ResultMessage";
import ResultCard from "../results/ResultCard";

interface Props {
  message: string;
}

const CaesarResults = ({ message }: Props): React.ReactElement => {
  return (
    <ResultCard label="Caesar Cipher Results">
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
              <ResultMessage
                message={getCaesarResultWithOffset(message, index)}
              />
            </Stack.Item>
          ))}
        </Stack>
      </Stack>
    </ResultCard>
  );
};

export default CaesarResults;
