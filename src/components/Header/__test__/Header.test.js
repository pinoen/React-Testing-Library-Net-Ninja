import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header", () => {
    it('should render same text passed into title prop, todo example', () => {
        render(<Header title="todo" />);
        const h1Element = screen.getByText(/todo/i);
        expect(h1Element).toBeInTheDocument();
    });
})

// it('should render same text passed into title prop', () => {
//     render(
//         <Header
//             title="todo"
//         />
//     );
//     const h1Element = screen.getByRole("heading");
//     expect(h1Element).toBeInTheDocument();
// });

it('should render same text passed into title prop, hello example', () => {
    render(<Header title="hello" />);
    const h1Element = screen.getByRole("heading", { name: /hello/i });
    expect(h1Element).toBeInTheDocument();
});

it('should render same text passed into title prop, emilio example', () => {
    render(<Header title="todo" />);
    const h1Element = screen.getByTitle("emilio");
    expect(h1Element).toBeInTheDocument();
});

it('should render same text passed into title prop, titulo example', () => {
    render(<Header title="todo" />);
    const h2Element = screen.getByTestId("titulo");
    expect(h2Element).toBeInTheDocument();
});

// // WITH FINDBY
it('should render same text passed into title prop with findByText', async () => {
    render(<Header title="todo" />);
    const h1Element = await screen.findByText(/todo/i);
    expect(h1Element).toBeInTheDocument();
});

// // WITH QUERYBY
it('should render same text passed into title prop with queryByText', () => {
    render(<Header title="dogs" />);
    const h1Element = screen.queryByText(/cats/i);
    expect(h1Element).not.toBeInTheDocument()
});

// // WITH GETALLBY
it('should render same text passed into title prop with getAllBy', () => {
    render(<Header title="todo" />);
    const hElements = screen.getAllByRole('heading');
    expect(hElements.length).toBe(3);
});