import * as React from "react";
import { getAtbashResult } from "../cryptoUtilities";
import { Label, Stack, getId } from "@fluentui/react";

interface Props {
  message: string;
}

const AtbashResults = ({ message }: Props) => {
  const resultStackId = getId("resultStack");

  return (
    <Stack>
      <Label htmlFor={resultStackId}>Atbash Cipher Results</Label>
      <span>{getAtbashResult(message)}</span>
    </Stack>
  );
};

export default AtbashResults;
