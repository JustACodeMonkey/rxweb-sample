import { propObject } from '@rxweb/reactive-form-validators';
import { ParentInfo } from './parent-info';

export class Registration {
  @propObject(ParentInfo) parentInfo: ParentInfo = new ParentInfo();
}
