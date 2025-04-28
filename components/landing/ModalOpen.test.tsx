import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CTASection from './CTASection';

describe('CTA Modal', () => {
  it('opens and closes the rates modal', async () => {
    render(<CTASection />);
    const openButton = screen.getByRole('button', { name: /voir les tarifs/i });
    userEvent.click(openButton);
    expect(await screen.findByTitle(/tarifs/i)).toBeInTheDocument();
    const closeButton = screen.getByLabelText(/close/i);
    userEvent.click(closeButton);
    await waitFor(() => {
      expect(screen.queryByTitle(/tarifs/i)).not.toBeInTheDocument();
    });
  });
});
