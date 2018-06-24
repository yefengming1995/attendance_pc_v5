import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudentComponent} from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';
import {DepartmentComponent} from './department/department.component';
import {StudenteditComponent} from './student/studentedit/studentedit.component';
import {RoleComponent} from "./role/role.component";
import {RoleeditComponent} from "./role/roleedit/roleedit.component";
import { UsermessageComponent } from './usermessage/usermessage.component';
import { UsereditComponent } from './usermessage/useredit/useredit.component';
import {LoginComponent} from "./login/login.component";
import {TestComponent} from "./test/test.component";
import { Test1Component } from './test1/test1.component';
import {TeachingarrangeComponent} from "./teachingarrange/teachingarrange.component";
import {TeachingeditComponent} from "./teachingarrange/teachingedit/teachingedit.component";
import {TeachereditComponent} from "./teacher/teacheredit/teacheredit.component";
import {Code404Component} from "./code404/code404.component";
import {ParameterComponent} from "./parameter/parameter.component";
import {HistoryrecordComponent} from "./historyrecord/historyrecord.component";
import {RankinglistComponent} from "./rankinglist/rankinglist.component";
import {AskforleaveComponent} from "./askforleave/askforleave.component";
import {PermissionComponent} from "./permission/permission.component";
import {MajorComponent} from "./major/major.component";
import {MajoreditComponent} from "./major/majoredit/majoredit.component";
import {DepartmenteditComponent} from "./department/departmentedit/departmentedit.component";
import {TeachingdetailComponent} from "./teachingarrange/teachingdetail/teachingdetail.component";
import {PermdetailComponent} from "./permission/permdetail/permdetail.component";
import {CourseComponent} from "./course/course.component";
import {CourseeditComponent} from "./course/courseedit/courseedit.component";
import {CoursedetailComponent} from "./course/coursedetail/coursedetail.component";



const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'test',component:TestComponent,
      children:[
        {path: 'welcome', component: HomeComponent},
        {path: 'student', component: StudentComponent},
        {path: 'student/:id', component: StudenteditComponent},
        {path: 'role', component: RoleComponent},
        {path: 'role/:id', component: RoleeditComponent},
        {path: 'user', component: UsermessageComponent},
        {path: 'user/:id', component: UsereditComponent},
        {path: 'major', component: MajorComponent},
        {path: 'major/:id', component: MajoreditComponent},
        {path: 'teacher', component: TeacherComponent},
        {path: 'teacher/:id', component: TeachereditComponent},
        {path: 'course', component: CourseComponent},
        {path: 'course/:id', component: CourseeditComponent},
        {path: 'coursedetail/:id', component: CoursedetailComponent},
        {path: 'department', component: DepartmentComponent},
        {path: 'department/:id', component: DepartmenteditComponent},
        {path: 'teachingarrange', component: TeachingarrangeComponent},
        {path: 'teachingarrange/:id', component: TeachingeditComponent},
        {path: 'teachingdetail/:id', component: TeachingdetailComponent},
        {path: 'permission', component: PermissionComponent},
        {path: 'permdetail/:id', component: PermdetailComponent},
        {path: 'parameter',component:ParameterComponent},
        {path: 'historyrecord',component:HistoryrecordComponent},
        {path: 'rankinglist',component:RankinglistComponent},
        {path: 'permission',component:PermissionComponent},
        {path: 'askforleave',component:AskforleaveComponent},
        {path: 'test1', component: Test1Component},
        {path:'**',component:Code404Component}
    ]},
  {path:'**',component:Code404Component}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
