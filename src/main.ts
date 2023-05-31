import { Injector, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { XhrFactory } from '@angular/common';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { AppConfig } from './app/core/app-config';
import { APP_CONFIG } from './app/core/app-config.token';

const loadSettings = (urls: string[]): Observable<AppConfig> => {
  class XMLHttpRequestFactory implements XhrFactory {
      constructor() {}
      build(): XMLHttpRequest {
          return new XMLHttpRequest();
      }
  }
  const injector = Injector.create({
      providers: [
          {
              provide: HttpClient,
              useFactory: () => new HttpClient(new HttpXhrBackend(new XMLHttpRequestFactory())),
              deps: [],
          },
      ],
  });

  const httpClient = injector.get(HttpClient);
  return forkJoin(urls.map((url) => httpClient.get(url) as Observable<AppConfig>)).pipe(map((configs: AppConfig[]) => Object.assign({}, ...configs) as AppConfig));
};

const loadSettingsSubscription = loadSettings(environment.configurations).subscribe(
  async (config: AppConfig) => {
      loadSettingsSubscription.unsubscribe();
      if (environment.production === true) {
          enableProdMode();
      }

      // bootstrap
      const extraProviders = [{ provide: APP_CONFIG, useValue: Object.freeze(config) }];

      platformBrowserDynamic(extraProviders)
          .bootstrapModule(AppModule)
          // .then(() => {
          //     if (config?.googleAnalytics?.measurementId) {
          //         addAnalytics(config.googleAnalytics.measurementId);
          //     }
          // })
          .catch(() => {
              document.body.innerHTML = 'Failed to initialize application, please try again.';
          });
  },
  (e) => {
      loadSettingsSubscription.unsubscribe();
      document.body.innerHTML = 'Failed to load application, please try again.';
  }
);
