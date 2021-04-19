import { Observable } from 'rxjs';

import { User } from './user.model';

export abstract class AUserService {
  abstract getUserById(id: number): Observable<User>;
}
