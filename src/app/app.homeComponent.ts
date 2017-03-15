import {Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
	selector:'home',
	template:`<h2>Home Section</h2>
	 <form [formGroup]="myForm" novalidate (ngSubmit)="save(myForm.valid)">
    <div class="form-group">
      <label for="">Name</label>
      <input type="text" class="form-control" formControlName="name">
      <small [hidden]="myForm.controls.name.valid || (myForm.controls.name.pristine && !submitted)" class="text-danger">
            Name is required (minimum 5 characters).
          </small>
      <!--<pre class="margin-20">{{ myForm.controls.name.errors | json }}</pre>-->
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
    <button type="button" class="btn btn-default" (click)="back()">Back</button>
	</form>
	`,
})
export class HomeComponent
{
	
	public myForm: FormGroup;
	public submitted: boolean=false;
	public name: string;
	constructor(private _fb: FormBuilder,private router: Router) {
		this.myForm = this._fb.group({
			name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
			
		});
	 }
	 back()
	 {
	 	if(this.submitted==false)
	 	{
			  alert("Your data hasn’t saved.Are you sure, to leave this? ");
	 	}else
	 	{
	 		let link=['/about']
			  this.router.navigate(link);
	 	} 
	 }
	save(isValid: boolean) {
		this.submitted = true;
		console.log("Is:"+isValid);
	}
}	