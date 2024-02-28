import styles from './Button.module.css';

const Button = ({
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

export default Button;