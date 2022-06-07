import React from "react";
import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcone,
  SettingsIcon,
} from "./styles";

import Logo from "../../assets/Logo.svg";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar>
          <img src={Logo} alt="" />
        </Avatar>
        <UserData>
          <strong>Fhellipy</strong>
          <span>#6394</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcone />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export { UserInfo };
