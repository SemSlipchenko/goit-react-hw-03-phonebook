import React from 'react';
import { nanoid } from 'nanoid';
import css from '../ContactForm/ContactForm.module.scss';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid(3);
  numberId = nanoid(3);

  onFromSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.reset();
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <form className={css.form} onSubmit={this.onFromSubmit}>
        <label htmlFor={this.nameId}>Name</label>
        <input
          id={this.nameId}
          value={this.state.name}
          onChange={this.onInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={this.numberId}>Number</label>
        <input
          id={this.numberId}
          value={this.state.number}
          onChange={this.onInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
