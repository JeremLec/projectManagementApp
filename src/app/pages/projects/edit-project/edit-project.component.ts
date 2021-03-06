import { Component, OnInit, Input } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from './../../../models/project.model';
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
  project: Project;
  form: FormGroup;
  staff: User[];
  // startDate = new Date();
  constructor(private _restService: RestService, private router: Router, private route: ActivatedRoute) { }

  // get value from checkbox inProgress de createProject
  @Input('isInProgress') isInProgress: boolean;
  setInProgress() {
    this.isInProgress = !this.isInProgress;
  }

  submitForm() {
    this.project = this.form.value;
    this._restService.patchProject(this.project).subscribe((data: Project) => {
      this.project = data;
      this.router.navigate(['/projects'])
    })
  }

  getErrorMessage(field: string): string {
    const error = {
      required: 'This field is required',
      // was used for validator with regex : estimated time
      // pattern: 'Only numbers'
    }

    let returnValue = '';

    Object.keys(this.form.controls[field].errors).map(key => {
      returnValue += `${error[key]}`
    })

    return returnValue;
  }

  ngOnInit() {
    this.form = new FormGroup({
      _id: new FormControl(Validators.required),
      __v: new FormControl(Validators.required),
      name: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      deadline: new FormControl(null, [Validators.required]),
      time: new FormControl(null, [Validators.required]),
      // was used for validator with regex
      // time: new FormControl(null, Validators.compose([Validators.required, Validators.pattern(/\d+/)])),
      staff: new FormControl(null, [Validators.required]),
      desc: new FormControl(null),
      inProgress: new FormControl(false, [Validators.required]),
    })
    // get list of existing users
    this._restService.getUsers().subscribe((data: User[]) => {
      this.staff = data;
    });

    this.route.data.subscribe(data => {
      this.form.setValue(data.project.project);
      this.project = data.project.project;
    });
  }
}