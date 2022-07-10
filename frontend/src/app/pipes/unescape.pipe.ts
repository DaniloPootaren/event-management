import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unescape'
})
export class UnescapePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const doc = new DOMParser().parseFromString(value as string, 'text/html');
    return unescape(value as string);
  }

}

