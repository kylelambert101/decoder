import * as React from "react";
import { getAtbashResult } from "../cryptoUtilities";
import { Label, Stack, getId } from "@fluentui/react";
import ResultMessage from "../results/ResultMessage";

interface Props {
  message: string;
}

const AtbashResults = ({ message }: Props) => {
  const resultId = getId("result");

  return (
    <Stack>
      <Label htmlFor={resultId}>Atbash Cipher Results</Label>
      <div id={resultId}>
        <ResultMessage message={getAtbashResult(message)} />
      </div>
    </Stack>
  );
};

export default AtbashResults;
