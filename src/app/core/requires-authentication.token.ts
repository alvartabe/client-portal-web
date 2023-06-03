import { HttpContextToken } from '@angular/common/http';

export const REQUIRES_AUTHENTICATION = new HttpContextToken<boolean>(() => false);
