<script lang="ts" setup>
import { TechItemData, ProjectData } from '~/components/types/common';

definePageMeta({
  layout: 'navbar',
});

useSeoMeta({
  title: 'Portfolio',
  description:
    'Mauricio Rivera (Bombay) is a self-taught full-stack web developer with experience in JavaScript, TypeScript, Vue, Nuxt, React, Next, Node, and more. Currently working as a freelance web developer and studying Computer Science at NJIT.',
});

const TECH_STACK = <Array<TechItemData>>[
  {
    name: 'React',
    icon: 'react',
    link: 'https://reactjs.org/',
  },
  {
    name: 'NextJs',
    icon: 'nextjs',
    link: 'https://nextjs.org/',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 256" version="1.1" preserveAspectRatio="xMidYMid">
      <g>
        <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" fill="#000000"></path>
      </g>
    </svg>
    `,
  },
  {
    name: 'Vue',
    icon: 'vue',
    link: 'https://vuejs.org/',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 261.76 226.69"><g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
      <g transform="translate(178.06 235.01)"><path d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z" fill="#41b883"/></g><g transform="translate(178.06 235.01)"><path d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z" fill="#34495e"/></g></g>
    </svg>
    `,
  },
  {
    name: 'NuxtJs',
    icon: 'nuxt',
    link: 'https://nuxt.com/',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
      <path d="M281.44 397.667H438.32C443.326 397.667 448.118 395.908 452.453 393.427C456.789 390.946 461.258 387.831 463.76 383.533C466.262 379.236 468.002 374.36 468 369.399C467.998 364.437 466.266 359.563 463.76 355.268L357.76 172.947C355.258 168.65 352.201 165.534 347.867 163.053C343.532 160.573 337.325 158.813 332.32 158.813C327.315 158.813 322.521 160.573 318.187 163.053C313.852 165.534 310.795 168.65 308.293 172.947L281.44 219.587L227.733 129.13C225.229 124.834 222.176 120.307 217.84 117.827C213.504 115.346 208.713 115 203.707 115C198.701 115 193.909 115.346 189.573 117.827C185.238 120.307 180.771 124.834 178.267 129.13L46.8267 355.268C44.3208 359.563 44.0022 364.437 44 369.399C43.9978 374.36 44.3246 379.235 46.8267 383.533C49.3288 387.83 53.7979 390.946 58.1333 393.427C62.4688 395.908 67.2603 397.667 72.2667 397.667H171.2C210.401 397.667 238.934 380.082 258.827 346.787L306.88 263.4L332.32 219.587L410.053 352.44H306.88L281.44 397.667ZM169.787 352.44H100.533L203.707 174.36L256 263.4L221.361 323.784C208.151 345.387 193.089 352.44 169.787 352.44Z" fill="#00DC82"/>
    </svg>
    `,
  },
  {
    name: 'Svelte',
    icon: 'svelte',
    link: 'https://svelte.dev/',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 98.1 118" xml:space="preserve">
      <style type="text/css">
      \t.st0{fill:#FF3E00;}
      \t.st1{fill:#FFFFFF;}
      </style>
      <path class="st0" d="M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3  c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1  c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6"/>
      <path class="st1" d="M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1  c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72  c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7  c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5  c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1  c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1  c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5  c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9"/>
     </svg>
    `,
  },
  {
    name: 'SvelteKit',
    icon: 'svelte',
    link: 'https://kit.svelte.dev/',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 98.1 118" xml:space="preserve">
      <path class="st0" d="M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3  c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1  c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6"/>
      <path class="st1" d="M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1  c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72  c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7  c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5  c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1  c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1  c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5  c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9"/>
     </svg>
    `,
  },
  {
    name: 'HTML 5',
    icon: 'html',
    link: 'https://en.wikipedia.org/wiki/HTML5',
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#e44d26" d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512"/>
        <path fill="#f16529" d="M256 480.5V131H404.3L376 447"/>
        <path fill="#ebebeb" d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"/>
        <path fill="#fff" d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8"/>
       </svg>
    `,
  },
  {
    name: 'CSS 3',
    icon: 'css',
    link: 'https://reactjs.org/',
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 511.73401 511.99998" version="1.1">
        <g id="g3013">
          <polygon id="polygon2989" points="437.367,100.62 404.321,470.819 255.778,512 107.644,470.877 74.633,100.62 " style="fill:#264de4"/>
          <polygon id="polygon2991" points="376.03,447.246 404.27,130.894 256,130.894 256,480.523 " style="fill:#2965f1"/>
          <polygon id="polygon2993" points="150.31,268.217 154.38,313.627 256,313.627 256,268.217 " style="fill:#ebebeb"/>
          <polygon id="polygon2995" points="256,176.305 255.843,176.305 142.132,176.305 146.26,221.716 256,221.716 " style="fill:#ebebeb"/>
          <polygon id="polygon2997" points="256,433.399 256,386.153 255.801,386.206 205.227,372.55 201.994,336.333 177.419,336.333 156.409,336.333 162.771,407.634 255.791,433.457 " style="fill:#ebebeb"/>
          <polygon id="polygon3005" points="311.761,313.627 306.49,372.521 255.843,386.191 255.843,433.435 348.937,407.634 349.62,399.962 360.291,280.411 361.399,268.217 369.597,176.305 255.843,176.305 255.843,221.716 319.831,221.716 315.699,268.217 255.843,268.217 255.843,313.627 " style="fill:#ffffff"/>
        </g>
      </svg>
    `,
  },
  {
    name: 'Tailwind',
    icon: 'tailwind',
    link: 'https://reactjs.org/',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 33"><g clip-path="url(#prefix__clip0)">
      <path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs>
    </svg>
    `,
  },
  {
    name: 'Daisy UI',
    icon: 'daisy',
    link: 'https://daisyui.com/',
    svg: false,
  },
  {
    name: 'Naive UI',
    icon: 'naive',
    link: 'https://www.naiveui.com/en-US/os-theme',
    svg: false,
  },
  {
    name: 'Flowbite Svelte',
    icon: 'flowbite',
    link: 'https://flowbite-svelte.com/',
    svg: false,
    burn: true,
  },
  {
    name: 'MUI',
    icon: 'react',
    link: 'https://mui.com/',
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 32" fill="none">
      <path d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z" fill="#007FFF"/>
      </svg>
    `,
  },
  {
    name: 'Python',
    icon: 'python',
    link: 'https://www.python.org/',
    svg: false,
  },
  {
    name: 'Flask',
    icon: 'flask',
    link: 'https://flask.palletsprojects.com/en/3.0.x/',
    svg: false,
    burn: true,
  },
  {
    name: 'Javascript',
    icon: 'js',
    link: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
      <rect width="630" height="630" fill="#f7df1e"/>
      <path fill="black" d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
     </svg>
    `,
  },
  {
    name: 'Typescript',
    icon: 'ts',
    link: 'https://www.typescriptlang.org/',
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512">
        <rect fill="#3178c6" height="512" rx="50" width="512"/><rect fill="#3178c6" height="512" rx="50" width="512"/><path clip-rule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff" fill-rule="evenodd"/>
      </svg>
    `,
  },
  {
    name: 'NodeJs',
    icon: 'node',
    link: 'https://nodejs.org/en',
    svg: false,
    burn: true,
  },
  {
    name: 'Lua',
    icon: 'lua',
    link: 'https://www.lua.org/',
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" id="Ebene_1" x="0px" y="0px" viewBox="0 0 947 947" enable-background="new 0 0 947 947" xml:space="preserve">
      <g>
      <path fill="#000080" d="M835.5,473.6c0-199.8-162.2-362-362-362s-362,162.2-362,362c0,199.8,162.2,362,362,362   S835.5,673.4,835.5,473.6"/>
      <path fill="#FFFFFF" d="M729.5,323.6c0-58.5-47.5-106-106-106s-106,47.5-106,106c0,58.5,47.5,106,106,106S729.5,382.1,729.5,323.6"/>
      <path fill="#000080" d="M941.5,111.5c0-58.5-47.5-106-106-106s-106,47.5-106,106c0,58.5,47.5,106,106,106S941.5,170.1,941.5,111.5"/>
      <g>
        <path fill="#FFFFFF" d="M258.1,627.8h117.3v26.7H227.8V417h30.3V627.8z"/>
        <path fill="#FFFFFF" d="M515.5,654.5v-23.8c-16,22.5-31.9,31.3-57,31.3c-33.2,0-54.4-18.2-54.4-46.6V483.8h27v120.9    c0,20.5,13.7,33.6,35.2,33.6c28.3,0,46.6-22.8,46.6-57.7v-96.8h27v170.7H515.5z"/>
        <path fill="#FFFFFF" d="M738.4,659.1c-8.8,2.3-13,2.9-18.6,2.9c-17.6,0-26.1-7.8-28-25.1c-19.2,17.6-36.5,25.1-58,25.1    c-34.5,0-56-19.5-56-50.5c0-22.2,10.1-37.5,30-45.6c10.4-4.2,16.3-5.5,54.7-10.4c21.5-2.6,28.3-7.5,28.3-18.9v-7.2    c0-16.3-13.7-25.4-38.1-25.4c-25.4,0-37.8,9.4-40.1,30.3h-27.4c0.7-16.9,3.9-26.7,11.7-35.5c11.4-12.7,31.9-19.9,56.7-19.9    c42,0,64.2,16.3,64.2,46.6v100.4c0,8.5,5.2,13.4,14.7,13.4c1.6,0,2.9,0,5.9-0.7V659.1z M690.8,570.1c-9.1,4.2-15,5.5-43.7,9.4    c-29,4.2-41.1,13.4-41.1,31.3c0,17.3,12.4,27.4,33.6,27.4c16,0,29.3-5.2,40.4-15.3c8.1-7.5,10.8-13,10.8-22.2V570.1z"/>
      </g>
      <path fill="none" stroke="#808080" stroke-width="10.8612" stroke-miterlimit="10" stroke-dasharray="40.8475" d="M890.6,261   c33.5,65.8,51,138.6,51,212.5c0,258.4-209.7,468.1-468.1,468.1S5.4,731.9,5.4,473.5C5.4,215.1,215.1,5.4,473.5,5.4   c83.1,0,164.6,22.1,236.2,63.9"/>
      </g>
    </svg>
    `,
  },
];
const PROJECTS = <Array<ProjectData>>[
  {
    name: 'Entity Evolution',
    description:
      'An open source organization created to support the development of free resources for the FiveM community.',
    image: 'ev.png',
    link: 'https://entityevolution.github.io/',
    date: new Date('2021-08-01'),
  },
  {
    name: 'MPhotography',
    description: 'My first website created for myself to showcase my photography skills.',
    image: 'mphoto.png',
    link: 'https://bombayv.github.io/',
    date: new Date('2022-08-01'),
  },
  {
    name: 'Bombay Tech v1',
    description: 'The first iteration of my personal website meant as a personal blog. It was created using Nuxt 2.0 and Tailwind CSS.',
    image: 'old_bombay.png',
    link: 'https://blog-qclru96sz-bombayv.vercel.app/',
    date: new Date('2021-08-01'),
  },
  {
    name: 'Bombay Tech v2',
    description: 'The second iteration of my personal website which expanded into a public gallery for people to share their photography.',
    image: 'new_bombay.png',
    link: 'https://blog-83r75fbwp-bombayv.vercel.app/',
    date: new Date('2021-08-01'),
  },
  {
    name: 'Brice Pierce',
    description: 'Artist portfolio website created for a friend of mine. It was created using Nuxt 3.0.',
    image: 'brice.png',
    link: 'https://bricepierce.com/',
    date: new Date('2021-08-01'),
  },
  {
    name: 'Lyons McGovern',
    description: 'Professional website created for a law firm in New York. It was created in collaboration with a team.',
    image: 'lyons.png',
    link: 'https://www.lyons-mcgovern.com/',
    date: new Date('2021-08-01'),
  },
  {
    name: 'MYoung Initiative',
    description: 'Created for a non-profit organization to help them raise awareness for their cause. Creating using Next 13.0 and Tailwind CSS.',
    image: 'myoung.png',
    link: 'https://www.myounginitiative.org/',
    date: new Date('2021-08-01'),
  },
  {
    name: 'NukaCraft',
    description: 'Open source minecraft mod created in reference to the Fallout series. It was created using Kotlin and Minecraft Fabric.',
    image: 'nukacraft.png',
    link: 'https://nukacraft.pages.dev/',
    date: new Date('2021-08-01'),
  },
  {
    name: 'PdImagery',
    description: 'Photography portfolio website created for a friend and teacher of mine.',
    image: 'pdimagery.png',
    link: 'https://www.pdimagery.art/',
    date: new Date('2021-08-01'),
  },
  {
    name: 'Atlas Framework',
    description: 'Open source FiveM framework created to help developers create their own FiveM servers.',
    image: 'atlas.png',
    link: 'https://atlasfw-github-io.pages.dev/',
    date: new Date('2021-08-01'),
  },
  {
    name: 'IHS Anxiety',
    description: 'Student project created for health class intended to help students with anxiety',
    image: 'anxiety.png',
    link: 'https://ihsanxiety.pages.dev/',
    date: new Date('2021-08-01'),
  },
  {
    name: 'QBCore Documentation',
    description: 'Ex-Official documentation for the QBCore framework created for FiveM. Created using docsify.',
    image: 'qbcore.png',
    link: 'https://bombayv.github.io/qbcore.github.io/#/',
    date: new Date('2021-08-01'),
  },
  {
    name: 'Anims Panel',
    description: 'Open source FiveM resource created to improve the animations while playing on a FiveM server.',
    image: 'anims.png',
    link: 'https://github.com/BombayV/anims',
    date: new Date('2021-08-01'),
  },
  {
    name: 'ev-hud',
    description: 'First open source adjustable hud created for FiveM. Created using jQuery and HTML/CSS.',
    image: 'hud.png',
    link: 'https://github.com/EntityEvolution/ev-hud',
    date: new Date('2021-08-01'),
  },
];
</script>

