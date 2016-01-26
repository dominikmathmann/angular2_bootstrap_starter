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

    closeMenue(e: any) {
        e.preventDefault();
        jQuery("#sidebar-wrapper").toggleClass("active");
    }

    toggleMenue(e: any) {
        e.preventDefault();
        jQuery("#sidebar-wrapper").toggleClass("active");
    }


    currentMonth:any;
    lastMonth:any;
    
    ngOnInit () {
        var format:string="DD.MM.YYYY"
        var now = moment();
        
        var from = moment(now.format(format), format);
        var to = from.clone();
        to.add(1, "months");
        

        var urlDateFormat="DD-MM-YYYY";
        this.currentMonth= {
            from: moment(from).format(urlDateFormat),
            to: moment(to).format(urlDateFormat),
            project: 'all'
        }
        
        from.add(-1, "months");
        to.add(-1, "months");
        
        this.lastMonth= {
            from: moment(from).format(urlDateFormat),
            to: moment(to).format(urlDateFormat),
            project: 'all'
        }
        
        var sideMenue:any=$('#side-menu');
        sideMenue.metisMenu();
        
    }
}
