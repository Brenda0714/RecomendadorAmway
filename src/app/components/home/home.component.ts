import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../../template/footer/footer.component';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';

interface UtagData {
  [key: string]: any;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private utag: any;
  private window: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeUtagData();
  }

  private initializeUtagData(): void {
    // const utagData: UtagData = environment.utagInfo?.startQuestionnaire || {};
    // if (window.utag_data) {
    //   window.utag_data = { ...window.utag_data, ...utagData };
    // } else {
    //   window.utag_data = utagData;
    // }
    // // Se recomienda usar setTimeout solo si es necesario. Alternativamente, puedes manejar esto de otra manera.
    // setTimeout(() => {
    //   if (this.utag && typeof this.utag.view === 'function') {
    //     this.utag.view(window.utag_data);
    //   }
    // }, 500);
  }

  startQuestionnaire(): void {
    this.router.navigate(['start-questionnaire']);
  }
}
