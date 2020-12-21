import * as React from "react";
import { getAtbashResult } from "../cryptoUtilities";
import { Label, Stack, getId } from "@fluentui/react";

interface Props {
  message: string;
}

const AtbashResults = ({ message }: Props) => {
  const resultId = getId("result");

  return (
    <Stack>
      <Label htmlFor={resultId}>Atbash Cipher Results</Label>
      <span id={resultId}>{getAtbashResult(message)}</span>
    </Stack>
  );
};

export default AtbashResults;
