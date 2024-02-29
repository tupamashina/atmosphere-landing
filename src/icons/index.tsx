/* eslint-disable react/jsx-key */

import { Icon, createIconComponent } from './create';

type CreateIconComponentParams = Parameters<typeof createIconComponent>;

const iconsData = {
  //* Custom icons

  Logo: [
    { viewBox: '0 0 1959.266144 273.000000' },
    <g
      transform="translate(-16.471310,285.000000) scale(0.100000,-0.100000)"
      stroke="none"
    >
      <path d="M12277 2843 c-4 -3 -7 -39 -7 -78 l0 -72 -94 -7 c-304 -21 -561 -164 -660 -366 -51 -106 -69 -200 -63 -330 9 -163 60 -288 159 -390 22 -23 38 -43 36 -45 -2 -2 -210 1 -463 5 -253 5 -661 9 -907 10 l-446 0 -41 47 c-155 182 -187 475 -75 702 51 102 162 215 263 265 240 121 532 97 724 -59 l54 -44 47 47 c25 26 46 52 46 58 0 14 -72 73 -143 117 -117 72 -316 115 -472 103 -230 -17 -451 -125 -576 -281 -56 -70 -103 -157 -136 -250 -26 -76 -28 -89 -27 -250 0 -159 2 -175 28 -250 15 -44 43 -107 61 -141 l34 -61 -292 -6 c-364 -9 -677 -9 -677 -1 0 3 9 19 20 34 31 43 75 148 96 225 25 97 25 303 0 400 -74 279 -275 479 -561 556 -119 32 -328 32 -445 0 -285 -79 -485 -274 -561 -547 -30 -104 -32 -295 -5 -399 22 -83 72 -196 116 -260 18 -26 30 -48 28 -49 -1 -2 -190 -11 -418 -20 -228 -9 -450 -19 -492 -22 l-78 -6 0 654 c0 360 -2 657 -4 659 -2 2 -34 2 -70 1 l-65 -4 -117 -201 c-190 -327 -254 -439 -289 -497 -17 -30 -81 -139 -140 -242 -60 -104 -111 -188 -116 -188 -4 0 -10 8 -14 18 -3 9 -37 69 -74 132 -100 169 -176 298 -386 657 l-188 323 -69 0 -68 0 0 -703 0 -704 -188 -12 c-103 -7 -369 -28 -592 -47 -223 -18 -424 -34 -447 -34 l-43 0 0 680 0 680 270 0 270 0 0 73 0 72 -617 -2 -618 -3 0 -67 0 -68 268 -3 267 -2 0 -689 0 -689 -47 -6 c-27 -4 -147 -15 -268 -26 -569 -52 -1514 -158 -2135 -239 -503 -66 -709 -95 -705 -99 2 -2 98 3 212 12 503 39 1685 120 2055 141 141 8 400 23 575 35 175 11 464 27 643 35 179 9 438 22 575 30 234 14 1406 62 2060 85 353 12 849 26 1545 42 716 17 3716 17 4435 0 1745 -41 2951 -89 4565 -182 529 -30 1041 -61 1160 -70 74 -6 297 -21 495 -35 198 -14 545 -38 770 -55 592 -43 598 -44 340 -5 -635 94 -2047 260 -2605 305 -74 6 -223 20 -330 30 -107 10 -253 24 -325 30 -71 5 -151 13 -177 16 l-48 6 0 208 0 208 283 4 c249 4 291 7 360 26 255 70 397 249 397 501 0 88 -32 212 -70 271 -47 74 -132 147 -212 185 -124 58 -182 64 -572 65 l-347 1 1 -726 0 -725 -32 0 c-18 0 -186 12 -373 25 -402 30 -1234 85 -1287 85 l-38 0 0 260 0 260 398 2 397 3 0 65 0 65 -397 3 -398 2 0 270 0 270 445 0 445 0 0 70 0 70 -525 2 -525 3 0 -662 c0 -364 -3 -664 -7 -666 -7 -3 -537 19 -923 38 l-136 7 77 77 c125 125 173 244 173 436 0 270 -115 450 -367 572 -84 41 -242 81 -363 91 l-89 7 -3 78 -3 77 -68 0 c-37 0 -71 -3 -74 -7z m-4134 -199 c110 -25 220 -86 302 -169 123 -123 179 -265 179 -450 0 -86 -5 -126 -23 -185 -27 -91 -81 -189 -133 -246 l-38 -41 -363 -7 c-199 -4 -395 -9 -435 -13 l-74 -6 -51 55 c-98 105 -148 213 -167 359 -20 163 16 319 104 448 87 127 229 223 377 255 88 20 235 19 322 0z m8598 -22 c172 -69 242 -170 243 -357 0 -83 -4 -108 -22 -149 -33 -73 -68 -114 -134 -156 -93 -61 -160 -72 -460 -78 l-258 -5 0 388 0 387 288 -4 c269 -4 291 -5 343 -26z m-4471 -572 l0 -510 -138 0 c-161 0 -210 11 -299 69 -156 101 -223 228 -223 424 0 192 81 333 245 428 82 48 265 96 373 98 l42 1 0 -510z m389 480 c229 -55 385 -199 421 -389 52 -276 -81 -506 -344 -595 -55 -18 -79 -20 -187 -16 l-124 5 -3 514 -2 514 77 -7 c43 -3 116 -15 162 -26z m-7401 -650 l250 -425 39 -3 c31 -2 41 2 52 20 12 19 140 238 370 633 26 44 84 144 130 223 46 78 85 142 87 142 2 0 4 -224 4 -498 l0 -498 -202 -12 c-112 -7 -387 -23 -613 -37 -225 -14 -422 -25 -437 -25 l-28 0 0 538 0 537 49 -85 c27 -47 162 -276 299 -510z" />
      <path d="M1447 2690 c-27 -58 -88 -193 -137 -300 -76 -169 -364 -798 -466 -1019 -57 -122 -58 -116 35 -116 l81 0 93 205 93 205 429 0 430 0 89 -202 90 -202 83 -3 c55 -2 83 1 83 8 0 9 -38 94 -162 364 -11 25 -53 117 -93 205 -41 88 -155 338 -254 555 l-180 395 -82 5 -82 5 -50 -105z m315 -482 c93 -211 172 -389 175 -395 4 -10 -72 -13 -361 -13 -201 0 -366 2 -366 4 0 4 62 144 257 581 47 105 89 201 95 215 8 22 10 23 19 8 5 -10 87 -190 181 -400z" />
      <path d="M18310 2760 c-16 -31 -253 -548 -310 -675 -12 -27 -101 -220 -196 -428 -96 -208 -174 -384 -174 -390 0 -9 24 -11 81 -9 l80 4 44 94 c24 52 63 138 86 192 23 53 47 103 52 110 7 9 106 12 434 12 l424 0 33 -72 c17 -40 59 -132 91 -205 l60 -132 82 -3 c50 -2 83 1 83 7 0 5 -66 154 -146 330 -134 292 -441 964 -516 1127 l-31 67 -80 3 -79 3 -18 -35z m210 -395 c39 -88 77 -173 85 -190 7 -16 47 -106 89 -198 42 -93 76 -170 76 -173 0 -2 -164 -4 -365 -4 -201 0 -365 2 -365 5 0 6 48 114 225 510 59 132 114 256 123 275 l15 35 23 -50 c12 -27 54 -122 94 -210z" />
      <path d="M9080 550 c0 -23 -6 -26 -72 -35 -62 -8 -108 -40 -135 -95 -45 -87 -15 -185 67 -227 25 -13 65 -27 90 -31 33 -6 45 -12 44 -25 -1 -12 6 -17 22 -17 17 0 24 6 24 19 0 14 10 20 48 25 60 8 120 42 149 85 27 40 31 126 8 170 -30 58 -105 101 -177 101 -23 0 -28 4 -28 25 0 18 -5 25 -20 25 -13 0 -20 -7 -20 -20z m-2 -207 l3 -143 -36 0 c-43 0 -108 31 -129 62 -54 76 -15 179 81 214 77 28 78 27 81 -133z m154 116 c50 -26 72 -68 66 -131 -8 -74 -70 -128 -148 -128 l-30 0 0 146 0 146 37 -7 c20 -4 54 -15 75 -26z" />
      <path d="M9810 546 c0 -21 -6 -24 -51 -29 -67 -8 -132 -47 -153 -91 -24 -51 -21 -136 7 -177 29 -43 89 -77 150 -85 37 -5 47 -11 47 -25 0 -12 7 -19 20 -19 13 0 20 7 20 19 0 14 10 19 45 24 118 13 192 92 182 195 -9 91 -69 145 -176 161 -38 5 -47 10 -49 29 -5 31 -42 30 -42 -2z m0 -201 l0 -145 -30 0 c-78 0 -140 54 -148 128 -7 79 28 125 118 153 62 18 60 23 60 -136z m154 117 c16 -9 38 -29 49 -44 27 -36 28 -115 3 -153 -21 -32 -88 -64 -133 -65 l-33 0 0 146 0 147 42 -7 c24 -4 56 -15 72 -24z" />
      <path d="M3695 549 c-50 -12 -98 -49 -86 -67 6 -11 17 -9 50 9 90 47 194 21 239 -59 39 -70 36 -72 -88 -72 -91 0 -110 -3 -110 -15 0 -12 19 -15 110 -15 109 0 110 0 110 -24 0 -31 -38 -85 -79 -113 -46 -31 -128 -32 -182 -1 -29 16 -42 19 -50 11 -44 -44 142 -95 228 -62 49 18 103 79 119 137 49 166 -92 312 -261 271z" />
      <path d="M8334 551 c-41 -10 -94 -42 -94 -58 0 -21 19 -24 45 -7 60 40 154 36 210 -8 28 -22 68 -96 59 -110 -3 -4 -52 -8 -110 -8 -86 0 -104 -3 -104 -15 0 -12 19 -15 111 -15 l111 0 -7 -27 c-28 -116 -147 -168 -257 -112 -28 14 -44 17 -51 10 -28 -28 60 -71 147 -71 121 0 205 85 206 208 0 100 -56 181 -144 207 -53 16 -74 17 -122 6z" />
      <path d="M14172 545 c-104 -32 -157 -111 -150 -221 5 -78 41 -136 108 -171 38 -21 56 -24 121 -21 95 4 145 34 184 111 61 123 2 263 -126 301 -62 19 -80 19 -137 1z m156 -53 c82 -37 115 -167 62 -245 -75 -109 -246 -103 -307 12 -29 56 -29 105 0 161 46 91 143 119 245 72z" />
      <path d="M14885 551 c-85 -21 -147 -82 -165 -164 -24 -106 35 -214 135 -247 56 -18 153 -9 199 19 33 21 36 26 23 38 -12 13 -19 12 -48 -6 -42 -26 -126 -28 -176 -5 -123 59 -124 247 -1 310 46 24 129 21 174 -5 33 -19 39 -20 52 -8 13 13 11 17 -12 32 -59 39 -119 51 -181 36z" />
      <path d="M4250 340 l0 -210 25 0 c25 0 25 0 25 94 l0 95 130 3 130 3 0 -97 c0 -98 0 -98 25 -98 l25 0 0 210 0 210 -25 0 c-25 0 -25 0 -25 -92 l0 -93 -130 3 -130 3 0 90 c0 88 0 89 -25 89 l-25 0 0 -210z" />
      <path d="M4930 340 l0 -210 150 0 c143 0 150 1 150 20 0 19 -7 20 -125 20 l-125 0 0 75 0 74 107 3 c93 3 108 5 111 21 3 15 -7 17 -107 17 l-111 0 0 75 0 75 120 0 c113 0 120 1 120 20 0 19 -7 20 -145 20 l-145 0 0 -210z" />
      <path d="M5510 340 l0 -210 25 0 c24 0 25 2 25 65 l0 65 68 0 c85 0 135 14 174 49 25 22 32 37 36 79 6 69 -11 107 -63 137 -38 23 -53 25 -153 25 l-112 0 0 -210z m240 155 c36 -19 57 -78 43 -121 -16 -49 -53 -67 -148 -72 l-85 -5 0 107 0 106 80 0 c53 0 91 -5 110 -15z" />
      <path d="M6120 340 c0 -203 1 -210 20 -210 19 0 20 7 20 190 l0 190 110 0 c103 0 110 1 110 20 0 19 -7 20 -130 20 l-130 0 0 -210z" />
      <path d="M6640 340 l0 -210 23 0 c14 1 34 17 58 48 19 26 78 102 130 169 l94 122 3 -169 2 -170 25 0 25 0 0 210 0 210 -23 0 c-17 0 -52 -38 -152 -170 -72 -93 -132 -169 -135 -170 -3 0 -4 76 -2 170 l3 170 -25 0 -26 0 0 -210z" />
      <path d="M7365 531 c-48 -29 -67 -57 -72 -104 -7 -60 12 -112 50 -139 18 -12 34 -23 36 -24 2 -2 -18 -33 -43 -69 -45 -62 -46 -65 -23 -65 18 0 34 15 68 65 l44 65 78 0 77 0 0 -65 c0 -58 2 -65 20 -65 19 0 20 7 20 210 l0 210 -112 0 c-93 0 -118 -3 -143 -19z m215 -126 l0 -105 -85 0 c-128 0 -158 21 -157 111 1 78 32 97 155 98 l87 1 0 -105z" />
      <path d="M10360 340 l0 -210 150 0 c143 0 150 1 150 20 0 19 -7 20 -125 20 l-125 0 0 75 0 74 107 3 c93 3 108 5 111 21 3 15 -7 17 -107 17 l-111 0 0 75 0 75 120 0 c113 0 120 1 120 20 0 19 -7 20 -145 20 l-145 0 0 -210z" />
      <path d="M10940 340 c0 -203 1 -210 20 -210 19 0 20 7 20 95 l0 95 53 0 53 0 62 -84 c73 -98 84 -109 111 -104 17 3 9 17 -59 106 -44 56 -80 105 -80 109 0 3 32 48 70 98 39 50 70 95 70 98 0 4 -9 7 -19 7 -13 0 -44 -33 -91 -96 l-72 -95 -47 3 -46 3 -3 93 c-2 84 -4 92 -22 92 -19 0 -20 -8 -20 -210z" />
      <path d="M11462 533 c3 -15 16 -19 76 -21 l72 -3 0 -189 0 -190 25 0 25 0 0 190 0 190 70 0 c63 0 70 2 70 20 0 19 -7 20 -171 20 -157 0 -170 -1 -167 -17z" />
      <path d="M12060 340 l0 -210 23 0 c18 0 51 37 153 169 l129 169 3 -169 2 -169 25 0 25 0 0 210 0 210 -22 0 c-18 0 -54 -40 -153 -170 l-130 -169 -3 170 -2 169 -25 0 -25 0 0 -210z" />
      <path d="M12740 340 l0 -210 113 0 c131 0 178 11 207 47 30 38 27 106 -5 138 -13 14 -32 25 -41 25 -14 0 -10 7 14 31 56 55 39 142 -35 170 -13 5 -76 9 -139 9 l-114 0 0 -210z m230 167 c39 -14 57 -48 46 -91 -9 -38 -58 -56 -151 -56 l-75 0 0 80 0 80 73 -1 c39 0 88 -5 107 -12z m9 -187 c63 -18 81 -81 36 -125 -22 -23 -31 -25 -125 -25 l-100 0 0 80 0 80 78 0 c42 0 92 -4 111 -10z" />
      <path d="M13380 340 c0 -203 1 -210 20 -210 19 0 20 7 20 95 l0 95 135 0 135 0 0 -95 c0 -88 1 -95 20 -95 19 0 20 7 20 210 0 202 -1 210 -20 210 -17 0 -20 -8 -22 -91 l-3 -90 -130 0 -130 0 -3 90 c-2 83 -5 91 -22 91 -19 0 -20 -8 -20 -210z" />
      <path d="M15290 530 c0 -18 6 -20 75 -20 l75 0 0 -190 c0 -183 1 -190 20 -190 19 0 20 7 20 190 l0 189 78 3 c60 2 77 6 77 18 0 13 -27 15 -172 18 -168 2 -173 2 -173 -18z" />
      <path d="M15890 340 l0 -210 23 0 c17 0 52 40 152 169 l130 169 3 -169 2 -169 25 0 25 0 0 210 0 210 -22 0 c-22 0 -74 -63 -243 -289 l-40 -53 -3 171 -2 171 -25 0 -25 0 0 -210z" />
    </g>,
  ],

  //* Phosphor icons

  Calculator: [
    { viewBox: '0 0 256 256' },
    <path d="M200,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V40A20,20,0,0,0,200,20Zm-4,192H60V44H196ZM80,76A12,12,0,0,1,92,64h72a12,12,0,0,1,0,24H92A12,12,0,0,1,80,76Zm40,52a16,16,0,1,1-16-16A16,16,0,0,1,120,128Zm48,0a16,16,0,1,1-16-16A16,16,0,0,1,168,128Zm-48,48a16,16,0,1,1-16-16A16,16,0,0,1,120,176Zm48,0a16,16,0,1,1-16-16A16,16,0,0,1,168,176Z" />,
  ],

  ChartLineDown: [
    { viewBox: '0 0 256 256' },
    <path d="M236,208a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V48a12,12,0,0,1,24,0V59l52,52,23.51-23.52a12,12,0,0,1,17,0L188,139V128a12,12,0,0,1,24,0v40q0,.6-.06,1.2c0,.16-.05.33-.07.49s-.06.45-.1.67-.09.38-.14.56-.09.39-.15.58l-.19.54c-.07.19-.13.38-.21.56s-.15.34-.23.5-.17.38-.27.57-.18.3-.27.45-.21.38-.33.56-.24.32-.36.47-.22.32-.34.47-.46.53-.71.78l-.08.1-.1.08c-.25.25-.51.48-.78.71l-.46.34c-.16.12-.32.25-.48.36s-.37.22-.55.33-.3.19-.46.27-.37.18-.56.27-.33.16-.51.23l-.54.21-.57.19a4.92,4.92,0,0,1-.55.14l-.58.15-.64.09-.53.08A11.51,11.51,0,0,1,200,180H160a12,12,0,0,1,0-24h11l-43-43-23.51,23.52a12,12,0,0,1-17,0L44,93V196H224A12,12,0,0,1,236,208Z" />,
  ],

  ChevronDown: [
    { viewBox: '0 0 256 256' },
    <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />,
  ],

  Crosshair: [
    { viewBox: '0 0 256 256' },
    <path d="M232,116h-4.72A100.21,100.21,0,0,0,140,28.72V24a12,12,0,0,0-24,0v4.72A100.21,100.21,0,0,0,28.72,116H24a12,12,0,0,0,0,24h4.72A100.21,100.21,0,0,0,116,227.28V232a12,12,0,0,0,24,0v-4.72A100.21,100.21,0,0,0,227.28,140H232a12,12,0,0,0,0-24Zm-92,87v-3a12,12,0,0,0-24,0v3a76.15,76.15,0,0,1-63-63h3a12,12,0,0,0,0-24H53a76.15,76.15,0,0,1,63-63v3a12,12,0,0,0,24,0V53a76.15,76.15,0,0,1,63,63h-3a12,12,0,0,0,0,24h3A76.15,76.15,0,0,1,140,203ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z" />,
  ],

  Envelope: [
    { viewBox: '0 0 256 256' },
    <path d="M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44Zm-96,83.72L62.85,68h130.3ZM92.79,128,44,172.72V83.28Zm17.76,16.28,9.34,8.57a12,12,0,0,0,16.22,0l9.34-8.57L193.15,188H62.85ZM163.21,128,212,83.28v89.44Z" />,
  ],

  Headset: [
    { viewBox: '0 0 256 256' },
    <path d="M204.73,51.85A108.07,108.07,0,0,0,20,128v56a28,28,0,0,0,28,28H64a28,28,0,0,0,28-28V144a28,28,0,0,0-28-28H44.84A84.05,84.05,0,0,1,128,44h.64a83.7,83.7,0,0,1,82.52,72H192a28,28,0,0,0-28,28v40a28,28,0,0,0,28,28h19.6A20,20,0,0,1,192,228H136a12,12,0,0,0,0,24h56a44.05,44.05,0,0,0,44-44V128A107.34,107.34,0,0,0,204.73,51.85ZM64,140a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V140Zm124,44V144a4,4,0,0,1,4-4h20v48H192A4,4,0,0,1,188,184Z" />,
  ],

  Lock: [
    { viewBox: '0 0 256 256' },
    <path d="M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Zm-60-52a16,16,0,1,1-16-16A16,16,0,0,1,144,152Z" />,
  ],

  Phone: [
    { viewBox: '0 0 256 256' },
    <path d="M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z" />,
  ],

  PhoneIncoming: [
    { viewBox: '0 0 256 256' },
    <path d="M224,154.8l-47.09-21.1-.18-.08a19.89,19.89,0,0,0-19,1.74,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204ZM148,96V56a12,12,0,0,1,24,0V67l27.52-27.52a12,12,0,0,1,17,17L189,84h11a12,12,0,0,1,0,24H160A12,12,0,0,1,148,96Z" />,
  ],

  PiggyBank: [
    { viewBox: '0 0 256 256' },
    <path d="M200,120a16,16,0,1,1-16-16A16,16,0,0,1,200,120ZM156,64H116a12,12,0,0,0,0,24h40a12,12,0,0,0,0-24Zm100,48v32a28,28,0,0,1-27.54,28L213.2,214.73A20,20,0,0,1,194.36,228H181.64a20,20,0,0,1-18.84-13.27l-1-2.73H110.17l-1,2.73A20,20,0,0,1,90.36,228H77.64A20,20,0,0,1,58.8,214.73L46.5,180.28A91.63,91.63,0,0,1,25.75,137.8,11.91,11.91,0,0,0,24,144a12,12,0,0,1-24,0,36.07,36.07,0,0,1,24.56-34.13A92.13,92.13,0,0,1,116,28H220a12,12,0,0,1,0,24H210a92,92,0,0,1,22.48,31.45l.42,1A28.05,28.05,0,0,1,256,112Zm-24,0a4,4,0,0,0-4-4h-3.66a12,12,0,0,1-11.45-8.41A68,68,0,0,0,148,52H116A68,68,0,0,0,65.86,165.94,11.85,11.85,0,0,1,68.31,170l12.15,34h7.08l2.87-8a12,12,0,0,1,11.3-8h68.58a12,12,0,0,1,11.3,8l2.87,8h7.08l17.16-48a12,12,0,0,1,11.3-8h8a4,4,0,0,0,4-4Z" />,
  ],

  //* Material symbols

  ElectricCar: [
    { viewBox: '0 -960 960 960' },
    <path d="M240-360v40q0 17-11.5 28.5T200-280h-40q-17 0-28.5-11.5T120-320v-320l84-240q6-18 21.5-29t34.5-11h440q19 0 34.5 11t21.5 29l84 240v320q0 17-11.5 28.5T800-280h-40q-17 0-28.5-11.5T720-320v-40H240Zm-8-360h496l-42-120H274l-42 120Zm-32 80v200-200Zm100 160q25 0 42.5-17.5T360-540q0-25-17.5-42.5T300-600q-25 0-42.5 17.5T240-540q0 25 17.5 42.5T300-480Zm360 0q25 0 42.5-17.5T720-540q0-25-17.5-42.5T660-600q-25 0-42.5 17.5T600-540q0 25 17.5 42.5T660-480ZM520-40 280-160h160v-80l240 120H520v80ZM200-440h560v-200H200v200Z" />,
  ],

  Engineering: [
    { viewBox: '0 -960 960 960' },
    <path d="M42-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H42Zm80-80h480v-32q0-11-5.5-20T582-266q-36-18-92.5-36T362-320q-71 0-127.5 18T142-266q-9 5-14.5 14t-5.5 20v32Zm240-240q-66 0-113-47t-47-113h-10q-9 0-14.5-5.5T172-620q0-9 5.5-14.5T192-640h10q0-45 22-81t58-57v38q0 9 5.5 14.5T302-720q9 0 14.5-5.5T322-740v-54q9-3 19-4.5t21-1.5q11 0 21 1.5t19 4.5v54q0 9 5.5 14.5T422-720q9 0 14.5-5.5T442-740v-38q36 21 58 57t22 81h10q9 0 14.5 5.5T552-620q0 9-5.5 14.5T532-600h-10q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T442-600H282q0 33 23.5 56.5T362-520Zm300 160-6-30q-6-2-11.5-4.5T634-402l-28 10-20-36 22-20v-24l-22-20 20-36 28 10q4-4 10-7t12-5l6-30h40l6 30q6 2 12 5t10 7l28-10 20 36-22 20v24l22 20-20 36-28-10q-5 5-10.5 7.5T708-390l-6 30h-40Zm20-70q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm72-130-8-42q-9-3-16.5-7.5T716-620l-42 14-28-48 34-30q-2-5-2-8v-16q0-3 2-8l-34-30 28-48 42 14q6-6 13.5-10.5T746-798l8-42h56l8 42q9 3 16.5 7.5T848-780l42-14 28 48-34 30q2 5 2 8v16q0 3-2 8l34 30-28 48-42-14q-6 6-13.5 10.5T818-602l-8 42h-56Zm28-90q21 0 35.5-14.5T832-700q0-21-14.5-35.5T782-750q-21 0-35.5 14.5T732-700q0 21 14.5 35.5T782-650ZM362-200Z" />,
  ],

  Factory: [
    { viewBox: '0 -960 960 960' },
    <path d="M80-80v-481l280-119v80l200-80v120h320v480H80Zm80-80h640v-320H480v-82l-200 80v-78l-120 53v347Zm280-80h80v-160h-80v160Zm-160 0h80v-160h-80v160Zm320 0h80v-160h-80v160Zm280-320H680l40-320h120l40 320ZM160-160h640-640Z" />,
  ],

  Handyman: [
    { viewBox: '0 -960 960 960' },
    <path d="M754-81q-8 0-15-2.5T726-92L522-296q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l85-85q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l204 204q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-85 85q-6 6-13 8.5T754-81Zm0-95 29-29-147-147-29 29 147 147ZM205-80q-8 0-15.5-3T176-92l-84-84q-6-6-9-13.5T80-205q0-8 3-15t9-13l212-212h85l34-34-165-165h-57L80-765l113-113 121 121v57l165 165 116-116-43-43 56-56H495l-28-28 142-142 28 28v113l56-56 142 142q17 17 26 38.5t9 45.5q0 24-9 46t-26 39l-85-85-56 56-42-42-207 207v84L233-92q-6 6-13 9t-15 3Zm0-96 170-170v-29h-29L176-205l29 29Zm0 0-29-29 15 14 14 15Zm549 0 29-29-29 29Z" />,
  ],

  Help: [
    { viewBox: '0 -960 960 960' },
    <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />,
  ],

  LocationOn: [
    { viewBox: '0 -960 960 960' },
    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />,
  ],

  PrecisionManufacturing: [
    { viewBox: '0 -960 960 960' },
    <path d="M159-120v-120h124L181-574q-27-15-44.5-44T119-680q0-50 35-85t85-35q39 0 69.5 22.5T351-720h128v-40q0-17 11.5-28.5T519-800q9 0 17.5 4t14.5 12l68-64q9-9 21.5-11.5T665-856l156 72q12 6 16.5 17.5T837-744q-6 12-17.5 15.5T797-730l-144-66-94 88v56l94 86 144-66q11-5 23-1t17 15q6 12 1 23t-17 17l-156 74q-12 6-24.5 3.5T619-512l-68-64q-6 6-14.5 11t-17.5 5q-17 0-28.5-11.5T479-600v-40H351q-3 8-6.5 15t-9.5 15l200 370h144v120H159Zm80-520q17 0 28.5-11.5T279-680q0-17-11.5-28.5T239-720q-17 0-28.5 11.5T199-680q0 17 11.5 28.5T239-640Zm126 400h78L271-560h-4l98 320Zm78 0Z" />,
  ],
} satisfies Record<string, CreateIconComponentParams>;

export const icons = Object.fromEntries(
  Object.entries(iconsData).map(([name, params]) => {
    const Component = createIconComponent(
      ...(params as CreateIconComponentParams),
    );

    Component.displayName = `${name}Icon`;
    return [name, Component];
  }),
) as Readonly<Record<keyof typeof iconsData, Icon>>;
