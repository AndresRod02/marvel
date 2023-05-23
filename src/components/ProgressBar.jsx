import React from 'react';
const ProgressBar = ({produced, toProduce}) => {
    const percent = produced / toProduce;
    let form;
    let progressA;
    let progressB;
    switch (true) {
      case percent === 0.01:
        form =  2000;
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -3)
        break;
      case percent === 0.02:
        form =  1500;
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -3)
        break;
      case percent === 0.03:
        form =  1050;
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -3)
        break;
      case percent === 0.04:
        form =  900;
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -3)
        break;
      case percent === 0.05:
        form =  800;
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -3)
        break;
      case percent === 0.06:
        form =  750;
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -3)
        break;
      case percent >= 0.07 && percent <= 0.09:
        form =  680;
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -3)
        break;
      case percent === 0.1:
        form =  625;
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -3)
        break;
      case percent >= 0.1 && percent <= 0.13:
        form =  590;
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -3)
        break;
      case percent >= 0.14 && percent <= 0.19:
        form =  550;
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -3)
        break;
      case percent >= 0.2 && percent <= 0.24:
        form =  530;
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -3)
        break;
      case percent >= 0.25 && percent <= 0.29:
        form =  515;
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -3)
        break;
      case percent >= 0.3 && percent <= 0.39:
        form =  498;
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -3)
        break;
      case percent >= 0.4 && percent <= 0.49:
        form = 483.4
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -2);
        break;
      case percent >= 0.5 && percent <= 0.59:
        form = 475
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -2);
        break;
      case percent >= 0.6 && percent <= 0.69:
        form = 470;
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -2);
        break;
      case percent >= 0.7 && percent <= 0.79:
        form = 465;
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -2);
        break;
      case percent >= 0.8 && percent <= 0.89:
        form = 462;
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -2);
        break;
      case percent >= 0.9 && percent <= 1:
        form = 460;
        progressA = Math.ceil(form * percent);
        progressB = Math.ceil((form * percent) -2);
        break;
      default:
        form = 460;
        progressA = Math.ceil(form * 1);
        progressB = Math.ceil((form * 1) -2);
    }

    return (
        <div style={{marginLeft: '1rem', display: 'flex'}}>
        <svg width="100%" height="44" viewBox="0 0 474 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_ddd_501_3630)">
        <path d="M13.102 7.24023H467L461.367 36.3423H7L13.102 7.24023Z" fill="#1E2328" />
      </g>
      <path d="M80.8387 31.106L14.8562 12.3516H461.236L457.665 31.7606H80.8387Z" fill="#D9D9D9" stroke="#111111" />
      <path d={`M12.7782 31.7606L16.7957 12.9514H${progressA}.984L${progressB} 31.7606H12.7782Z`} fill="url(#paint0_linear_501_3630)" stroke="#111111" />
      <g style={{ mixBlendMode: 'screen' }}>
        <path d="M150.592 19.1679C226.029 19.1679 287.184 17.8659 287.184 16.2597C287.184 14.6536 226.029 13.3516 150.592 13.3516C75.1542 13.3516 14 14.6536 14 16.2597C14 17.8659 75.1542 19.1679 150.592 19.1679Z" fill="url(#paint1_radial_501_3630)" style={{ mixBlendMode: 'color-dodge' }} />
      </g>
      <path d="M60 31.3516L64 12.3516M104 31.3516L108 12.3516M148 31.3516L152 12.3516M192 31.3516L196 12.3516M236 31.3516L240 12.3516M280 33.0182L284 12.3516M324 31.3516L328 12.3516M368 31.3516L372 12.3516M412 31.3516L416 12.3516" stroke="#111111" />
      <defs>
        <filter id="filter0_ddd_501_3630" x="0" y="0.240234" width="474" height="43.1016" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="3.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.662745 0 0 0 0 0.258824 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_501_3630" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.662745 0 0 0 0 0.258824 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="effect1_dropShadow_501_3630" result="effect2_dropShadow_501_3630" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.662745 0 0 0 0 0.258824 0 0 0 1 0" />
          <feBlend mode="normal" in2="effect2_dropShadow_501_3630" result="effect3_dropShadow_501_3630" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_501_3630" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_501_3630" x1="192.174" y1="11.8516" x2="192.174" y2="32.2606" gradientUnits="userSpaceOnUse">
          <stop stopColor="#31969D" />
          <stop offset="0.317708" stopColor="#65E6F4" />
          <stop offset="0.661458" stopColor="#24AEBD" />
          <stop offset="0.989583" stopColor="#1299A8" />
        </linearGradient>
        <radialGradient id="paint1_radial_501_3630" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(150.39 15.7222) scale(136.441 2.85915)">
          <stop stopColor="white" />
          <stop offset="0.1" stopColor="#D2D2D2" />
          <stop offset="0.23" stopColor="#9B9B9B" />
          <stop offset="0.37" stopColor="#6B6B6B" />
          <stop offset="0.5" stopColor="#444444" />
          <stop offset="0.63" stopColor="#262626" />
          <stop offset="0.76" stopColor="#111111" />
          <stop offset="0.88" stopColor="#040404" />
          <stop offset="1" />
        </radialGradient>
      </defs>
    </svg>
        </div>
    );
};

export default ProgressBar;