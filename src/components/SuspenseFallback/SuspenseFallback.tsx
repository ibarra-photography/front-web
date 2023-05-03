import SuspenseStyles from './SuspenseFallback.module.css';

export const SuspenseFallback = () => {
  return <span className={SuspenseStyles.loader}></span>;
};
