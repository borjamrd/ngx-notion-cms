import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="flex flex-col gap-1 items-center">
  <svg
  class="md:h-20 md:w-20 aspect-square h-8 w-8 mx-center"
  version="1.0"
  xmlns="http://www.w3.org/2000/svg"
  width="500.000000pt"
  height="500.000000pt"
  viewBox="0 0 500.000000 500.000000"
  preserveAspectRatio="xMidYMid meet">
  <g
      transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
      fill="currentColor"
      stroke="none">
      <path
          d="M1860 4514 c-766 -57 -1153 -90 -1190 -100 -38 -11 -67 -28 -96 -58
-79 -78 -74 9 -74 -1406 0 -1391 -4 -1312 66 -1438 36 -66 574 -771 633 -830
61 -61 110 -76 241 -74 185 2 2630 150 2690 163 114 24 178 82 199 180 8 34
11 493 11 1455 0 1176 -2 1410 -14 1438 -8 18 -34 50 -59 71 -96 80 -856 608
-926 643 -74 36 -75 37 -210 39 -92 1 -507 -26 -1271 -83z m1404 -165 c50 -18
220 -134 469 -317 60 -45 71 -69 35 -76 -38 -8 -2297 -137 -2383 -136 -109 0
-142 18 -355 187 -140 112 -175 144 -175 164 0 15 9 28 25 36 32 15 2148 173
2251 168 44 -2 100 -13 133 -26z m769 -683 c14 -13 28 -39 32 -57 3 -19 4
-583 3 -1254 l-3 -1220 -23 -32 c-14 -20 -37 -36 -60 -43 -37 -10 -2371 -150
-2510 -150 -85 0 -124 16 -152 63 -19 31 -20 60 -20 1255 0 1341 -3 1273 58
1302 26 12 2340 156 2558 159 83 1 93 -1 117 -23z" />
      <path
          d="M2161 2990 c-172 -76 -315 -141 -318 -144 -6 -6 44 -791 55 -854 7
-44 7 -43 299 547 160 325 288 591 285 590 -4 0 -148 -63 -321 -139z" />
      <path
          d="M2900 3126 c0 -2 131 -268 292 -592 202 -407 293 -581 295 -564 1 14
14 201 28 415 14 215 27 406 29 426 l4 36 -267 116 c-146 64 -292 127 -323
141 -32 14 -58 24 -58 22z" />
      <path
          d="M2685 2659 c-3 -8 -54 -126 -114 -264 l-109 -250 226 -3 c124 -1 227
-1 229 1 3 4 -214 515 -223 526 -2 2 -6 -2 -9 -10z" />
      <path
          d="M2336 1862 c-5 -9 -86 -194 -86 -198 0 -5 431 -234 442 -234 12 0
417 216 432 230 6 6 -8 49 -34 110 l-43 100 -353 0 c-194 0 -355 -4 -358 -8z" />
  </g>
</svg>
<p class="hidden font-semibold bg-gradient-to-r from-red-600 via-violet-400 to-fuchsia-900 md:inline-block text-transparent bg-clip-text">ngx-notion-cms</p>
  </div>

`,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class LogoComponent { }
