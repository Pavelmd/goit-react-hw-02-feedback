import css from './StyleContainer.module.css';

export const App = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};
