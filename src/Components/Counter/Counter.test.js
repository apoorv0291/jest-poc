import { screen, render } from '@testing-library/react';
import Counter from './Counter';
import CounterWithWrapper from './CounterWithWrapper';
import Wrapper from './Wrapper';

// jest.mock('@/Components/Counter/Wrapper', () => {
//     return jest.fn();
// });

// Method 1

jest.mock('@/Components/Counter/Wrapper');
Wrapper.mockImplementation((props) => props.children);

describe('Test Counter ', () => {
    test('Mock Functions: Increment, decrement', () => {
        const handleIncrement = jest.fn();
        const handleDecrement = jest.fn();
        render(<Counter />);
    });
    test('Mock Wrapper was mocked properly and it rendered', () => {
        const handleIncrement = jest.fn();
        const handleDecrement = jest.fn();
        render(<CounterWithWrapper />);
        const heading = screen.getByRole('heading', {
            name: /Its a wrapper2/i,
        });
        // console.log('heading', heading);
        /**
         * As we have rendered mock wrapper, which is a jest mock so we have access to special functions
         */
        expect(heading).toBeInTheDocument();
        expect(Wrapper).toHaveBeenCalledTimes(1);
    });
});

describe('Test Counter  with a slightly different mocked wrapper', () => {
    beforeEach(() => {
        jest.mock('@/Components/Counter/Wrapper');
        Wrapper.mockImplementation((props) => (
            <>
                <h1>YAY its our own mock mock, WOW!</h1>
                {props.children}
            </>
        ));
    });
    test('Our own Mock Wrapper was mocked properly and it rendered', () => {
        const handleIncrement = jest.fn();
        const handleDecrement = jest.fn();
        render(<CounterWithWrapper />);
        const ourOwnMock = screen.getByRole('heading', {
            name: /YAY its our own mock mock, WOW!/i,
        });
        // console.log('ourOwnMock', ourOwnMock);
        /**
         * As we have rendered mock wrapper, which is a jest mock so we have access to special functions
         */
        expect(ourOwnMock).toBeInTheDocument();
        expect(Wrapper).toHaveBeenCalled();
    });
});
