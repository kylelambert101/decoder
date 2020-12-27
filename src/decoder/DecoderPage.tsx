import * as React from "react";
import { IStackItemStyles, Stack, TextField } from "@fluentui/react";
import CaesarResults from "./caesar/CaesarResults";
import AtbashResults from "./atbash/AtbashResults";
import A1Z26Results from "./a1z26/A1Z26Results";
import VigenereResults from "./vigenere/VigenereResults";

interface Props {}

const DecoderPage = (props: Props) => {
  const [message, setMessage] = React.useState("");

  const handleMessageChange = (
    _event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newMessage?: string | undefined
  ) => setMessage(newMessage || "");

  const stackItemStyles: IStackItemStyles = {
    root: { width: "70%" },
  };

  return (
    <Stack
      horizontalAlign="center"
      tokens={{ childrenGap: "1em" }}
      style={{ width: "100%" }}
    >
      <Stack.Item styles={stackItemStyles}>
        <Stack horizontal horizontalAlign="start">
          <TextField
            label="Message"
            value={message}
            onChange={handleMessageChange}
            style={{ width: 400 }}
          />
        </Stack>
      </Stack.Item>
      <Stack.Item styles={stackItemStyles}>
        <AtbashResults message={message} />
      </Stack.Item>
      <Stack.Item styles={stackItemStyles}>
        <A1Z26Results message={message} />
      </Stack.Item>
      <Stack.Item styles={stackItemStyles}>
        <VigenereResults message={message} />
      </Stack.Item>
      <Stack.Item styles={stackItemStyles}>
        <CaesarResults message={message} />
      </Stack.Item>
    </Stack>
  );
};

export default DecoderPage;
