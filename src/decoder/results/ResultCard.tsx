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
      tokens={{ childrenMargin: 12, maxWidth: "100%" }}
      style={{ backgroundColor: "white" }}
    >
      <Card.Item
        styles={{
          root: {
            width: "95%",
          },
        }}
      >
        <Stack
          horizontal
          horizontalAlign="space-between"
          tokens={{ childrenGap: "1em" }}
        >
          <Label htmlFor={resultId}>{label}</Label>
          {typeof labelFriends !== "undefined" && labelFriends()}
        </Stack>
        <Stack horizontalAlign="center" style={{ width: "100%" }}>
          <div id={resultId}>{children}</div>
        </Stack>
      </Card.Item>
    </Card>
  );
};

export default ResultCard;
