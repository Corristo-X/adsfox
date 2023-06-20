import React from 'react';
import TestApp from './App';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom/extend-expect';


// Mockujemy endpointy API używane przez aplikację
const server = setupServer(
  rest.get('http://localhost:8000/api/channels', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([
      { id: 1, name: 'Test Channel 1', client_count: 10 },
      { id: 2, name: 'Test Channel 2', client_count: 20 },
    ]));
  }),
  rest.get('http://localhost:8000/api/channels/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ id: 1, name: 'Test Channel 1', client_count: 10 }));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('renders app and navigate through routes', async () => {
  const { getAllByText,getByText } = render(<TestApp />);

  // Początkowo powinniśmy być na stronie kanałów
  fireEvent.click(getAllByText('Kanały')[0]);

  // Nawigujemy do wykresu
  fireEvent.click(getByText('Wykres'));
  await waitFor(() => fireEvent.click(getAllByText('Wykres')[1])); // Zakładamy, że komponent ChannelChart wyświetla 'ChannelChart' na stronie

  // Nawigujemy z powrotem do kanałów
  fireEvent.click(getByText('Kanały'));
  await waitFor(() =>  fireEvent.click(getAllByText('Kanały')[1])); // Zakładamy, że komponent ChannelList wyświetla 'ChannelList' na stronie
});
