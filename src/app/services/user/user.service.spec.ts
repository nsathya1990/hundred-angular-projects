import { User } from './user.model';

import { UserService } from './user.service';

import { HttpClientMock } from './user.service.mock';

describe(UserService.name, () => {
  let service: UserService;

  it('should exist', () => {
    let http = new HttpClientMock();
    service = new UserService(http as any);
    expect(service).toBeDefined();
  });

  describe('General', () => {
    let service: UserService;
    let http: HttpClientMock;

    beforeEach(() => {
      http = new HttpClientMock();
      service = new UserService(http as any);
    });

    describe('getUserById', () => {
      it('hits correct route with id', async () => {
        /** arrange */
        const id = 5;
        const correctUrl = `http://jsonplaceholder.typicode.com/users/${id}`;
        http.lastUrl = null;
        /** act */
        await service.getUserById(id).toPromise();
        /** assert */
        expect(http.lastUrl).toBe(correctUrl);
      });

      it('is a GET call', async () => {
        /** arrange */
        http.lastHttpMethod = null;
        /** act */
        await service.getUserById(5).toPromise();
        /** assert */
        expect(http.lastHttpMethod).toBe('GET');
      });

      it('returns a User', async () => {
        /** arrange */
        const name = 'Sathya';
        http.response = { name };
        /** act */
        const result = await service.getUserById(5).toPromise();
        /** assert */
        expect(result).toBeInstanceOf(User);
        expect(result.name).toBe(name);
      });
    });
  });
});
