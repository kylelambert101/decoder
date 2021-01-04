import * as React from "react";
import { Text } from "office-ui-fabric-react/lib/Text";
import { isWord } from "../cryptoUtilities";

export interface Props {
  message: string;
  highestValidScore: number;
  setHighestValidScore: (newScore: number) => void;
}

const ResultMessage = ({
  message,
  highestValidScore,
  setHighestValidScore,
}: Props): React.ReactElement => {
  const score = [...message.split(" ")].filter((w) => isWord(w)).length;

  if (score > highestValidScore) setHighestValidScore(score);

  const divStyle: React.CSSProperties =
    score === highestValidScore
      ? {
          border: "2px solid #00B7C3",
          borderRadius: "0.25em",
          padding: "0.25em",
        }
      : {};

  return (
    <>
      {message.length > 0 ? (
        <div style={divStyle}>
          {message.split(" ").map((word) =>
            isWord(word) ? (
              <Text
                variant="mediumPlus"
                style={{
                  color: "#6B69D6",
                  fontWeight: "bold",
                }}
              >
                {word}{" "}
              </Text>
            ) : (
              <Text variant="mediumPlus">{word} </Text>
            )
          )}
        </div>
      ) : (
        <Text variant="mediumPlus">-</Text>
      )}
    </>
  );
};

export default ResultMessage;
