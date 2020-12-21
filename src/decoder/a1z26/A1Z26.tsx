import * as React from "react";
import { getA1Z26Result } from "../cryptoUtilities";
import { Label, Stack, getId } from "@fluentui/react";

interface Props {
  message: string;
}

const A1Z26Results = ({ message }: Props) => {
  const resultStackId = getId("resultStack");

  return (
    <Stack>
      <Label htmlFor={resultStackId}>A1Z26 Cipher Results</Label>
      <span>{getA1Z26Result(message, "-")}</span>
    </Stack>
  );
};

export default A1Z26Results;
