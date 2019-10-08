import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/core/services/navbar.service';
import { FooterService } from 'src/app/core/services/footer.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {
  constructor(
    private navbarService: NavbarService,
    private footerService: FooterService,
  ) {
    this.navbarService.show();
    this.footerService.show();
  }

  ngOnInit() {}
}
