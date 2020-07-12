import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule} from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
    imports: [
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatFormFieldModule,
        MatTabsModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        MatDialogModule,
        MatRippleModule,
        MatToolbarModule,
        MatRadioModule,
    ],
    exports: [
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatFormFieldModule,
        MatTabsModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        MatDialogModule,
        MatRippleModule,
        MatToolbarModule,
        MatRadioModule,
    ]
})
export class MaterialModule {}