import * as React from "react";
import { getVigenereResult } from "../cryptoUtilities";
import { TextField } from "@fluentui/react";
import ResultMessage from "../results/ResultMessage";
import ResultCard from "../results/ResultCard";

interface Props {
  message: string;
  renderResult: (result: string) => React.ReactNode;
}

const VigenereResults = ({ message, renderResult }: Props) => {
  const [key, setKey] = React.useState("SECRET_KEY");

  const handleKeyChange = (
    _event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newKey?: string | undefined
  ) => {
    if (typeof newKey !== "undefined") setKey(newKey.toUpperCase());
  };

  return (
    <ResultCard
      label="Vigenère Cipher Results"
      labelFriends={(): React.ReactElement => (
        <TextField
          label="Key"
          value={key}
          onChange={handleKeyChange}
          underlined
          style={{ width: 100 }}
        />
      )}
    >
      {renderResult(getVigenereResult(message, key))}
    </ResultCard>
  );
};

export default VigenereResults;
