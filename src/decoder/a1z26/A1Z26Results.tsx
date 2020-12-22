import * as React from "react";
import { getA1Z26Result } from "../cryptoUtilities";
import { Label, Stack, getId } from "@fluentui/react";
import ResultMessage from "../results/ResultMessage";

interface Props {
  message: string;
}

const A1Z26Results = ({ message }: Props) => {
  const resultId = getId("result");

  return (
    <Stack>
      <Label htmlFor={resultId}>A1Z26 Cipher Results</Label>
      <div id={resultId}>
        <ResultMessage message={getA1Z26Result(message, "-")} />
      </div>
    </Stack>
  );
};

export default A1Z26Results;
