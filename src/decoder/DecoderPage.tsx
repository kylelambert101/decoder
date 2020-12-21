import * as React from "react";
import { Stack, TextField } from "@fluentui/react";
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

  return (
    <Stack style={{ paddingLeft: "1em" }}>
      <Stack.Item>
        <Stack horizontal horizontalAlign="start">
          <TextField
            label="Message"
            value={message}
            onChange={handleMessageChange}
            style={{ width: 400 }}
          />
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <AtbashResults message={message} />
      </Stack.Item>
      <Stack.Item>
        <A1Z26Results message={message} />
      </Stack.Item>
      <Stack.Item>
        <VigenereResults message={message} />
      </Stack.Item>
      <Stack.Item>
        <CaesarResults message={message} />
      </Stack.Item>
    </Stack>
  );
};

export default DecoderPage;
