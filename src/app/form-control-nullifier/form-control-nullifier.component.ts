import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control-nullifier',
  templateUrl: './form-control-nullifier.component.html',
  styleUrls: ['./form-control-nullifier.component.scss']
})
export class FormControlNullifierComponent implements OnInit {

    @Input() formField: FormControl;
    @Input() isEditable            = false;
    @Input() positionAbsolute      = true;
    @Input() positionAbsoluteRight = -70;

    constructor(
        private _el: ElementRef,
        private _renderer: Renderer2
    ) { }

    ngOnInit() {
        if (this.positionAbsolute) {
            const el = this._el.nativeElement;
            this._renderer.setStyle(el, 'position', 'absolute');
            this._renderer.setStyle(el, 'right', this.positionAbsoluteRight + 'px');
            this._renderer.setStyle(el, 'top', '-30px');
        }
    }

    nullify(e: Event) {
        e.stopPropagation();
        if (this.isEditable) {
            this.formField.setValue(null);
        }
    }
}