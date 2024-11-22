import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = { onClick: () => void };
function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <div>
      <button className={css.btn} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
