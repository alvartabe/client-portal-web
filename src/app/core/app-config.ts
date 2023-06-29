
export interface AppConfig {
  logging: {
      minimumLevel: string;
  };

  api: {
      url: string;
  };

  authorization: {
      authority: string;
      configId: string;
      redirectUrl: string;
      postLogoutRedirectUri: string;
      clientId: string;
      scope: string;
      responseType: string;
      silentRenew: boolean;
      useRefreshToken: boolean;
      logLevel: number;
  };
}

