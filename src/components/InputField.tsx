interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ search, setSearch, handleAdd }) => {
  return (
    <form className="input" onSubmit={(e) => handleAdd(e)}>
      <input
        type="input"
        value={search}
        placeholder="Enter a name..."
        className="input__box"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Search
      </button>
    </form>
  );
};

export default InputField;
