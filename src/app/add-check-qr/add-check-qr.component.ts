/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-check-qr',
  templateUrl: './add-check-qr.component.html',
  styleUrls: ['./add-check-qr.component.less']
})
export class AddCheckQrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/

import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';

@Component({
    selector: 'app-add-check-qr',
    templateUrl: './add-check-qr.component.html',
    styleUrls: ['./add-check-qr.component.less'],
    encapsulation: ViewEncapsulation.None,
})
export class AddCheckQrComponent implements OnInit {

    @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent;

    ngOnInit() {
        this.qrScannerComponent.getMediaDevices().then(devices => {
            console.log(devices);
            const videoDevices: MediaDeviceInfo[] = [];
            for (const device of devices) {
                if (device.kind.toString() === 'videoinput') {
                    videoDevices.push(device);
                }
            }
            if (videoDevices.length > 0) {
                let choosenDev;
                for (const dev of videoDevices) {
                    if (dev.label.includes('front')) {
                        choosenDev = dev;
                        break;
                    }
                }
                if (choosenDev) {
                    this.qrScannerComponent.chooseCamera.next(choosenDev);
                } else {
                    this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
                }
            }
        });

        this.qrScannerComponent.capturedQr.subscribe(result => {
            console.log(result);
        });
    }
}
