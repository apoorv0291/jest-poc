import { screen, render } from '@testing-library/react';
import Counter from './Counter';
import CounterWithWrapper from './CounterWithWrapper';
import Wrapper from './Wrapper';

jest.mock('@/Components/Counter/Wrapper', () => {
    return jest.fn((props) => {
        return (
            <>
                <h1>YAY its our own mock again module factory, WOW!</h1>
                {props.children}
            </>
        );
    });
});

describe('Test Counter  with MODULE FACTORY ', () => {
    // beforeEach(() => {
    //     jest.mock('@/Components/Counter/Wrapper', () => {
    //         return jest.fn((props) => {
    //             return (
    //                 <>
    //                     <h1>YAY its our own mock again, WOW!</h1>
    //                     {props.children}
    //                 </>
    //             );
    //         });
    //     });
    // });
    test('Our own Mock Wrapper was mocked properly and it rendered', () => {
        const handleIncrement = jest.fn();
        const handleDecrement = jest.fn();
        render(<CounterWithWrapper />);
        const ourOwnMock = screen.getByRole('heading', {
            name: /YAY its our own mock again module factory, WOW!/i,
        });
        console.log('ourOwnMock', ourOwnMock);
        /**
         * As we have rendered mock wrapper, which is a jest mock so we have access to special functions
         */
        expect(ourOwnMock).toBeInTheDocument();
        expect(Wrapper).toHaveBeenCalled();
    });
});
