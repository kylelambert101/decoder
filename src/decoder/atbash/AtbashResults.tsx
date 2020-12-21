import { Label, Stack } from "@fluentui/react";
import * as React from "react";
import { codeLetters } from "../cryptoTypes";
import { getAtbashResult, splitIntoCodeCharacters } from "../cryptoUtilities";
import { getId } from "@fluentui/react";

interface Props {
  message: string;
}

const AtbashResults = ({ message }: Props) => {
  const resultStackId = getId("resultStack");
  const codedMessage = splitIntoCodeCharacters(message);
  return (
    <Stack>
      <Label htmlFor={resultStackId}>Atbash Cipher Results</Label>
      <span>{getAtbashResult(codedMessage)}</span>
    </Stack>
  );
};

export default AtbashResults;
