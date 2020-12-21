import * as React from "react";
import { getVigenereResult } from "../cryptoUtilities";
import { Label, Stack, getId } from "@fluentui/react";

interface Props {
  message: string;
}

const VigenereResults = ({ message }: Props) => {
  const resultId = getId("result");

  return (
    <Stack>
      <Label htmlFor={resultId}>Vigenère Cipher Results</Label>
      <span id={resultId}>{getVigenereResult(message, "SHIFTER") || "-"}</span>
    </Stack>
  );
};

export default VigenereResults;
