import { useState } from 'react';
import css from './SearchBox.module.css';

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchBox({ onSearch }: Props) {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };
  
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      value={value}
      onChange={handleChange}
    />
  );
}
