import React from 'react';
import ContactListItem from 'components/ContactListItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import PropTypes from 'prop-types';
import * as contactsOperations from 'redux/contacts/contactsOperations';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  // const value = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  // const getFilteredNames = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(value)
  //   );
  // };

  // let searchContact = value === '' ? contacts : getFilteredNames();

  return (
    <div>
      {contacts.length > 0 &&
        contacts.map(({ id, phone, name }) => {
          return (
            <ContactListItem key={id} id={id} name={name} number={phone} />
          );
        })}
    </div>
  );
};

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactList;
