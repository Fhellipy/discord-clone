import React from "react";

import   { ServerButton }  from "../ServerButton";
import { Container, Separator } from "./styles";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={5} hasNotifications/>
      <ServerButton />
      <ServerButton mentions={12}/>
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  );
};

export { ServerList };