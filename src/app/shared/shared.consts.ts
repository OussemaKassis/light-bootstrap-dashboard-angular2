import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [],
})
export class sharedConsts{
    public static API_ENDPOINT=environment.apiURL;
    public static HTTP_AUTH='Bearer';
    public static HTTP_TOKEN='token';
    public static HTTP_APPLICATION='Content-Type';
    public static HTTP_APP_JSON='application/json';
    public static HTTP_MULTI_DATAFORM='multipart/form-data';
    public static FRENSH_LUANGUAGE = 'FR';
    public static ENGLISH_LUANGUAGE = 'EN';
    public static DEUTSCH_LUANGUAGE = 'DE';
}