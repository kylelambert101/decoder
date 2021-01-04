import * as React from "react";
import { IStackItemStyles, Stack, TextField } from "@fluentui/react";
import CaesarResults from "./caesar/CaesarResults";
import AtbashResults from "./atbash/AtbashResults";
import A1Z26Results from "./a1z26/A1Z26Results";
import VigenereResults from "./vigenere/VigenereResults";
import ResultMessage from "./results/ResultMessage";

const DecoderPage = () => {
  const [message, setMessage] = React.useState("");
  const [highestValidScore, setHighestValidScore] = React.useState(0);

  // TODO The issue is that valid score doesn't reset if you type in a new message because
  // DecoderPage isn't re-rendered. Seems like maybe it should be cleared whenever the message is changed
  // That might cause some extra calculations on each keystroke so I'll have to see if it interrupts the
  // UI too much.

  React.useEffect(
    () => console.log(`Highest score is now ${highestValidScore}`),
    [highestValidScore]
  );

  const handleMessageChange = (
    _event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newMessage?: string | undefined
  ) => setMessage(newMessage || "");

  const renderResult = (phrase: string) => {
    return (
      <ResultMessage
        message={phrase}
        highestValidScore={highestValidScore}
        setHighestValidScore={setHighestValidScore}
      />
    );
  };

  const stackItemStyles: IStackItemStyles = {
    root: { width: "75%" },
  };

  return (
    <Stack
      horizontalAlign="center"
      tokens={{ childrenGap: "1em" }}
      style={{ width: "100%" }}
    >
      <Stack.Item styles={stackItemStyles}>
        <Stack
          horizontal
          horizontalAlign="center"
          style={{ width: "100%", marginTop: "1em" }}
          tokens={{ childrenGap: "1em" }}
        >
          <TextField
            // label="Message"
            value={message}
            onChange={handleMessageChange}
            style={{ width: 400 }}
            placeholder="Enter message to decode"
          />
        </Stack>
      </Stack.Item>
      <Stack.Item styles={stackItemStyles}>
        <AtbashResults message={message} renderResult={renderResult} />
      </Stack.Item>
      <Stack.Item styles={stackItemStyles}>
        <A1Z26Results message={message} renderResult={renderResult} />
      </Stack.Item>
      <Stack.Item styles={stackItemStyles}>
        <VigenereResults message={message} renderResult={renderResult} />
      </Stack.Item>
      <Stack.Item styles={stackItemStyles}>
        <CaesarResults message={message} renderResult={renderResult} />
      </Stack.Item>
    </Stack>
  );
};

export default DecoderPage;
