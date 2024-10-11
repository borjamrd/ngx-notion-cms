import { Directive } from '@angular/core';

@Directive({
    standalone: true,
})
export class CopyToClipboardDirective {
    copy(text: string) {

        if (!text) {
            console.error('No text provided to copy or empty element content');
            return;
        }
        navigator.clipboard.writeText(text)
            .catch(err => {
                console.error('Error copying text: ', err);
            });
    }
}
