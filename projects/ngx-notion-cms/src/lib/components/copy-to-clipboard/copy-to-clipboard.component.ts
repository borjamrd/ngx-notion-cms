import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { CopyToClipboardDirective } from '../../directives/copy-to-clipboard';

@Component({
  selector: 'ngx-copy-to-clipboard',
  standalone: true,
  imports: [
    NgIf,
  ],
  providers: [
    CopyToClipboardDirective,
  ],
  templateUrl: './copy-to-clipboard.component.html',
  styleUrl: './copy-to-clipboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopyToClipboardComponent {

  private copyToClipboard = inject(CopyToClipboardDirective);

  public value = input.required<string>();
  public copied = signal(false);

  setCopied() {
    this.copyToClipboard.copy(this.value());
    this.copied.set(true)

    setTimeout(() => {
      this.copied.set(false);
    }, 2000);
  }
}
