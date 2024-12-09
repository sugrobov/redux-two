import { nanoid } from '@reduxjs/toolkit';
import { http, HttpResponse } from 'msw';

export const handlers = [

    http.get('https://example.com/user', () => {

        return HttpResponse.json([
            {
                id: nanoid(),
                firstName: 'John',
                lastName: 'Lennon',
            },
            {
                id: nanoid(),
                firstName: 'John',
                lastName: 'Travolta',
            },
            {
                id: nanoid(),
                firstName: 'John',
                lastName: 'Sina',
            }
        ])
    }),
]