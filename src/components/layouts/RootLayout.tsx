interface Props {
  dataInput: string;
  setDataInput: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export default function RootLayout({
  dataInput,
  setDataInput,
  handleAdd,
}: Props) {
  // const {dataInput, setDataInput, handleAdd} = React.useContext(SearchContext);
  return (
    <header>
      <form className="input" onSubmit={(e) => handleAdd(e)}>
        <input
          type="input"
          value={dataInput}
          placeholder="Enter a name..."
          className="input__box"
          onChange={(e) => setDataInput(e.target.value)}
        />
        <button className="input_submit" type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
