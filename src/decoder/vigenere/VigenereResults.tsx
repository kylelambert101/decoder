import * as React from "react";
import { getVigenereResult } from "../cryptoUtilities";
import { Label, Stack, getId, TextField } from "@fluentui/react";
import ResultMessage from "../results/ResultMessage";

interface Props {
  message: string;
}

const VigenereResults = ({ message }: Props) => {
  const [key, setKey] = React.useState("SECRET_KEY");

  const handleKeyChange = (
    _event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newKey?: string | undefined
  ) => {
    if (typeof newKey !== "undefined") setKey(newKey.toUpperCase());
  };

  const resultId = getId("result");

  return (
    <Stack>
      <Stack horizontal horizontalAlign="start" tokens={{ childrenGap: "1em" }}>
        <Label htmlFor={resultId}>Vigenère Cipher Results</Label>
        <TextField
          label="Key"
          value={key}
          onChange={handleKeyChange}
          underlined
          style={{ width: 100 }}
        />
      </Stack>
      <div id={resultId}>
        <ResultMessage message={getVigenereResult(message, key)} />
      </div>
    </Stack>
  );
};

export default VigenereResults;
