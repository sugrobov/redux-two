import { nanoid } from '@reduxjs/toolkit';
import { http, HttpResponse } from 'msw';

export const handlers = [

    http.get('https://example.com/user', () => {

        return HttpResponse.json([
            {
                id: nanoid(),
                title: 'John',
                image: 'https://via.placeholder.com/150',
                price: '100',
                description: 'some text 1',
                published: true
            },
            {
                id: nanoid(),
                title: 'John',
                image: 'https://via.placeholder.com/150',
                price: '150',
                description: 'some text 2',
                published: true
            },
            {
                id: nanoid(),
                title: 'John',
                image: 'https://via.placeholder.com/150',
                price: '155',
                description: 'some text 3',
                published: true
            }
        ])
    }),
]