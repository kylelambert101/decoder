import * as React from "react";
import { Text } from "office-ui-fabric-react/lib/Text";
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
        )
      ) : (
        <Text variant="mediumPlus">-</Text>
      )}
    </>
  );
};

export default ResultMessage;
