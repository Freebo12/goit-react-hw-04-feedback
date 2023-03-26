import PropTypes from 'prop-types';
import { AlertMessage } from './Notification.styled';

export const Notification = ({ message }) => {
  return <AlertMessage>{message}</AlertMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
