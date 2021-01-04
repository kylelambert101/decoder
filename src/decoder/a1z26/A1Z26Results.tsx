import * as React from "react";
import { getA1Z26Result } from "../cryptoUtilities";
import ResultCard from "../results/ResultCard";

interface Props {
  message: string;
  renderResult: (result: string) => React.ReactNode;
}

const A1Z26Results = ({ message, renderResult }: Props): React.ReactElement => {
  return (
    <ResultCard label="A1Z26 Cipher Results">
      {renderResult(getA1Z26Result(message, "-"))}
    </ResultCard>
  );
};

export default A1Z26Results;
