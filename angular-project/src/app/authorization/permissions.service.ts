import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AuthJWTService } from 'authentication-jwt';
import { PERMISSIONS_MAP } from './permissions.map';
import { TokenJWT } from 'authentication-jwt/lib/token/token-jwt';

@Injectable()
export class PermissionsService {
    private userRoles: Set<string>;
    constructor(private authJWTService: AuthJWTService) { }

    public checkAuthorization(path: any): Observable<boolean> {
        if (!this.userRoles) {
            this.authJWTService.getToken().subscribe(token => {
                this.userRoles = this.getRoles(token);
                return this.doCheckAuthorization(path);
            });
        }
        return of(this.doCheckAuthorization(path));
    }

    private doCheckAuthorization(path: string[]): boolean {
        if (path.length) {
            const entry = this.findEntry(PERMISSIONS_MAP, path);
            if (entry && entry['permittedRoles'] && this.userRoles.size) {
                return entry.permittedRoles.some(permittedRole => this.userRoles.has(permittedRole));
            }
            return false;
        }
        return false;
    }

    private findEntry(permissions: any, keys: string[], index = 0) {
        const key = keys[index];
        if (permissions[key] && index < keys.length - 1) {
            return this.findEntry(permissions[key], keys, index + 1);
        } else if (permissions[key] && index === keys.length - 1) {
            return permissions[key];
        } else {
            return false;
        }
    }

    private getRoles(tokenJWT: TokenJWT): Set<string> {
        //Hard Code! Get roles from jwt payload.
        let roles = new Set<string>();
        roles.add('ADMIN');
        return roles;
    }
}