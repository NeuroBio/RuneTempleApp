import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    children: [
      { path: 'RuneTemple',
        loadChildren: () =>
          import('./rune-temple/rune-temple.module')
            .then(m => m.RuneTempleModule)
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
