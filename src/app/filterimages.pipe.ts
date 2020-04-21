import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterimages'
})
export class FilterImagesPipes implements PipeTransform {
  transform(items: any[], selectedType: string): any {
    if (selectedType === 'all') {
      return items;
    } else {
      return items.filter(item => {
        return item.type === selectedType;
      });
    }
  }

}
