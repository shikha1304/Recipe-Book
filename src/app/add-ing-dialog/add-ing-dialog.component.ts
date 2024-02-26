import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Recipe } from '../model/recipe';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-add-ing-dialog',
  templateUrl: './add-ing-dialog.component.html',
  styleUrls: ['./add-ing-dialog.component.css']
})
export class AddIngDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Recipe, private dialogRef: MatDialogRef<AddIngDialogComponent>,private fb: FormBuilder, private api: ApiServiceService) { }

  ngOnInit() {
    this.initForm()
  }

  formData!: FormGroup;
  initForm(){
    this.formData = this.fb.group({
      name: ['', Validators.required],
      ingredient : [''],
      quantity: [0, Validators.required],
    })
  }

  onSubmit(){
    if (this.formData.valid) {
      this.data.ingredients.push(this.formData.value);

      this.api.updateCollection(this.data);
      alert('Changes made successfully')
      
    }
  }

  onCancel(){
    this.dialogRef.close([]);
  }

}
