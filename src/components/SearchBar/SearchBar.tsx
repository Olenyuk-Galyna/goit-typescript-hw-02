import { FormEvent } from "react";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

type SearchBarProps = { onSubmit: (value: string) => void };
const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElements = event.currentTarget
      .elements as HTMLFormControlsCollection;
    const value = (formElements.namedItem("search") as HTMLInputElement).value;
    if (!value) {
      toast.error("Поле немає бути порожнє!");
      return;
    }
    onSubmit(value);
  };

  return (
    <div>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            name="search"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            Search
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
