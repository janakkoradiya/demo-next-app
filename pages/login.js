import { signIn } from "next-auth/react";

export default function Login() {
  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: true,
      username: e.target.username.value,
      password: e.target.password.value,
      callbackUrl: "/home",
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input name="username" type="text" placeholder="Username" required />
        <br />
        <input name="password" type="password" placeholder="Password" required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}