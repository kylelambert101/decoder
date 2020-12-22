import * as React from "react";
import { isWord } from "../cryptoUtilities";

export interface Props {
  message: string;
}

const ResultMessage = ({ message }: Props): React.ReactElement => {
  return (
    <>
      {message.length > 0 ? (
        message.split(" ").map((word) =>
          isWord(word) ? (
            <p
              style={{
                color: "#F7630C",
                fontWeight: "bold",
                display: "inline",
              }}
            >
              {word}{" "}
            </p>
          ) : (
            <p style={{ display: "inline" }}>{word} </p>
          )
        )
      ) : (
        <span>-</span>
      )}
    </>
  );
};

export default ResultMessage;
