import * as React from "react";
import { Stack } from "@fluentui/react";
import { Text } from "office-ui-fabric-react/lib/Text";
import { codeLetters } from "../cryptoTypes";
import { getCaesarResultWithOffset } from "../cryptoUtilities";
import ResultMessage from "../results/ResultMessage";
import ResultCard from "../results/ResultCard";

interface Props {
  message: string;
}

const CaesarCard = ({ message }: Props): React.ReactElement => {
  return (
    <ResultCard label="Caesar Cipher Results">
      <Stack horizontal tokens={{ childrenGap: "1em" }}>
        <Stack tokens={{ childrenGap: "0.25em" }}>
          {codeLetters.map((letter, index) => (
            <Stack.Item key={`${letter}OffsetLabel`}>
              <Text variant="mediumPlus">(Offset {index + 1})</Text>
            </Stack.Item>
          ))}
        </Stack>
        <Stack tokens={{ childrenGap: "0.25em" }}>
          {codeLetters.map((letter, index) => (
            <Stack.Item key={`${letter}OffsetResult`}>
              <ResultMessage
                message={getCaesarResultWithOffset(message, index + 1)}
              />
            </Stack.Item>
          ))}
        </Stack>
      </Stack>
    </ResultCard>
  );
};

export default CaesarCard;
