import { LocalStorageService } from '../local-storage/local-storage.service';
import { SnackbarService } from '../snackbar/snackbar.service';

import { UserServiceMock } from '../user/user.service.mock';

import { ServiceDocumentationComponent } from './service-documentation.component';

describe(ServiceDocumentationComponent.name, () => {
  describe('General', () => {
    let component: ServiceDocumentationComponent;
    let userService: UserServiceMock;
    let snackbarService: SnackbarService;
    let localStorageService: LocalStorageService;

    beforeEach(() => {
      userService = new UserServiceMock();
      component = new ServiceDocumentationComponent(
        userService as any,
        null,
        null,
        null
      );
    });
  });
});
