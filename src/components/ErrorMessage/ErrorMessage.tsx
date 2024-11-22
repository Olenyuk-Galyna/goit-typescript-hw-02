import css from "./ErrorMessage.module.css";

function ErrorMessage() {
  return (
    <div>
      <p className={css.errorMessage}>Please try reloading this page!</p>
    </div>
  );
}

export default ErrorMessage;
