import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent-guardian',
  templateUrl: './parent-guardian.component.html',
  styleUrls: ['./parent-guardian.component.scss']
})
export class ParentGuardianComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

    @Input() parentGroup: FormGroup;
    @Input() index: number;
    @Input() isEditable  = true;
    @Input() isPrintPage = false;
    @Input() isRequired  = false;

    radioOptions = [{
      code: 'Y',
      desc: 'Yes'
    },
    {
      code: 'N',
      desc: 'No'
    }];
    guardianOptions = [{
      code: '1',
      desc: 'Father'
    }];

    labels = {
        parentType:      'Parent type',
        lastName:        'Last name',
        firstName:       'First name',
        speaksEnglish:   'Speaks English',
        homePhone:       'Home phone number',
        mobilePhone:     'Mobile phone number',
        workPhone:       'Work phone number',
        workExt:         'Ext.',
        availableAtWork: 'Available at work',
        email:           'Email address',
        sameAddr:        'Same address as student',
        addr:            'Address'
    };

    private _hack: Subscription;

    constructor() {}

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.isRequired) {
            this.parentGroup.get('isRequired').setValue(changes.isRequired.currentValue);
        }
    }

    ngAfterViewInit() {
        if (!this.isPrintPage) {
            // Since prod builds don't seem to work correctly ...
            // We do this nonesense to get the form to update its validation
            this._hack = this.parentGroup
                .valueChanges
                .subscribe({
                    next: () => {
                      /*
                        this.parentGroup.markAllAsTouched();
                        this.parentGroup.get('parentType').updateValueAndValidity({emitEvent: false});
                        this.parentGroup.get('lastName').updateValueAndValidity({emitEvent: false});
                        this.parentGroup.get('firstName').updateValueAndValidity({emitEvent: false});
                        this.parentGroup.get('speaksEnglish').updateValueAndValidity({emitEvent: false});
                        this.parentGroup.get('availableAtWork').updateValueAndValidity({emitEvent: false});
                      */
                    }
                });
        }
    }

    ngOnDestroy() {
        if (this._hack) {
            this._hack.unsubscribe();
            this._hack = null;
        }
    }

    /**
     * Clear the parent address if sameAddress is true
     */
    clearAddress() {
        if (this.parentGroup.get('sameAddress').value === true) {
            this.parentGroup.get('address').setValue(null);
        }
    }

}