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
  selector: 'app-createplants',
  templateUrl: './createplants.component.html',
  styleUrls: ['./createplants.component.css']
})
export class CreateplantsComponent implements OnInit, OnDestroy {
  
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
     

      description: ['',Validators.required],
      image: ['',Validators.required],
      name: ['',Validators.required],
     
    })
  }

  onCreateForm() {
    
    this.stewardService.post('api/v1/plant/create', this.customerModel.value).subscribe((response:any) => {

      if (response.message === "Plant added successfully") {
        this.notify.showSuccess(response.message);
        this.router.navigate(['home/cma-management/plants']);
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
