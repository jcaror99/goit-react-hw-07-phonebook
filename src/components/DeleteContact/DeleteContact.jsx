import css from './DeleteContact.module.css';

const DeleteContact = props => {
  const { contactName, deleteContacts } = props;

  const handleClickDeleteButton = e => {
    deleteContacts(e.target.name);
  };

  return (
    <button
      className={css.deleteButton}
      name={contactName}
      onClick={handleClickDeleteButton}
    >
      Delete
    </button>
  );
};

export default DeleteContact;
