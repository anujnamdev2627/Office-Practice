import { ApplicationConfig, provideZoneChangeDetection,importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngxs/store';
import { TodoState } from './todo/todo.state';
// import { provideStoragePlugin } from '@ngxs/storage-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore([TodoState]),
    importProvidersFrom(
      NgxsStoragePluginModule.forRoot({
        keys: ['todo'],
      }),
    ),
  ],
};
