import { NgModule } from "@angular/core"
import { SkeletonTemplateComponent } from './skeleton-template/skeleton-template.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContinentComponent } from './continent/continent.component';
import { EachItemComponent } from './each-item/each-item.component';
import {CommonModule } from "@angular/common";
import { PipeSearch } from '../pipes/search.pipe';
import { CountryComponent } from './country/country.component';
import { BordersComponent } from './borders/borders.component';


@NgModule({
   imports: [
      CommonModule 
   ],
    declarations: [
      SkeletonTemplateComponent,
      ToolbarComponent,
      ContinentComponent,
      CountryComponent,
      PipeSearch,
      EachItemComponent,
      BordersComponent
    ],
    exports: [
      CountryComponent,
      SkeletonTemplateComponent,
      ToolbarComponent,
      ContinentComponent,
      PipeSearch,
      EachItemComponent,
      BordersComponent 
    ]
})

export class ComponentModule{}