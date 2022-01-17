import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  exports: [MatFormFieldModule, MatIconModule, MatInputModule],
})
export class MaterialExampleModule {}
