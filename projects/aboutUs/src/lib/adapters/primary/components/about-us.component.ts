import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { QuotesDTO } from '../../../application/ports/secondary/dto/quotes.dto';
import { GETS_ALL_QUOTES_DTO, GetsAllQuotesDtoPort } from '../../../application/ports/secondary/dto/gets-all-quotes.dto-port';

@Component({ selector: 'lib-about-us', templateUrl: './about-us.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class AboutUsComponent {
  quotes$: Observable<QuotesDTO[]> = this._getsAllQuotesDto.getAll();

  constructor(@Inject(GETS_ALL_QUOTES_DTO) private _getsAllQuotesDto: GetsAllQuotesDtoPort) {
  }
}
