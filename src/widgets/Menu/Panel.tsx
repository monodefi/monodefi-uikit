import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { PanelProps, PushedProps, Profile } from "./types";
import { SIDEBAR_WIDTH_FULL, MENU_HEIGHT } from "./config";
import { Login } from "../WalletModal/types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
  account?: string;
  login: Login;
  profile?: Profile;
  logout: () => void;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean; isMobile: boolean }>`
  position: fixed;
  ${({ isMobile, showMenu }) => (isMobile ? 
    `padding-top: ${(showMenu ? "80px" : 0)};` : 
    "padding-top:0px;")}

  top: 0;
  left: 0;
  height: ${({ isMobile }) => (isMobile ? '100vh' : `${MENU_HEIGHT}px`)};
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  
  ${({ isMobile, isPushed }) => (isMobile ? `width: ${(isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};` : `width:100%;`)}
  

  transition: padding-top 0.2s, width 0.2s;
  border-right: ${({ isPushed }) => (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.nav} {
    border-right: 2px solid rgba(133, 133, 133, 0.1);
  }
`;
const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu, isMobile } = props;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu} isMobile={isMobile}>
      <PanelBody {...props} />
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
