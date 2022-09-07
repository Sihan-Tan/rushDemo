/// <reference types="react" />
declare type User = {
    name: string;
};
interface HeaderProps {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
declare const Header: ({ onLogin, onLogout, onCreateAccount }: HeaderProps) => JSX.Element;
export default Header;
