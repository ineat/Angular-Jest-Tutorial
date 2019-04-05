import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroListItemComponent } from './hero-list-item/hero-list-item.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { TeamComponent } from './team/team.component';
import { EmptyCardComponent } from './empty-card/empty-card.component';

export const components: any[] = [
  HeroListComponent,
  HeroListItemComponent,
  HeroCardComponent,
  EmptyCardComponent,
  TeamComponent
];

export * from './hero-list/hero-list.component';
export * from './hero-list-item/hero-list-item.component';
export * from './hero-card/hero-card.component';
export * from './team/team.component';
export * from './empty-card/empty-card.component';
