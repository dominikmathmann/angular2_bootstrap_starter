import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {HomeComponent} from './components/home/homeComponent'

@Component({
    selector: 'app',
    templateUrl: 'app/template.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { name: 'Home', path: '/home', useAsDefault: true, component: HomeComponent },
])
export class AppComponent {

    ngOnInit () {       
        var sideMenue:any=$('#side-menu');
        sideMenue.metisMenu();
        
    }
}
