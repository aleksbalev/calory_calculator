import { expect } from '@jest/globals';
import BtnComponent from './btn-component.js';

describe('btnComponent', () => {
    let component;
    let formSubmitBtn;
    let resetBtn;

    beforeEach(() => {
        component = new BtnComponent();
    })

    it("should not fail", () => {
        
      });

    it('btnComponent should exist', () => {
        expect(component).toBeTruthy();
    })

    it('should return false if one field is filled, and true if no fields are filled', () => {
        let inputs = [
            {value: ''},
            {value: 'value'},
            {value: ''}
        ];
    
        expect(component._isOneFieldFilled(inputs)).toBe(false);

        inputs = [
            {value: ''},
            {value: ''},
            {value: ''}
        ];
    
        expect(component._isOneFieldFilled(inputs)).toBe(true);
    })

    it('should return false if all fields are filled, and true if not', () => {
        let inputs = [
            {value: 'c'},
            {value: 'value'},
            {value: 'c'}
        ];
    
        expect(component._isAllFieldsFilled(inputs)).toBe(false);

        inputs = [
            {value: 's'},
            {value: 's'},
            {value: ''}
        ];
    
        expect(component._isAllFieldsFilled(inputs)).toBe(true);
    })
})
