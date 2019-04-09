import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroTeamSelectorRoutingModule } from './hero-team-selector-routing.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HeroTeamSelectorRoutingModule, HttpClientModule],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  providers: [...fromServices.services]
})
export class HeroTeamSelectorModule {}
