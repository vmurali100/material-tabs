import { NgModule } from "@angular/core";
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatTabsModule, MatTableModule, MatProgressSpinnerModule, MatPaginatorModule, MatSortModule} from '@angular/material';


@NgModule({
    imports:[MatButtonModule, 
            MatCheckboxModule,
            MatInputModule,
            MatTabsModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSortModule  ],
    exports:[MatButtonModule, 
            MatCheckboxModule,
            MatInputModule,
            MatTabsModule,
            MatTableModule,
            MatProgressSpinnerModule,
            MatPaginatorModule,
            MatSortModule]
})
export class MyMaterialModule{

}