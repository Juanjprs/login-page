import "./Login.css";
import { ChangeEvent, useEffect, useState } from "react";
import { validateEmail, validatePassword } from "../../helpers/validateEmail";
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { mainTheme } from "../../themes/Theme";
import { LockOutlined, MailOutline } from "@mui/icons-material";

export const Login = () => {
  const [show, setShow] = useState(false);

  const [isValid, setIsValid] = useState(false);

  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  //Verifica a validação do e-mail e da senha para habilitar ou desabilitar o botão
  useEffect(() => {
    setIsValid(validateEmail(email) && validatePassword(password));
  }, [email, password]);
  
  //Ao clicar no botão mostra as informações de login em um alert
  const handleSend = () => {
    const result = `Seu login : ${email} \nSua senha: ${password}`;
    alert(result);
  };

  //Mostra e eculta a senha ao clicar no icone de cadeado da senha
  const handleShow = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setShow(!show);
  };

  //Atribui valor a variavel email para ser validada posteriormente
  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  //Atribui valor a variavel senha para ser validada posteriormente
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="form">
      <h3>Login</h3>
      <form>
        <div className="input-container">
          <MailOutline className="icon" />
          <input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => handleEmail(e)}
          />
        </div>
        <div className="input-container">
          <input
            type={show ? "text" : "password"}
            placeholder="Senha"
            required
            onChange={(e) => handlePassword(e)}
          />
          <button className="showPassword" onClick={(e) => handleShow(e)}>
            {show ? "Ocultar" : "Mostrar"} <LockOutlined className="iconLock" />{" "}
          </button>
        </div>
        <div className="buttons">
          <ThemeProvider theme={mainTheme}>
            <Button
              variant="contained"
              type="submit"
              onClick={handleSend}
              disabled={!isValid}
            >
              Entrar
            </Button>
          </ThemeProvider>
          <a href="*">Esqueci a senha</a>
          <a href="*">Criar conta</a>
        </div>
      </form>
    </div>
  );
};
