import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDePubComponent } from './components/file-de-pub/file-de-pub.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FileDePubComponent],
  exports :  [FileDePubComponent]
})
export class PubliciteModule { }
