import React from 'react';

import PrintsNotifyMeStyles from './PrintsNotifyMe.module.css';

import printsText from 'domain/texts/waitLists/printsLists/prints.json';

export const PrintsNotifyMe = () => {
  return (
    <div className={PrintsNotifyMeStyles.container}>
      <h1 className={PrintsNotifyMeStyles.title}>{printsText.title}</h1>
      <p className={PrintsNotifyMeStyles.description}> {printsText.description}</p>
      <form className={PrintsNotifyMeStyles.form}>
        <span className={PrintsNotifyMeStyles.input}>
          <label htmlFor="">{printsText.form.inputs[0].name}</label>
          <input type="text" placeholder={printsText.form.inputs[0].placeholder} />
        </span>
        <span className={PrintsNotifyMeStyles.input}>
          <label htmlFor="">{printsText.form.inputs[1].name}</label>
          <input type="email" placeholder={printsText.form.inputs[1].placeholder} />
        </span>
      </form>
    </div>
  );
};
