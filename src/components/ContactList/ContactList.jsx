import DeleteContact from '../DeleteContact/DeleteContact.jsx';
import css from './ContactList.module.css';

const ContactList = props => {
  const { contacts, filter, deleteContacts } = props;
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section>
      <div>
        <ul>
          {filterContacts.map(element => (
            <li key={element.id}>
              {element.name}: {element.number}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className={css.listDeleteContact}>
          {filterContacts.map(element => (
            <li key={element.id}>
              <DeleteContact
                contactName={element.name}
                deleteContacts={deleteContacts}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactList;
