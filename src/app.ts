import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app/appComponent'
import {ROUTER_PROVIDERS} from 'angular2/router'
import {provide} from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http'


let restBaseUrl='http://localhost:8080/project/rest';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide('config.restbaseurl', { useValue: restBaseUrl})
]); 