import * as React from "react";
import { IStackItemStyles, Stack, TextField } from "@fluentui/react";
import CaesarResults from "./caesar/CaesarResults";
import AtbashResults from "./atbash/AtbashResults";
import A1Z26Results from "./a1z26/A1Z26Results";
import VigenereResults from "./vigenere/VigenereResults";

const DecoderPage = () => {
  const [message, setMessage] = React.useState("");

  const handleMessageChange = (
    _event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newMessage?: string | undefined
  ) => setMessage(newMessage || "");

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
