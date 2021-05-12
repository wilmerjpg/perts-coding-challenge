import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import { Done, Close } from '@material-ui/icons';
import './styles.css';

const Toggle = props => {
  const { isChecked, handleChange } = props;

  const label = isChecked ? 'Manager' : 'Member';

  return (
    <div className="switch">

      <Switch
        className={`${isChecked ? 'switch-checked' : 'switch-unchecked'}`}
        checked={isChecked}
        offColor="#ffffff"
        onColor="#00afee"
        offHandleColor="#4f4f4f"
        onHandleColor="#ffffff"
        handleDiameter={20}
        height={30}
        width={50}
        borderRadius={35}
        onChange={handleChange}
        checkedIcon={<Done className="switch-icon-checked" />}
        uncheckedIcon={<Close className="switch-icon-unchecked" />}
      />

      <p>{label}</p>

    </div>
  );
};

Toggle.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Toggle;
