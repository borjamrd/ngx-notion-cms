import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
    name: 'nl2br',
    standalone: true,
})
export class Nl2brPipe implements PipeTransform {
    transform(value: string[]): unknown {
        const formatted = value[0].replace(/\n/g, '<br/>');
        return formatted;
    }
}
