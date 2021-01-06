import * as React from "react";
import { getAtbashResult } from "../cryptoUtilities";
import ResultMessage from "../results/ResultMessage";
import ResultCard from "../results/ResultCard";

interface Props {
  message: string;
}

const AtbashCard = ({ message }: Props): React.ReactElement => {
  return (
    <ResultCard label="Atbash Cipher Results">
      <ResultMessage message={getAtbashResult(message)} />
    </ResultCard>
  );
};

export default AtbashCard;
