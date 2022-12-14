import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './index';

const renderCard = () => {
    const dataSource = {
        categories: [],
        created_at: '2020-01-05 13:42:24.48275',
        icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
        id: '0',
        updated_at: '2020-01-05 13:42:24.48275',
        url: 'https://api.chucknorris.io/jokes/0',
        value: 'Chuck Norris can divide by zero.',
    };
    render(<Card {...dataSource} />);
};

describe('<Card/>', () => {
    it('should render Card component', () => {
        renderCard();

        const card = screen.getByTestId('Card');
        expect(card).toBeTruthy();
    });
    it('should render Card with h1 open quotation marks', () => {
        renderCard();

        const card = screen.getByTestId('Card');

        expect(card).toContainHTML('<h1>“</h1>');
    });
    it('should render Card with h1 close quotation marks', () => {
        renderCard();

        const card = screen.getByTestId('Card');

        expect(card).toContainHTML('<h1>”</h1>');
    });
    it('should render Card with value', () => {
        renderCard();

        const card = screen.getByTestId('Card');

        expect(card).toContainHTML('<p>Chuck Norris can divide by zero.</p>');
    });
    it('should render card with href link', () => {
        const chuckPhrase = {
            categories: [],
            created_at: '2020-01-05 13:42:20.109373',
            icon_url:
                'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
            id: 'Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9',
            updated_at: '2020-01-05 13:42:20.109373',
            url: 'https://api.chucknorris.io/jokes/Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9',
            value: 'Chuck Norris can divide by zero.',
        };
        render(<Card {...chuckPhrase} />);

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', chuckPhrase.url);
    });
});
