import { NgModule } from '@angular/core';
import { RequestClaimsComponent } from './request-claims/request-claims';
import { ClaimsTabComponent } from './claims-tab/claims-tab';
import { HistoryTabComponent } from './history-tab/history-tab';
@NgModule({
	declarations: [RequestClaimsComponent,
    ClaimsTabComponent,
    HistoryTabComponent],
	imports: [],
	exports: [RequestClaimsComponent,
    ClaimsTabComponent,
    HistoryTabComponent]
})
export class ComponentsModule {}
