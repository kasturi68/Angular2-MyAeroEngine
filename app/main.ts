import {bootstrap}    from 'angular2/platform/browser';
import {AeroEngineApp} from './component.app';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from "angular2/http"; import 'rxjs/Rx';


bootstrap(AeroEngineApp,[ROUTER_PROVIDERS,HTTP_PROVIDERS]);