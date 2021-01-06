import * as React from "react";
import ResultMessage from "../results/ResultMessage";
import { Stack } from "@fluentui/react";
import { cryptoMode } from "../cryptoUtilities";

interface Props {
  message: string;
  cryptoFunction: (message: string, mode: cryptoMode) => string;
}

const ResultPair = ({ message, cryptoFunction }: Props): React.ReactElement => {
  return (
    <Stack horizontal style={{ width: "100%" }}>
      <Stack
        grow
        horizontal
        horizontalAlign="center"
        style={{ maxWidth: "49%" }}
      >
        <ResultMessage
          message={cryptoFunction(message, "encode")}
          extraStyle={{ fontFamily: "monospace" }}
        />
      </Stack>
      <Stack grow style={{ maxWidth: "2%" }}></Stack>
      <Stack
        grow
        horizontal
        horizontalAlign="center"
        style={{ maxWidth: "49%" }}
      >
        <ResultMessage message={cryptoFunction(message, "decode")} />
      </Stack>
    </Stack>
  );
};

export default ResultPair;
