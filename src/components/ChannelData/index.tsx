import React, { useRef, useEffect } from "react";
import { ChannelMessage, Mention } from "../ChannelMessage";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            author="Fhellipy C."
            date="03/05/2003"
            content="Clone do Discord feito por Fhellipy C."
          />
        ))}

        <ChannelMessage
          author="Diego Fernandes"
          date="03/05/2003"
          content={
            <>
              <Mention>@Fhellipy C.</Mention>, o FiveM ta bugado, desde de
              madrugada.
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export { ChannelData };
