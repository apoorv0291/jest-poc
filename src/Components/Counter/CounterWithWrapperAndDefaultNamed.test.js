import { screen, render } from '@testing-library/react';
import Counter from './Counter';
import CounterWithNamedDefaultWrapper from './CounterWithNamedDefaultWrapper';
import Wrapper from './WrapperWithBothDefaultAndNamedExport';

jest.mock('@/Components/Counter/WrapperWithBothDefaultAndNamedExport', () => {
    return {
        __esModule: true,
        ExtraWrapper: jest.fn((props) => {
            return (
                <div>
                    <h1>This is my wrapper my wrapper again </h1>
                </div>
            );
        }),
        default: jest.fn((props) => {
            return (
                <>
                    <h1>
                        YAY its our own mock again default module factory, WOW!
                    </h1>
                    {props.children}
                </>
            );
        }),
    };
});

describe('Test Counter  with named and default import', () => {
    test('Test name import', () => {
        const handleIncrement = jest.fn();
        const handleDecrement = jest.fn();
        render(
            <CounterWithNamedDefaultWrapper
            // handleDecrement={handleDecrement}
            // handleIncrement={handleIncrement}
            />
        );
        const ourOwnDefaultMock = screen.getByRole('heading', {
            name: /YAY its our own mock again default module factory, WOW!/i,
            exact: false,
        });
        /**
         * As we have rendered mock wrapper, which is a jest mock so we have access to special functions
         */
        expect(ourOwnDefaultMock).toBeInTheDocument();
        expect(Wrapper).toHaveBeenCalled();
    });
});
