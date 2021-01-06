import * as React from "react";
import { getA1Z26Result } from "../cryptoUtilities";
import ResultMessage from "../results/ResultMessage";
import ResultCard from "../results/ResultCard";

interface Props {
  message: string;
}

const A1Z26Card = ({ message }: Props): React.ReactElement => {
  return (
    <ResultCard label="A1Z26 Cipher Results">
      <ResultMessage message={getA1Z26Result(message, "-")} />
    </ResultCard>
  );
};

export default A1Z26Card;
