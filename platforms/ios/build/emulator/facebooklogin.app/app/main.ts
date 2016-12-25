// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import * as tnsOAuthModule from 'nativescript-oauth';

var facebookInitOptions : tnsOAuthModule.ITnsOAuthOptionsFacebook = {
    clientId: '380261268977382',
    clientSecret: 'ce77c8d1c9f691e25467dbb8a734d240',
    scope: ['email']
};

tnsOAuthModule.initFacebook(facebookInitOptions);

import { AppModule } from "./app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);
