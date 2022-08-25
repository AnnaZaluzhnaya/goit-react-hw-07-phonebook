import { contactsOperations } from 'redux/contacts';
import { useDispatch } from 'react-redux';
import style from './ContactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, number, name }) => {
  const dispatch = useDispatch();

  const removeClick = () => {
    dispatch(contactsOperations.removeContacts(id));
  };

  return (
    <li key={id} className={style.item}>
      {name}: {number}
      <div>
        <button type="button" className={style.removeBtn} onClick={removeClick}>
          Delete
        </button>
      </div>
    </li>
  );
};

ContactListItem.protoTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactListItem;
