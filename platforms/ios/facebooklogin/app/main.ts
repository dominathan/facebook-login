// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { FACEBOOK_CLIENT_ID,FACEBOOK_CLIENT_SECRET} from "./config/facebook"
import { GOOGLE_MAP_API } from './config/google_api';

import * as tnsOAuthModule from 'nativescript-oauth';


var facebookInitOptions : tnsOAuthModule.ITnsOAuthOptionsFacebook = {
    clientId: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    scope: ['email','user_friends','public_profile']
};

import * as platform from "platform";
declare var GMSServices: any;

// before calling .boostrap
if( platform.isIOS ) {
    GMSServices.provideAPIKey(GOOGLE_MAP_API);
}

tnsOAuthModule.initFacebook(facebookInitOptions);

import { AppModule } from "./app.module";


platformNativeScriptDynamic().bootstrapModule(AppModule);
