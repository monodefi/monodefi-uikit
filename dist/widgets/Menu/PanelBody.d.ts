import React from "react";
import { PanelProps, PushedProps, Profile } from "./types";
import { Login } from "../WalletModal/types";
interface Props extends PanelProps, PushedProps {
    isMobile: boolean;
    account?: string;
    login: Login;
    profile?: Profile;
    logout: () => void;
}
declare const PanelBody: React.FC<Props>;
export default PanelBody;
