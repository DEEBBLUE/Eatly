import type { FC } from "react";
import Button from "../../../../components/Button/Button";
import "./auth.scss";


const Auth: FC = () => {
  return(
    <div className="auth__div">
      <Button name="Login" action={() => {}} styles="btn_basic"/>       
      <Button name="Sign up" action={() => {}}/>       
    </div>
  )
}

export default Auth;
