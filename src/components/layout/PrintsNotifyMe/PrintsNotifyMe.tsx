import React from 'react';

import PrintsNotifyMeStyles from './PrintsNotifyMe.module.css';

export const PrintsNotifyMe = () => {
  return (
    <div className={PrintsNotifyMeStyles.container}>
      <h1 className={PrintsNotifyMeStyles.title}>Prints available soon!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos autem iusto commodi blanditiis, ipsam, ratione placeat voluptatem, rerum ex</p>
      <form className={PrintsNotifyMeStyles.form}>
        <span>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="John" />
        </span>
        <span>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="john@example.com" />
        </span>
      </form>
    </div>
  );
};
