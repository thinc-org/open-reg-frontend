import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/services';
import { ApiService as RawApiService } from 'src/app/core/services/api.service';
import { map, pluck, switchMap } from 'rxjs/operators';
import { saveFile } from 'src/app/core/functions/file';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private apiService: ApiService, private rawApi: RawApiService) {}

  ngOnInit() {}

  export() {
    return this.apiService
      .getFormAll()
      .pipe(
        map(forms =>
          forms.find(form => {
            return form.title === 'ลอยกระทง';
          })
        ),
        pluck('_id'),
        switchMap(id =>
          this.rawApi.getFile(RawApiService.API_BASE_URL + `/export/csv/${id}`)
        )
      )
      .subscribe(res => {
        saveFile(res);
      });
  }
}
