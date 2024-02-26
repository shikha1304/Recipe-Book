import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Recipe } from '../model/recipe';
import { AddIngDialogComponent } from '../add-ing-dialog/add-ing-dialog.component';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-add-ins-dialog',
  templateUrl: './add-ins-dialog.component.html',
  styleUrls: ['./add-ins-dialog.component.css']
})
export class AddInsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Recipe, private dialogRef: MatDialogRef<AddIngDialogComponent>,private fb: FormBuilder, private api: ApiServiceService) { }

  ngOnInit() {
    this.initForm()
  }

  formData!: FormGroup;
  initForm(){
    this.formData = this.fb.group({
      instruction: ''
    });
  }
  
  onSubmit(){
    if (this.formData.valid) {
      this.data.instructions.push(this.formData.value.instruction);
      this.api.updateCollection(this.data);
    }
  }

  onCancel(){
    this.dialogRef.close([]);
  }

}
