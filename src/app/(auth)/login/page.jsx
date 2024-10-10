import { handleGithubLogin, login } from "@/lib/actions";

const LoginPage = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button type="submit">Login with Github</button>
      </form>
      <form action={login}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
