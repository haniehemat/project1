import { Routes } from '@angular/router';
import { Mainpage } from './mainpage/mainpage';
import { Aboutme } from './aboutme/aboutme';
import { Education } from './education/education';
import { Skills } from './skills/skills';
import { NotFoundpage } from './not-foundpage/not-foundpage';
import { Informationpage } from './informationpage/informationpage';

export const routes: Routes = [
    { path: 'main', component: Mainpage },
    { path: 'about', component: Aboutme },
    { path: 'education', component: Education },
    { path: 'skills', component: Skills },
    { path: 'NotFoundpage', component: NotFoundpage },
    { path: 'information', component: Informationpage },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: '**', redirectTo: '/NotFoundpage' }

];
