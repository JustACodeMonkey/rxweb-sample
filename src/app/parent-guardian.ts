import { email, prop, required } from '@rxweb/reactive-form-validators';
import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export class ParentGuardian {
    @required() isRequired = false;
    @required({
        conditionalExpression: (pg: ParentGuardian) => pg.isRequired === true || pg.lastName || pg.firstName || pg.speaksEnglish
    }) parentType = '';
    @required({
        conditionalExpression: (pg: ParentGuardian) => pg.isRequired === true || pg.parentType || pg.firstName || pg.speaksEnglish
    }) lastName = '';
    @required({
        conditionalExpression: (pg: ParentGuardian) => pg.isRequired === true || pg.parentType || pg.lastName || pg.speaksEnglish
    }) firstName = '';
    @required({
        conditionalExpression: (pg: ParentGuardian) => pg.isRequired === true || pg.parentType || pg.lastName || pg.firstName
    }) speaksEnglish = '';
    @prop() homePhone = '';
    @prop() mobilePhone = '';
    @prop() workPhone = '';
    @prop() workExt = '';
    @required({
        conditionalExpression: (pg: ParentGuardian) => pg.workPhone && pg.workPhone.length === 10
    }) availableAtWork = '';
    @email()
    @required({
        conditionalExpression: (pg: ParentGuardian) => pg.isRequired === true
    })
    email = '';
    @prop() sameAddress = true;
    @required({
        conditionalExpression: (pg: ParentGuardian) => pg.sameAddress !== true
    }) address = '';
}

/**
 * Validator for use with phone numbers
 */
export const atLeastOne = (): ValidatorFn => {
    return (form: FormGroup): ValidationErrors | null => {
        const home   = form.get('homePhone').value;
        const mobile = form.get('mobilePhone').value;
        const work   = form.get('workPhone').value;

        // if any phone number has a value of length 10
        if ((home && home.length === 10) ||
            (mobile && mobile.length === 10) ||
            (work && work.length === 10)) {
            return null;
        } else {
            return {
                atLeastOne: { message: 'At least one valid phone number must be entered' }
            };
        }
    };
};
