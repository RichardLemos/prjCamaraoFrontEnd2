import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { desenvolvedoresPage } from './desenvolvedores';

@NgModule({
  declarations: [
    desenvolvedoresPage,
  ],
  imports: [
    IonicPageModule.forChild(desenvolvedoresPage),
  ],
})
export class desenvolvedoresPageModule {}
