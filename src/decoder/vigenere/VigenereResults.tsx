import * as React from "react";
import { getVigenereResult } from "../cryptoUtilities";
import { Label, Stack, getId } from "@fluentui/react";

interface Props {
  message: string;
}

const VigenereResults = ({ message }: Props) => {
  const resultStackId = getId("resultStack");

  return (
    <Stack>
      <Label htmlFor={resultStackId}>Vigenère Cipher Results</Label>
      <span>{getVigenereResult(message, "SHIFTER")}</span>
    </Stack>
  );
};

export default VigenereResults;
