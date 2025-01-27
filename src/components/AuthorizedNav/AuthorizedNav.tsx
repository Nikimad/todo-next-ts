import Button from "../Button";

type AuthorizedNavProps = {
    onLogout: () => void;
};

const AuthorizedNav = ({ onLogout }: Readonly<AuthorizedNavProps>) => <Button onClick={onLogout}>Log out</Button>;

export default AuthorizedNav;
