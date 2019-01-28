declare function require(moduleName: string);
let needsOptionalModule: boolean;

import{optionalModule as Optional} from './optionalModule'

if(needsOptionalModule){
    let loadedModule: typeof Optional = require('./optionalModule');
    let instanceOfModule = new loadedModule();
}