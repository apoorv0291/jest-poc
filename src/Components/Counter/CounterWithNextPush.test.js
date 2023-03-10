import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CounterWithNextPush from './CounterWithNextPush';
import Wrapper from './Wrapper';

jest.mock('next/router', () => {
    return {
        useRouter: jest.fn(() => {
            return {
                push: jest.fn(() => {
                    console.log('MOCK PUSHH');
                }),
            };
        }),
    };
});

describe('Test Counter For next push ', () => {
    test('Our own Mock Wrapper was mocked properly and it rendered', async () => {
        const user = userEvent.setup();
        const handleIncrement = jest.fn(() => {
            return 'Kushargra';
        });
        const handleDecrement = jest.fn();
        render(
            <CounterWithNextPush
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
            />
        );
        const pushBtn = screen.getByRole('button', {
            name: /push/i,
        });
        console.log('bhaaa');
        // console.log('bhaaa::', pushBtn);
        expect(pushBtn).toBeInTheDocument();
        await userEvent.click(pushBtn);
    });
});
