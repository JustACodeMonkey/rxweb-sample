import { ParentGuardian } from './parent-guardian';
import { prop, required, propObject } from '@rxweb/reactive-form-validators';

export class ParentInfo {
    @required() custody = '';
    @required() living  = '';
    @propObject(ParentGuardian) parentGuardian1: ParentGuardian = new ParentGuardian();
    @propObject(ParentGuardian) parentGuardian2: ParentGuardian = new ParentGuardian();
    @prop() fathersDeath: Date;
    @prop() mothersDeath: Date;
    @prop() familyInfo = '';
}
