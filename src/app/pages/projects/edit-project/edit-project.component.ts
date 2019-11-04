import { Component, OnInit } from '@angular/core';
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
  constructor(private _restService: RestService, private router: Router, private route: ActivatedRoute) { }

  submitForm() {
    console.log(this.project)
    this.project = this.form.value;
    this._restService.patchProject(this.project).subscribe((data: Project) => {
      this.project = data;
      this.router.navigate(['/projects'])
    })
  }

  ngOnInit() {
    this.form = new FormGroup({
      _id: new FormControl(Validators.required),
      name: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      deadline: new FormControl(null, [Validators.required]),
      time: new FormControl(null, [Validators.required]),
      staff: new FormControl(null, [Validators.required]),
      desc: new FormControl(null),
      // pour avoir valeur false si on ne clique pas la checkbox inProgress
      // false à la place de null
      inProgress: new FormControl(false, [Validators.required]),
    })
    // pour avoir liste users existants
    this._restService.getUsers().subscribe((data: User[]) => {
      this.staff = data;
    });
    this.route.data.subscribe(data => {
      this.form.setValue(data.project);
      this.project = data.project
    });
  }

}
