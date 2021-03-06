import { test } from '@jest/globals';
import { apiProvider } from '../framework';

/**  Тесты для авторизованного пользователя для API с использованием supertest и api провайдера на примере сайта themoviedb.org*/

let authData = {};

beforeEach(async () => {
    authData = await apiProvider().AuthTMDB().usernameAuth();
});

describe('API тесты для https://developers.themoviedb.org, роль - пользователь', () => {
    test('1. Проверить авторизацию путем ввода имени пользователя и пароля', async () => {
        expect(authData.status)
            .toBe(true);
    });

    test('2. Добавить оценку фильму', async () => {
        const r = await apiProvider().MovieTMDB().addRate(authData.sessionId);
        expect(r.status)
            .toBe(201);
    });

    test('3. Удалить оценку фильма', async () => {
        const r = await apiProvider().MovieTMDB().deleteRate(authData.sessionId);
        expect(r.status)
            .toBe(200);
    });

    test('4. Добавить фильм в избранное', async () => {
        const r = await apiProvider().AccountTMDB().addToFavorite(authData.sessionId,authData.accountId);
        expect(r.status)
            .toBe(201);
    });
});
