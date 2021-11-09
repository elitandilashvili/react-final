import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MIN_EMAIL_VALUE } from '../../contacts/Validation';

export function EmailInput({ name }) {
  const [value, setValue] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (value && value.length < MIN_EMAIL_VALUE) {
      setHasError(true);
    } else if (value && value.length > MIN_EMAIL_VALUE) {
      setHasError(false);
    }
  }, [value]);

  const renderClassName = () => {
    let className = 'input ';
    if (hasError && value) {
      className += 'is-danger';
    } else if (!hasError && value) {
      className += 'is-success';
    }

    return className;
  };

  return (
    <p className="control has-icons-left has-icons-right">
      <input
        className={renderClassName()}
        type="email"
        placeholder="Email"
        name={name}
        autoComplete="email"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        required
      />
      <span className="icon is-small is-left">
        <i className="fas fa-envelope"></i>
      </span>

      {!hasError && value && (
        <span className="icon is-small is-right">
          <i className="fas fa-check"></i>
        </span>
      )}

      {hasError && value && (
        <span className="icon is-small is-right">
          <i className="fas fa-exclamation-triangle" />
        </span>
      )}
    </p>
  );
}

EmailInput.defaultProps = {
  name: 'email',
};

EmailInput.propTypes = {
  name: PropTypes.string.isRequired,
};
