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
              color="#F7630C"
              variant="mediumPlus"
              style={{
                color: "#F7630C",
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
