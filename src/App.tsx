import Input from "./components/input";
import Button from "./components/button";
import Text from "./components/text";
import Container from "./components/container";
import logo from "./assets/logo.svg";
import MailIcon from "./assets/mail.svg?react";
import LockIcon from "./assets/lock.svg?react";
import EyeClosedIcon from "./assets/eye-closed.svg?react";
import User from "./assets/user-round-plus.svg?react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">
      <img src={logo} alt="logo" />

      <Container>
        <Text
          title="Fazer login"
          subtitle="Entre na sua conta para continuar"
        />
        <Input title="Email" icon={MailIcon} placeholder="mail@exemplo.com" />

        <Input title="Senha"
          icon={LockIcon}
          placeholder="Digite sua senha"
          rightIcon={EyeClosedIcon}
        />

        <Button variant="primary">Entrar</Button>

        <Button icon={User} variant="secondary">
          Criar conta
        </Button>
      </Container>
    </div>
  );
}