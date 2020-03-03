import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { atLeastOne } from '../parent-guardian';

@Component({
  selector: 'app-parent-info',
  templateUrl: './parent-info.component.html',
  styleUrls: ['./parent-info.component.scss']
})
export class ParentInfoComponent implements OnInit {

    @Input() parentGroup: FormGroup;
    @Input() isEditable  = true;
    @Input() isPrintPage = false;

    radioOptions = [{
      code: 'Y',
      desc: 'Yes'
    },
    {
      code: 'N',
      desc: 'No'
    }];
    bothParents  = '1';
    custodyOptions = [{
      code: '1',
      desc: 'Both'
    }];
    livingOptions  = [{
      code: '1',
      desc: 'Both'
    }];

    labels = {
        custody:        'Legal guardian',
        livingWith:     'Living with',
        fatherDeath:    'Date of father\'s death',
        motherDeath:    'Date of mother\'s death',
        additionalInfo: 'Additional information'
    };

    familyPlaceholder    = 'Additional family information of which the school should be aware. ';
    alternatePlaceholder = 'Alternate communication if required (e.g. hard of hearing, large print, sign language...)';

    maxDate: Date = new Date(); // max date for death as today

    constructor() {}

    ngOnInit() {
        // Add phone number validation for the the 1st parent only
        this.parentGroup.controls.parentGuardian1.setValidators(atLeastOne());
    }

    /**
     * Clear the parent address if sameAddress is true
     * @param formGroup parentGuardian
     */
    clearAddress(formGroup: FormGroup) {
        if (formGroup.get('sameAddress').value === true) {
            formGroup.get('address').setValue(null);
        }
    }
}
