import { LocalStorageService } from '../local-storage/local-storage.service';
import { SnackbarService } from '../snackbar/snackbar.service';

import { AUserService } from '../user/a-user.service';

import { UserServiceMock } from '../user/user.service.mock';

import { ServiceDocumentationComponent } from './service-documentation.component';

describe(ServiceDocumentationComponent.name, () => {
  describe('General', () => {
    let component: ServiceDocumentationComponent;
    let userService: AUserService;
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
