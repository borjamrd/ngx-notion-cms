import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'secureResource', standalone: true })
export class SecureResourceUrlPipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer) {}
    transform(value: string) {
        return this.sanitized.bypassSecurityTrustResourceUrl(value);
    }
}
