import { useRouter } from 'next/router';
import { FormEvent } from 'react';

export default function InputField() {
  const router = useRouter();
  const { search = '' } = router.query;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const search = formData.get('search');

    router.push(`/?search=${search}`);
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        placeholder="Enter a name..."
        className="input__box"
        defaultValue={search}
      />
      <button className="input_submit" type="submit">
        Search
      </button>
    </form>
  );
}
