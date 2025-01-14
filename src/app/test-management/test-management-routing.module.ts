import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTestComponent } from './components/create-test/create-test.component';
import { UpdateTestComponent } from './components/update-test/update-test.component';
import { TestListComponent } from './components/test-list/test-list.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { UpdateQuestionComponent } from './components/update-question/update-question.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { TestQuestionsComponent } from './components/test-questions/test-questions.component';
import { AttemptedTestComponent } from './components/attempted-test/attempted-test.component';

const routes: Routes = [
  // {
  //   path:'create-test', component:CreateTestComponent
  // },
  // {
  //   path:'',redirectTo:'create-test',pathMatch:'full'
  // },
  // {
  //   path: 'update-test/:id', component: UpdateTestComponent ,
  // },
  // {
  //   path:'',redirectTo:'update-test',pathMatch:'full'
  // }
  // {
  //   path:'test-list', component:TestListComponent
  // },
  // {
  //   path:'',redirectTo:'test-list',pathMatch:'full'
  // },
  // {
  //   path:'',redirectTo:'test-list',pathMatch:'full'
  // }
  // {
  //   path:'question-list', component:QuestionListComponent
  // },
  // {
  //   path: 'update-question/:id',
  //   component: UpdateQuestionComponent,
  // },
  // {
  //   path:'',redirectTo:'question-list',pathMatch:'full'
  // }
  // { path: 'test-questions/:testId', component: TestQuestionsComponent },
  // { path: 'question-list/:testId', component: QuestionListComponent },
  {
    path:'attempt-test',component:AttemptedTestComponent
  },
  {
    path:'',redirectTo:'attempt-test',pathMatch:'full'
  }
  // {
  //   path:'create-question', component:CreateQuestionComponent
  // },
  // {
  //   path:'',redirectTo:'create-question',pathMatch:'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestManagementRoutingModule { }
