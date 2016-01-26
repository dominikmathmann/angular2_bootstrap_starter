import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    templateUrl: 'app/components/home/home.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent {
    from = "AngularJS";
}

