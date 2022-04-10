import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForms:FormGroup

  // ngOnInit(){
  //   this.signupForms = new FormGroup({
  //     'username':new FormControl(null, Validators.required),
  //     'email': new FormControl(null,[Validators.required, Validators.email]),
  //     'gender': new FormControl('male')
  //   })
  // }

  ngOnInit(){
    this.signupForms = new FormGroup({
      'userdata': new FormGroup({
        'username':new FormControl(null, Validators.required),
        'email': new FormControl(null,[Validators.required, Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]) // holds an array of controls
    })
  }

  onSubmit(){
    console.log(this.signupForms)
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    // This part actually is a FormArray, so something enclosed in these outer parenthesis now is treated as FormArray
    // so now i can push a new control on this array
    (<FormArray>this.signupForms.get('hobbies')).push(control)
  }
}
