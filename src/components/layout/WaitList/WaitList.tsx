import Navigation from 'components/Navigation';
import Link from 'next/link';
import WaitListStyles from './WaitList.module.css';

import registerText from 'domain/texts/waitLists/register/register.json';

export const WaitList = () => {
  return (
    <div className={WaitListStyles.container}>
      <h1>{registerText.title}</h1>
      <h2>{registerText.subtitle}</h2>
      <p>{registerText.description}</p>
      <form className={WaitListStyles.form}>
        <label htmlFor="">{registerText.form.inputs[0].label}</label>
        <input type="email" placeholder={registerText.form.inputs[0].placeholder} />
        <div className={WaitListStyles.submitContainer}>
          <button>{registerText.form.submit}</button>
        </div>
      </form>
      <Link href={'/'}> Go to home page</Link>
    </div>
  );
};
