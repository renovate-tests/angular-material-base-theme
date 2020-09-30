import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { NotificationService } from './shared/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'theming-material-components';

  constructor(private dialog: MatDialog, private notification: NotificationService) {}

  openDialog(themeColor: 'primary' | 'accent' | 'warn'): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-dialog',
      data: {
        themeColor,
      },
    });
  }

  openNotificationDefault(): void {
    this.notification.default('🐮標準の通知');
  }

  openNotificationInfo(): void {
    this.notification.info('ℹ情報の通知');
  }

  openNotificationSuccess(): void {
    this.notification.success('✔完了の通知');
  }

  openNotificationWarn(): void {
    this.notification.warn('❗警告の通知');
  }

  openNotificationError(): void {
    this.notification.error('💢エラーの通知');
  }
}