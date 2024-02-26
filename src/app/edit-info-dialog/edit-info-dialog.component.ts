import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Recipe } from '../model/recipe';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-edit-info-dialog',
  templateUrl: './edit-info-dialog.component.html',
  styleUrls: ['./edit-info-dialog.component.css']
})
export class EditInfoDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Recipe, private dialogRef: MatDialogRef<EditInfoDialogComponent>,private fb: FormBuilder, private api: ApiServiceService) { }

  ngOnInit() {
    this.initForm()
  }

  nutriInfo!: FormGroup;
  initForm(){
    this.nutriInfo = this.fb.group({
      calories: ['', Validators.required],
      protein: ['', Validators.required],
      carbohydrates: ['', Validators.required],
      fat: ['', Validators.required],
    })
  }

  onSubmit(){
    if (this.nutriInfo.valid) {
      this.data.nutritional_information = this.nutriInfo.value;

      this.api.updateCollection(this.data);
    }
  }

  onCancel(){
    this.dialogRef.close([]);
  }

}
