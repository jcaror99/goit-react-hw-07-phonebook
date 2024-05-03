import css from './FilterContact.module.css';

const FilterContact = props => {
  const { filterChange } = props;

  return (
    <div className={css.filterContact}>
      <span>Find contacts by name</span>
      <input type="text" className={css.filterInput} onChange={filterChange} />
    </div>
  );
};

export default FilterContact;
