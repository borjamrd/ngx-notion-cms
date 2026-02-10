import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'secureResource', standalone: true })
export class SecureResourceUrlPipe implements PipeTransform {
    private sanitized = inject(DomSanitizer);

    transform(value: string) {
        return this.sanitized.bypassSecurityTrustResourceUrl(value);
    }
}
