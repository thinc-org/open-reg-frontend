import { FormControl } from '@angular/forms';

export class CustomValidators {
  static requiredFileType(type: string) {
    return (control: FormControl) => {
      const file = control.value;
      console.log(control, 'control');
      if (file) {
        const extension = file.split('.')[1].toLowerCase();
        if (type.toLowerCase() !== extension) {
          return {
            requiredFileType: true,
          };
        }
        return null;
      }
      return null;
    };
  }
}
