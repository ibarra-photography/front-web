import React, { FormEvent, useRef } from 'react';

import PrintsNotifyMeStyles from './PrintsNotifyMe.module.css';

import printsText from 'domain/texts/waitLists/printsLists/prints.json';
import { IFetchParams, useFetch } from 'hooks/useFetch';
import Toast from 'components/Toast';

export const PrintsNotifyMe = () => {
  const { fetcher, fetchingStatus, response } = useFetch<string>();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    const fetcherParams: IFetchParams = {
      url: `${process.env.API_URL}/api/v1/notifyMe/prints`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { name, email }
    };

    fetcher(fetcherParams);
    event.currentTarget.reset();
  };

  return (
    <div className={PrintsNotifyMeStyles.container}>
      <h1 className={PrintsNotifyMeStyles.title}>{printsText.title}</h1>
      <p className={PrintsNotifyMeStyles.description}> {printsText.description}</p>
      <form onSubmit={submitHandler} className={PrintsNotifyMeStyles.form}>
        <span className={PrintsNotifyMeStyles.input}>
          <label htmlFor="">{printsText.form.inputs[0].name}</label>
          <input name="name" type="text" placeholder={printsText.form.inputs[0].placeholder} />
        </span>
        <span className={PrintsNotifyMeStyles.input}>
          <label htmlFor="">{printsText.form.inputs[1].name}</label>
          <input name="email" required type="email" placeholder={printsText.form.inputs[1].placeholder} />
        </span>
        {fetchingStatus === 'loading' ? (
          <p>Loading...</p>
        ) : (
          <button className={PrintsNotifyMeStyles.submitButton} type="submit">
            {printsText.form.submit}
          </button>
        )}
      </form>
      {fetchingStatus === 'succeeded' ? <Toast>Congratulations, you will be notify</Toast> : null}
    </div>
  );
};