<template>
  <NuxtLayout>
    <section
      class="flex flex-col items-center mx-auto w-full text-center relative max-w-7xl px-6 pt-8 md:py-16 md:pb-8 h-full grow"
    >
      <h1 class="text-3xl lg:text-4xl 2xl:text-5xl">Portfolio</h1>
      <span class="block h-0.5 w-20 bg-background-800 my-4"></span>
      <p class="text-base lg:text-lg 2xl:text-xl">
        Here are some of my projects and technologies I am using, or have used.
      </p>
      <div class="grid grid-cols-2 md:grid-cols-3 w-full relative mt-8 gap-x-6 gap-y-8">
        <TechCard v-for="tech in TECH_STACK" :key="tech.name" :tech="tech" />
      </div>
    </section>
    <section
      class="flex flex-col items-center mx-auto w-full text-center relative max-w-7xl px-6 pt-8 md:py-16 md:pb-8 h-full grow"
    >
      <div class="relative w-full mt-4">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-orange-950/20"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <h1 class="px-4 text-3xl lg:text-4xl 2xl:text-5xl bg-background-50 drop-shadow-none">
            Projects
          </h1>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 relative mt-16">
        <ProjectCard v-for="project in PROJECTS.sort((a, b) => {
          return b.date - a.date
        })" :key="project.name" :project="project" />
      </div>
    </section>
  </NuxtLayout>
</template>
