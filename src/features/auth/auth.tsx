import { useState } from "react";
import classnames from "classnames";
import { SignIn } from "./_sign-in/sign-in";
import { SignUp } from "./_sign-up/sign-up";

import "./auth.scss";


export const Auth = () => {
    const [signUp, setSignUp] = useState(false);

    return (
        <div className="auth">
            <ul className="auth__tabs">
                <li>
                    <button
                        className={classnames("auth__tab",{
                            active: !signUp,
                        })}
                        onClick={() => setSignUp(false)}
                    >Войти</button>
                </li>
                <li>
                    <button
                        className={classnames("auth__tab",{
                            active: signUp,
                        })}
                        onClick={() => setSignUp(true)}
                    >Зарегистрироваться</button>
                </li> 
            </ul>
            {signUp ? <SignUp /> : <SignIn />}
        </div>
    )
}