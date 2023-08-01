import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'yesNo' })
export class YesNoPipe implements PipeTransform {
    transform(bool: boolean): string {
        return bool ? 'Yes' : 'No';
    }
}
