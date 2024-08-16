import { useState } from "react";
import styles from "./SignUpPage.module.css";
import { Link } from "react-router-dom";
import { useSignup } from "./useSignup";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, isLoading } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) return;

    signup({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className={styles.sign_up_form}>
      <form className={styles.box} onSubmit={handleSubmit} method="post">
        <h1>Sign up</h1>
        <input
          type="text"
          id={styles.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
          required
          disabled={isLoading}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id={styles.email}
          placeholder="Useremail"
          required
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
        <input type="submit" value="Sign up" />

        <p className={styles.link}>
          <span>Already have an account?</span>{" "}
          <Link className={styles.login_link} to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
