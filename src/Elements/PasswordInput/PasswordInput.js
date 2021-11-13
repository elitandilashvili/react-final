import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MIN_PASSWORD_VALUE } from '../../contacts/Validation';
import { TEST_IDS } from '../../contacts/Testids';

export function PasswordInput({ name }) {
  const [value, setValue] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (value && value.length < MIN_PASSWORD_VALUE) {
      setHasError(true);
    } else if (value && value.length > MIN_PASSWORD_VALUE) {
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
        type="password"
        placeholder="Password"
        name={name}
        value={value}
        autoComplete="new-password"
        onChange={({ target }) => setValue(target.value)}
        required
        data-testid={TEST_IDS.passwordInput.inputElement}
      />
      <span className="icon is-small is-left">
        <i className="fas fa-lock"></i>
      </span>

      {!hasError && value && (
        <span
          className="icon is-small is-right"
          data-testid={TEST_IDS.passwordInput.success}
        >
          <i className="fas fa-check"></i>
        </span>
      )}

      {hasError && value && (
        <span
          className="icon is-small is-right"
          data-testid={TEST_IDS.passwordInput.hasError}
        >
          <i className="fas fa-exclamation-triangle" />
        </span>
      )}
    </p>
  );
}

PasswordInput.defaultProps = {
  name: 'password',
};

PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
};
