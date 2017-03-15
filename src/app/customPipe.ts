import { Pipe } from '@angular/core';
@Pipe({
	name: 'filterName'
})

export class CustomPipe {

	public transform(filter): any[] {
		let list: any[] = [];

		for (let i = 0; i < filter.length; i++) {
			
				var obj = { name: filter[i].name.toUpperCase(), hobby: filter[i].hobby.toLowerCase() };
				list.push(obj);
			

		}
		return list;
	}

}