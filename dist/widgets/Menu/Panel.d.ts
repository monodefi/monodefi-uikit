import React from "react";
import { PanelProps, PushedProps, Profile } from "./types";
import { Login } from "../WalletModal/types";
interface Props extends PanelProps, PushedProps {
    showMenu: boolean;
    isMobile: boolean;
    account?: string;
    login: Login;
    profile?: Profile;
    logout: () => void;
}
declare const Panel: React.FC<Props>;
export default Panel;
