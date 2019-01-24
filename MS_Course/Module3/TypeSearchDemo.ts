//already in terminal: npm install lodash
import _ from 'lodash';

_.remove

declare namespace cookie {
    export interface Base {
        get: Function;
        set: Function;
    }
}

declare let Cookie: cookie.Base;
Cookie.set()
