import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book a table by filling in the details below.");
    expect(headingElement).toBeInTheDocument();
})