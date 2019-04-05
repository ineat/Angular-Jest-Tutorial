import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroTeamSelectorRoutingModule } from './hero-team-selector-routing.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';

@NgModule({
  imports: [CommonModule, HeroTeamSelectorRoutingModule],
  declarations: [...fromContainers.containers, ...fromComponents.components]
})
export class HeroTeamSelectorModule {}
