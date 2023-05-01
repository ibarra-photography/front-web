import Navigation from 'components/Navigation';
import WaitListStyles from './WaitList.module.css';

import registerText from 'domain/texts/waitLists/register/register.json';
import { FormEvent } from 'react';
import { IFetchParams, useFetch } from 'hooks/useFetch';
import Toast from 'components/Toast';

export const WaitList = () => {
  const { fetcher, fetchingStatus, response } = useFetch<string>();
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    const fetcherParams: IFetchParams = {
      url: `${process.env.API_URL}/api/v1/notifyMe/signIn`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { name, email }
    };

    fetcher(fetcherParams);
  };
  return (
    <div className={WaitListStyles.container}>
      <div className={WaitListStyles.navigationContainer}>
        <Navigation />
      </div>
      <h1>{registerText.title}</h1>
      <h2>{registerText.subtitle}</h2>
      <p className={WaitListStyles.paragraph}>{registerText.description}</p>
      <form onSubmit={submitHandler} className={WaitListStyles.form}>
        <div className={WaitListStyles.inputContainer}>
          <label htmlFor="">{registerText.form.inputs[1].label}</label>
          <input name="name" type="text" placeholder={registerText.form.inputs[1].placeholder} />
        </div>
        <div className={WaitListStyles.inputContainer}>
          <label htmlFor="">{registerText.form.inputs[0].label}</label>
          <input name="email" type="email" placeholder={registerText.form.inputs[0].placeholder} />
        </div>

        <div className={WaitListStyles.submitContainer}>
          {fetchingStatus === 'loading' ? (
            <p>Loading...</p>
          ) : (
            <button className={WaitListStyles.submitButton} type="submit">
              {registerText.form.submit}
            </button>
          )}
        </div>
      </form>
      {fetchingStatus === 'succeeded' ? <Toast>Congratulations, you will be notify</Toast> : null}
    </div>
  );
};
