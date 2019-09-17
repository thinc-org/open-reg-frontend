import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { NzModalService, NzButtonType } from 'ng-zorro-antd';

@Injectable({
  providedIn: CoreModule
})
export class ConfirmModalService {
  constructor(private modalService: NzModalService) {}

  showConfirm({
    title,
    content,
    okText = 'Confirm',
    okType = 'primary',
    cancelText = 'Cancel',
    onOk,
    onCancel = () => {}
  }: {
    title: string;
    content: string;
    okText?: string;
    okType?: NzButtonType;
    cancelText?: string;
    onOk: () => void;
    onCancel?: () => void;
  }) {
    this.modalService.confirm({
      nzTitle: title,
      nzContent: content,
      nzOkText: okText,
      nzOkType: okType,
      nzOnOk: onOk,
      nzCancelText: cancelText,
      nzOnCancel: onCancel
    });
  }
}
