import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps, Profile } from "./types";
import Avatar from "./Avatar";
import { Login } from "../WalletModal/types";
import UserBlock from "./UserBlock";
import { MENU_ENTRY_WIDTH } from "./config";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
  account?: string;
  login: Login;
  profile?: Profile;
  logout: () => void;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: block;
  flex-direction: column;
  width: 100%;
`;

const Connect = styled.div<{ isMobile: boolean }>`
  ${({ isMobile }) => (isMobile ? "display: none;" : `display:block;float:right;width:${MENU_ENTRY_WIDTH}px;`)};
  margin-top: 8px;
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links, account, login, logout, profile }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      <Connect isMobile={isMobile}>
        <UserBlock account={account} login={login} logout={logout} />
        {profile && <Avatar profile={profile} />}
      </Connect>

      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          return (
            <div>
              {entry.items.map((item) => (
                <MenuEntry
                  key={item.href}
                  secondary
                  isActive={item.href === location.pathname}
                  onClick={handleClick}
                  isMobile={isMobile}
                >
                  <MenuLink href={item.href}>{item.label}</MenuLink>
                </MenuEntry>
              ))}
            </div>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
