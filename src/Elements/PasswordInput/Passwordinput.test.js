import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PasswordInput } from './PasswordInput';
import { TEST_IDS } from '../../contacts/Testids';

describe('PasswordInput', () => {
  it('should render correctly with correct props', () => {
    const testPassword = 'testPassword ';
    const Component = render(<PasswordInput name={testPassword} />);

    expect(
      Component.getByTestId(TEST_IDS.passwordInput.inputElement).getAttribute(
        'name'
      )
    ).toBe(testPassword);
  });

  it('should render error state', () => {
    const testPassword = 'testPassword';
    const Component = render(<PasswordInput name={testPassword} />);
    const inputElement = Component.getByTestId(
      TEST_IDS.passwordInput.inputElement
    );
    userEvent.type(inputElement, 'wrong');

    expect(
      Component.getByTestId(TEST_IDS.passwordInput.hasError)
    ).toBeInTheDocument();
  });

  it('should render success state', () => {
    const testPassword = ' testPassword';
    const Component = render(<PasswordInput name={testPassword} />);
    const inputElement = Component.getByTestId(
      TEST_IDS.passwordInput.inputElement
    );
    userEvent.type(inputElement, '123456789');

    expect(
      Component.getByTestId(TEST_IDS.passwordInput.success)
    ).toBeInTheDocument();
  });
});

describe('PasswordInput snapshots', () => {
  test('snap 1', () => {
    const testPassword = 'testPassword ';
    const Component = render(<PasswordInput name={testPassword} />);
    expect(Component).toMatchSnapshot();
  });
});

test('snap 2', () => {
  const testPassword = 'testPassword';
  const Component = render(<PasswordInput name={testPassword} />);
  const inputElement = Component.getByTestId(
    TEST_IDS.passwordInput.inputElement
  );
  userEvent.type(inputElement, 'wrong');

  expect(Component).toMatchSnapshot();
});

test('snap 3', () => {
  const testPassword = 'testPassword';
  const Component = render(<PasswordInput name={testPassword} />);
  const inputElement = Component.getByTestId(
    TEST_IDS.passwordInput.inputElement
  );
  userEvent.type(inputElement, '123456789');
  expect(Component).toMatchSnapshot();
});
