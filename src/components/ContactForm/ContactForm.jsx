import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = props => {
  const { addContacts } = props;

  const handleClick = e => {
    e.preventDefault();
    const inputName = document.querySelector('input[name="name"]');
    const inputTel = document.querySelector('input[name="number"]');
    const addContactForm = document.querySelector(
      'form[name="addContactForm"]'
    );
    addContacts({
      name: inputName.value,
      id: nanoid(),
      number: inputTel.value,
    });
    addContactForm.reset();
  };

  return (
    <div>
      <form name="addContactForm" action="">
        <label htmlFor={nanoid()}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={nanoid()}>
          Number
          <input
            className={css.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.addButton} type="submit" onClick={handleClick}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
