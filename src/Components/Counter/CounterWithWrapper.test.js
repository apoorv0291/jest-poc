import { screen, render } from '@testing-library/react';
import Counter from './Counter';
import CounterWithWrapper from './CounterWithWrapper';

jest.mock('@/Components/Counter/Wrapper', () => {
    return jest.fn((props) => {
        return (
            <>
                <h1>
                    YAY apoorv its our own mock again default module factory,
                    WOW!
                </h1>
                {props.children}
            </>
        );
    });
});

// next -> router.push

describe('Test Counter  with MODULE FACTORY ', () => {
    test('Our own Mock Wrapper was mocked properly and it rendered', () => {
        const handleIncrement = jest.fn(() => {
            return 'Kushargra';
        });
        const handleDecrement = jest.fn();
        render(
            <CounterWithWrapper
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
            />
        );
        const ourOwnMock = screen.getByRole('heading', {
            name: /YAY apoorv its our own mock again default module factory,/i,
            exact: false,
        });
        // console.log('ourOwnMock', ourOwnMock);
        /**
         * As we have rendered mock wrapper, which is a jest mock so we have access to special functions
         */
        expect(ourOwnMock).toBeInTheDocument();
        // expect(Wrapper).toHaveBeenCalled();
    });
});
