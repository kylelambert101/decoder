import * as React from "react";
import { Label, Stack, getId } from "@fluentui/react";
import { Card } from "@uifabric/react-cards";

interface Props {
  label: string;
  children?: React.ReactNode;
  labelFriends?: () => React.ReactNode;
}

const ResultCard = ({ label, children, labelFriends }: Props) => {
  const resultId = getId("result");

  return (
    <Card
      aria-label={`${label} Results Card`}
      horizontal
      tokens={{ childrenMargin: 12, maxWidth: "80vw" }}
      style={{ backgroundColor: "white" }}
    >
      <Card.Item
        styles={{
          root: {
            maxWidth: "95%",
          },
        }}
      >
        <Stack
          horizontal
          horizontalAlign="start"
          tokens={{ childrenGap: "1em" }}
        >
          <Label htmlFor={resultId}>{label}</Label>
          {typeof labelFriends !== "undefined" && labelFriends()}
        </Stack>
        <div id={resultId}>{children}</div>
      </Card.Item>
    </Card>
  );
};

export default ResultCard;
