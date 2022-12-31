import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ClasseComponent } from 'app/classe/classe.component';
import { ClassesComponent } from 'app/classes/classes.component';
import { UsersComponent } from 'app/users/users.component';
import { UploadComponent } from 'app/upload/upload.component';
import { DocumentsComponent } from 'app/documents/documents.component';
import { FilesComponent } from 'app/files/files.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'create-user',    component: UserComponent },
    { path: 'new-classe',     component: ClasseComponent },
    { path: 'classes',        component: ClassesComponent },
    { path: 'upload-file',        component: UploadComponent },
    { path: 'documents',        component: DocumentsComponent },
    { path: 'files',        component: FilesComponent },
    { path: 'users',          component: UsersComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
