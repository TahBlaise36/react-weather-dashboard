import { useState } from "react";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";
// import { login } from "../services/apiAuth";
import { useLogin } from "./useLogin";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    login({ email, password });
    setEmail("");
    setPassword("");
  }
  return (
    <div className={styles.login_form}>
      <form className={styles.box} onSubmit={handleSubmit} method="post">
        <h1>Login</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id={styles.email}
          placeholder="Useremail"
          disabled={isLoading}
        />
        <input
          type="password"
          id={styles.password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Userpassword"
          disabled={isLoading}
        />
        <input type="submit" value="Login" disabled={isLoading} />
        {/* <button type="reset">Login</button> */}
        <p className={styles.link}>
          <span>Don't have an account?</span>{" "}
          <Link className={styles.sign_up_link} to="/signup">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
