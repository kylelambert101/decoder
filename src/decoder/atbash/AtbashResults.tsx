import * as React from "react";
import { getAtbashResult } from "../cryptoUtilities";
import ResultCard from "../results/ResultCard";

interface Props {
  message: string;
  renderResult: (result: string) => React.ReactNode;
}

const AtbashResults = ({
  message,
  renderResult,
}: Props): React.ReactElement => {
  return (
    <ResultCard label="Atbash Cipher Results">
      {renderResult(getAtbashResult(message))}
    </ResultCard>
  );
};

export default AtbashResults;
