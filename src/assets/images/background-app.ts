const backgroundApp = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1536" viewBox="0 0 1024 1536" fill="none">
  <defs>
    <radialGradient id="blueGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
      gradientTransform="translate(850 520) rotate(90) scale(920 760)">
      <stop offset="0" stop-color="#E6ECFF" stop-opacity="0.7"/>
      <stop offset="1" stop-color="#E6ECFF" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="pinkGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
      gradientTransform="translate(180 1280) rotate(90) scale(320 560)">
      <stop offset="0" stop-color="#FFDDE3" stop-opacity="0.7"/>
      <stop offset="1" stop-color="#FFDDE3" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="wave1" x1="0" y1="1110" x2="1024" y2="1150" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#F7E6E7" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#E8ECFA" stop-opacity="0.45"/>
    </linearGradient>

    <linearGradient id="wave2" x1="0" y1="1190" x2="1024" y2="1210" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#F8E6E3" stop-opacity="0.55"/>
      <stop offset="0.5" stop-color="#F1DCEB" stop-opacity="0.48"/>
      <stop offset="1" stop-color="#DEE6FF" stop-opacity="0.55"/>
    </linearGradient>

    <linearGradient id="wave3" x1="0" y1="1260" x2="1024" y2="1290" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#F8EDE7" stop-opacity="0.6"/>
      <stop offset="0.42" stop-color="#EBD9F2" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#D8E1FF" stop-opacity="0.65"/>
    </linearGradient>

    <filter id="softBlur" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="8"/>
    </filter>
  </defs>

  <rect width="1024" height="1536" fill="#FFFFFF"/>
  <rect width="1024" height="1536" fill="url(#blueGlow)"/>
  <rect width="1024" height="1536" fill="url(#pinkGlow)"/>



  <path d="M0 1138C132 1092 316 1107 470 1132C628 1159 732 1167 845 1139C934 1117 988 1091 1024 1078V1536H0V1138Z" fill="url(#wave2)"/>

  <path d="M0 1224C141 1163 318 1160 500 1183C669 1204 786 1196 894 1151C951 1127 994 1110 1024 1103V1536H0V1224Z" fill="url(#wave3)" filter="url(#softBlur)"/>

  <path d="M0 1298C146 1236 329 1216 529 1241C713 1264 833 1236 930 1185C973 1163 1006 1145 1024 1138V1536H0V1298Z" fill="url(#wave3)" opacity="0.9"/>

  <path d="M0 1325C155 1266 341 1239 551 1265C726 1286 856 1257 953 1207C989 1188 1013 1175 1024 1170V1536H0V1325Z" fill="#DDE3FF" fill-opacity="0.4"/>
</svg>
`;

export default backgroundApp;
