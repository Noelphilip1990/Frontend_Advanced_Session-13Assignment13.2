import { Component } from '@angular/core';
@Component({
    selector: 'modal-demo',
	template: `
	
<div class="container">
  
<div class="container-fluid" >
	<h2>Assignment13.2 (Routes FormExample)</h2>
<div class="row">		
	<div class="col-sm-4"><b><a routerLink="" routerLinkActive="active">HOME</a></b></div><div class="col-sm-4"><b><a routerLink="about" routerLinkActive="active">ABOUT</a></b></div><div class="col-sm-4"><b><a routerLink="contact" routerLinkActive="active">CONTACT</a></b></div><br>
</div>
<div class="row">	
	<div class="col-sm-12">
		<router-outlet></router-outlet>
	</div>
</div>

</div>
</div>
`,
})

export class AppComponent{
	
	

friends: any = [
{ name: "Avnesh", hobby: "Coding"},
{ name: "Kaushik", hobby: "Coding" },
{ name: "Archana", hobby: "Cooking" },
{ name: "Piyush", hobby: "Singing" },
{ name: "Archit", hobby: "Sports" },
{ name: "Hema", hobby: "Gossiping" }
]; 

	constructor()
	{
		
	}
}
