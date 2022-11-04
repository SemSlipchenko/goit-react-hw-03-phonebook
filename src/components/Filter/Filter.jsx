import { nanoid } from 'nanoid';
import css from '../Filter/Filter.module.scss';

const Filter = ({ value, onChange }) => {
  const inputId = nanoid(3);
  return (
    <div className={css.wrapper}>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input id={inputId} type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;
