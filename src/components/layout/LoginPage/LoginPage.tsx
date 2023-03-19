import Link from 'next/link';
import LoginStyles from './LoginPage.module.css';

export const LoginPage = () => {
  return (
    <div className={LoginStyles.container}>
      <h1>Login</h1>
      <form className={LoginStyles.form}>
        <span>
          <label>Username or email</label>
          <input type="text" placeholder="john@example.com / John007" />
        </span>
        <span>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </span>
        <div className={LoginStyles.buttonContainer}>
          <button>Log in</button>
        </div>
      </form>
      <div>
        <Link href={'/'}>Home</Link>
        <Link href={'/sign-in/wait-list'}>Sign in</Link>
      </div>
    </div>
  );
};
