import styles from './Button.module.css';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <button
      className={styles.btn}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
