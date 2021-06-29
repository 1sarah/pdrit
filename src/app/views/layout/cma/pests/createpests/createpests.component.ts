import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild } from '@angular/core';

import { from, Subscription } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomerModel } from '../../../../../entities/customer-model';
import { StewardService } from '../../../../../shared/services/steward/steward.service';
import { Notify } from '../../../../../shared/class/notify';
import { Observable } from 'rxjs';
// sanitize the base64string

import { NumericValueType, ReactiveFormConfig, RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-createpests',
  templateUrl: './createpests.component.html',
  styleUrls: ['./createpests.component.css']
})
export class CreatepestsComponent implements OnInit, OnDestroy {
  
  model: CustomerModel;
  subscription: Subscription;
  customer: FormGroup;
  customerModel:FormGroup;
  isUpdate: boolean;
  isReadOnly = false;
  disabled = false;
  isView = false;
  clients:any;
  client_id:any;
  
  constructor(
    private _formBuilder: FormBuilder,
    private stewardService: StewardService<any, any>,
    private notify: Notify,
    protected router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
    this.model = new CustomerModel();
    this.subscription = new Subscription();
    }

  ngOnInit(): void {
 
    this.customerModel = this.fb.group({
     

      causes: ['',Validators.required],
      description: ['',Validators.required],
      type: ['Pest',Validators.required],
      name: ['',Validators.required],
      prevention: ['',Validators.required],
      signSymptoms: ['',Validators.required],
     
    })
  }

  onCreateForm() {
    
    this.stewardService.post('api/v1/pests-and-diseases/create', this.customerModel.value).subscribe((response:any) => {

      if (response.message === "The pest has been added successfully") {
        this.notify.showSuccess(response.message);
        this.router.navigate(['home/cma-management/users']);
      } else {
        this.notify.showWarning(response.data.message);
      }
    }, error => {
      this.notify.showWarning(error.error.message);
    });
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
