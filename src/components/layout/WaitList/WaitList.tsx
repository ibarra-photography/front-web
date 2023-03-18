import WaitListStyles from './WaitList.module.css';

export const WaitList = () => {
  return (
    <div className={WaitListStyles.container}>
      <h1>Join the Wait list</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, voluptate. Possimus quis nostrum dolorum qui libero,</p>
      <form className={WaitListStyles.form}>
        <label htmlFor="">E mail</label>
        <input type="email" placeholder="John@example.com" />
        <div className={WaitListStyles.submitContainer}>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};
