import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import SimpsonsQuote from './SimpsonsQuote';
import userEvent from '@testing-library/user-event';

const server = setupServer(
    rest.get(
        'https://thesimpsonsquoteapi.glitch.me/quotes',
        (req, res, ctx) => {
            return res(
                ctx.json([
                    {
                        character: 'Mayor Quimby',
                        image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMayorQuimby.png?1497627527799',
                        quote: `Can't we have one meeting that doesn't end with us digging up a corpse?`,
                    }
                ])
            );
        }
    )
);

describe('Simpsons Quote Page', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('fetches a random simpsons quote on button click', async () => {
        render(<SimpsonsQuote />);

        const button = screen.getByRole('button');
        userEvent.click(button);

        return waitFor(() => {
            screen.getByText('Mayor Quimby');
            screen.getByText(`Can't we have one meeting that doesn't end with us digging up a corpse?`);
        });
    });
});