// import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  it('renders all fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('submits the form with valid data', async () => {
    render(<ContactForm />);
    userEvent.type(screen.getByLabelText(/name/i), 'Test User');
    userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
    userEvent.type(screen.getByLabelText(/message/i), 'Hello!');
    const button = screen.getByRole('button', { name: /send/i });
    expect(button).not.toBeDisabled();
    // Simulate submit (actual submit action is server-side)
    userEvent.click(button);
  });
});
