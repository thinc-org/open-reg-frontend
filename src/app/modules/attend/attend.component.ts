import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConfirmModalService } from 'src/app/core/services/confirm-modal.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-attend',
  templateUrl: './attend.component.html',
  styleUrls: ['./attend.component.scss'],
})
export class AttendComponent implements OnInit {
  departments$ = new BehaviorSubject<Department[]>([
    {
      id: '1',
      name: 'Janitor 1',
      description: 'lorem ipsum',
    },
    {
      id: '2',
      name: 'Janitor 2',
      description: 'lorem ipsum',
    },
    {
      id: '3',
      name: 'Janitor 3',
      description: 'lorem ipsum',
    },
    {
      id: '4',
      name: 'Janitor 4',
      description: 'lorem ipsum',
    },
  ]);

  loading$ = new BehaviorSubject<boolean>(false);
  constructor(
    private confirmModalService: ConfirmModalService,
    private router: Router
  ) {}

  ngOnInit() {}

  selectDepartment(department: Department) {
    this.confirmModalService.showConfirm({
      title: 'Select Department',
      content: `Are you sure you want to select ${department.name} department?`,
      onOk: () => {
        const extras: NavigationExtras = {
          state: { department },
        };
        this.router.navigate(['attend', 'success'], extras);
      },
    });
  }
}

export interface Department {
  id: string;
  name: string;
  description?: string;
  avatar?: string;
}
