import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByKey',
})
export class SortByKeyPipe implements PipeTransform {
  transform(
    value: { [key: string]: string }[],
    key: string,
    isAscending = true
  ): { [key: string]: string }[] {
    if (!value) {
      return value;
    }

    if (!Array.isArray(value)) {
      throw new Error('Sort By Key Pipe requires an Array');
    }

    const values = [...value];

    return values.sort((a, b) => {
      const upperCased1 = a[key].toUpperCase();
      const upperCased2 = b[key].toUpperCase();

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
