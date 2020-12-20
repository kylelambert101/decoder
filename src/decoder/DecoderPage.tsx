import * as React from "react";
import { Stack, TextField } from "@fluentui/react";
import CaesarResults from "./caesar/CaesarResults";

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
        <CaesarResults message={message} />
      </Stack.Item>
    </Stack>
  );
};

export default DecoderPage;
