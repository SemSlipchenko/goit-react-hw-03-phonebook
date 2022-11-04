import css from '../ContactList/ContactList.module.scss';

const ContactList = ({ contacts, deleteContact }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={css.item} key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button className={css.btn} onClick={() => deleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
