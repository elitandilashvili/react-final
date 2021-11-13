import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TEST_IDS } from '../../contacts/Testids';
import { EmailInput } from './EmailInput';

describe(' EmailInput', () => {
  it('should render correctly with correct props', () => {
    const testName = 'testName';
    const Component = render(<EmailInput name={testName} />);

    expect(
      Component.getByTestId(TEST_IDS.emailInput.inputElement).getAttribute(
        'name'
      )
    ).toBe(testName);
  });
  it('should render error state', () => {
    const testName = 'testName';
    const Component = render(<EmailInput name={testName} />);
    const inputElement = Component.getByTestId(
      TEST_IDS.emailInput.inputElement
    );
    userEvent.type(inputElement, 'wrong');

    expect(
      Component.getByTestId(TEST_IDS.emailInput.hasError)
    ).toBeInTheDocument();
  });

  it('should render success state', () => {
    const testName = ' testName ';
    const Component = render(<EmailInput name={testName} />);
    const inputElement = Component.getByTestId(
      TEST_IDS.emailInput.inputElement
    );
    userEvent.type(inputElement, 'success@email.com');

    expect(
      Component.getByTestId(TEST_IDS.emailInput.success)
    ).toBeInTheDocument();
  });
});

describe('EmailInput snapshots', () => {
  test('snap 1', () => {
    const testName = 'testName';
    const Component = render(<EmailInput name={testName} />);
    expect(Component).toMatchSnapshot();
  });

  test('snap 2', () => {
    const testName = 'testName';
    const Component = render(<EmailInput name={testName} />);
    const inputElement = Component.getByTestId(
      TEST_IDS.emailInput.inputElement
    );
    userEvent.type(inputElement, 'wrong');

    expect(Component).toMatchSnapshot();
  });

  test('snap 3', () => {
    const testName = 'testName';
    const Component = render(<EmailInput name={testName} />);
    const inputElement = Component.getByTestId(
      TEST_IDS.emailInput.inputElement
    );
    userEvent.type(inputElement, 'success@email.com');
    expect(Component).toMatchSnapshot();
  });
});
