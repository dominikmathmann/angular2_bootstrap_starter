import {Pipe, PipeTransform} from 'angular2/core'

@Pipe({
    name: 'timeToHours'
})
export class TimeToHoursPipe implements PipeTransform {
    transform(value: string, args: any[]): any {
        var rst=+value;
        var hours = Math.floor(+rst / (60 * 60 * 1000));
        rst=rst-hours*(60 * 60 * 1000);
        var minutes=Math.floor(+rst / (60 * 60 * 60 * 1000));
        rst=rst-minutes*(60 * 60 * 60 * 1000);
        var seconds=Math.floor(+rst / 1000);
        return (hours<10?"0"+hours:hours) + ":" + (minutes<10?"0"+minutes:minutes) //+ ":" + (seconds<10?"0"+seconds:seconds);
    }
}

@Pipe({
    name: 'deDate'
})
export class GermanDatePipe implements PipeTransform{
    transform(value: string, args: any[]): any {
        return moment(value).format("DD.MM.YYYY")
    }
}

@Pipe({
    name: 'deDateTime'
})
export class GermanDateTimePipe implements PipeTransform{
    transform(value: string, args: any[]): any {
         return moment(value).format("DD.MM.YYYY HH:mm")
    }
}