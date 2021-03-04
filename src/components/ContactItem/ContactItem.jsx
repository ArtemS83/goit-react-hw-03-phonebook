import PropTypes from 'prop-types';
import Button from '../Button';
import { MdPhoneAndroid } from 'react-icons/md';
import style from './ContactItem.module.scss';

const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <li className={style.item}>
      <MdPhoneAndroid />
      <span className={style.name}>{name}:</span>
      <span className={style.number}>{number}</span>
      <Button title="Delete" id={id} onDelete={onDelete} />
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
