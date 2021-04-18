import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(value: string[], isAscending = true): string[] {
    if (!value) {
      return value;
    }

    if (!Array.isArray(value)) {
      throw new Error('Sort by Pipe requires an Array.');
    }

    return value.sort((a, b) => {
      const upperCased1 = a.toUpperCase();
      const upperCased2 = b.toUpperCase();

      if (upperCased1 < upperCased2) {
        return isAscending ? -1 : 1;
      }
      if (upperCased1 > upperCased2) {
        return isAscending ? 1 : -1;
      }
      return 0;
    });
  }
}
