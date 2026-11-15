/* Simple drawings for the Social Studies quiz (drawn for this app). */
(function(){
  const svg = (vb, body) => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" role="img">${body}</svg>`;
  const T = (x, y, s, size=10, extra='') => `<text x="${x}" y="${y}" font-size="${size}" text-anchor="middle" font-family="Fredoka,system-ui,sans-serif" font-weight="600" fill="#2d2a4a" ${extra}>${s}</text>`;

  /* classroom seen from the front */
  const deskF = (x, y) => `<rect x="${x}" y="${y}" width="52" height="8" rx="2" fill="#c98f52"/><rect x="${x+4}" y="${y+8}" width="4" height="26" fill="#8a5a2b"/><rect x="${x+44}" y="${y+8}" width="4" height="26" fill="#8a5a2b"/>`;
  const front = svg('0 0 320 200', `
    <rect width="320" height="140" fill="#e6f1ff"/><polygon points="0,140 320,140 320,200 0,200" fill="#e9d9bd"/>
    <line x1="160" y1="0" x2="160" y2="12" stroke="#555" stroke-width="2"/><polygon points="145,24 175,24 166,12 154,12" fill="#666"/>
    <rect x="95" y="38" width="130" height="62" rx="3" fill="#2f6b4f" stroke="#8a5a2b" stroke-width="5"/>
    <rect x="20" y="40" width="52" height="52" fill="#bfe3ff" stroke="#777" stroke-width="4"/><line x1="46" y1="40" x2="46" y2="92" stroke="#777" stroke-width="3"/><line x1="20" y1="66" x2="72" y2="66" stroke="#777" stroke-width="3"/>
    <rect x="250" y="44" width="50" height="34" fill="#fff" stroke="#777" stroke-width="3"/><path d="M258 62 q8 -12 16 0 t16 0" fill="none" stroke="#3a8" stroke-width="3"/>
    <rect x="120" y="118" width="80" height="10" rx="2" fill="#a86f3a"/><rect x="126" y="128" width="5" height="34" fill="#7a4d22"/><rect x="189" y="128" width="5" height="34" fill="#7a4d22"/>
    ${deskF(30,140)}${deskF(238,140)}${deskF(60,165)}${deskF(208,165)}`);

  /* classroom plan seen from above */
  let desks = '';
  for(let r=0;r<4;r++) for(let c=0;c<4;c++){ const x=38+c*44, y=86+r*50;
    desks += `<rect x="${x}" y="${y}" width="30" height="18" rx="2" fill="#e2b77e" stroke="#8a5a2b" stroke-width="1.5"/><circle cx="${x+15}" cy="${y+28}" r="7" fill="#6b5b95"/>`; }
  const above = svg('0 0 240 300', `
    <rect x="6" y="6" width="228" height="288" fill="#f6f1e6" stroke="#444" stroke-width="5"/>
    <rect x="60" y="12" width="120" height="9" fill="#2f6b4f"/>
    <rect x="96" y="36" width="50" height="24" rx="2" fill="#a86f3a"/><circle cx="121" cy="72" r="7" fill="#d9534f"/>
    <line x1="6" y1="90" x2="6" y2="140" stroke="#58b7ff" stroke-width="6"/><line x1="6" y1="170" x2="6" y2="220" stroke="#58b7ff" stroke-width="6"/>
    <line x1="234" y1="30" x2="234" y2="62" stroke="#f6f1e6" stroke-width="6"/><line x1="234" y1="30" x2="204" y2="30" stroke="#444" stroke-width="3"/><path d="M204 30 A32 32 0 0 0 234 62" fill="none" stroke="#444" stroke-width="2" stroke-dasharray="4 3"/>
    ${desks}`);

  /* door symbol */
  const door = svg('0 0 220 130', `
    <rect width="220" height="130" fill="#f6f1e6"/>
    <line x1="10" y1="100" x2="70" y2="100" stroke="#444" stroke-width="8"/><line x1="150" y1="100" x2="210" y2="100" stroke="#444" stroke-width="8"/>
    <line x1="70" y1="100" x2="70" y2="20" stroke="#444" stroke-width="5"/><path d="M70 20 A80 80 0 0 1 150 100" fill="none" stroke="#444" stroke-width="3" stroke-dasharray="7 5"/>`);

  /* playground plan */
  const bush = (x, y) => `<circle cx="${x}" cy="${y}" r="14" fill="#3f9b4f"/><circle cx="${x+8}" cy="${y-6}" r="9" fill="#58b468"/>`;
  const playground = svg('0 0 300 260', `
    <rect x="4" y="4" width="292" height="252" fill="#d9f2c4" stroke="#555" stroke-width="4" stroke-dasharray="12 6"/>
    <circle cx="72" cy="72" r="50" fill="#ddd"/><circle cx="72" cy="72" r="38" fill="#4aa3e8"/><circle cx="64" cy="62" r="7" fill="#fff"/><circle cx="80" cy="70" r="6" fill="#fff"/>
    <rect x="168" y="50" width="56" height="56" fill="#f3d98b" stroke="#b9974a" stroke-width="3"/>
    <rect x="146" y="52" width="14" height="52" fill="#b98a5a"/><rect x="232" y="52" width="14" height="52" fill="#b98a5a"/>
    ${bush(160,22)}${bush(190,22)}${bush(220,22)}${bush(250,22)}${bush(275,50)}${bush(275,80)}
    <line x1="140" y1="128" x2="250" y2="128" stroke="#7a4d22" stroke-width="4"/>${[...Array(8)].map((_,i)=>`<line x1="${142+i*15}" y1="120" x2="${142+i*15}" y2="136" stroke="#7a4d22" stroke-width="3"/>`).join('')}
    <rect x="120" y="150" width="40" height="34" fill="#e8734a"/><rect x="160" y="158" width="60" height="18" fill="#f4b23e"/><rect x="100" y="160" width="20" height="14" fill="none" stroke="#7a4d22" stroke-width="3"/>
    <rect x="150" y="212" width="90" height="10" rx="5" fill="#7b5cff"/><rect x="189" y="204" width="12" height="26" rx="3" fill="#444"/>
    ${bush(26,180)}${bush(26,210)}${bush(40,236)}${bush(72,238)}${bush(104,238)}
    <text x="262" y="244" font-size="34" text-anchor="middle">🐶</text>`);

  /* compass rose; `miss` replaces one letter with a question mark */
  const compass = miss => {
    const P = { N:[110,24], S:[110,206], E:[200,116], W:[20,116] };
    const letters = Object.entries(P).map(([k,[x,y]]) => k===miss
      ? `<circle cx="${x}" cy="${y-7}" r="17" fill="#ffcf3f"/>${T(x, y, '?', 22)}`
      : T(x, y, k, 22)).join('');
    return svg('0 0 220 220', `
      <polygon points="110,36 122,98 110,110 98,98" fill="#d9534f"/><polygon points="110,184 122,122 110,110 98,122" fill="#555"/>
      <polygon points="184,110 122,98 110,110 122,122" fill="#888"/><polygon points="36,110 98,98 110,110 98,122" fill="#888"/>
      <polygon points="150,70 118,102 110,110 122,98" fill="#bbb"/><polygon points="70,70 102,102 110,110 98,98" fill="#bbb"/>
      <polygon points="150,150 118,118 110,110 122,122" fill="#bbb"/><polygon points="70,150 102,118 110,110 98,122" fill="#bbb"/>
      <circle cx="110" cy="110" r="5" fill="#2d2a4a"/>${letters}`);
  };

  /* neighborhood map */
  const block = (x, y, w, h, icon, name, fill='#fff') =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${fill}" stroke="#444" stroke-width="2"/><text x="${x+w/2}" y="${y+h/2-2}" font-size="24" text-anchor="middle">${icon}</text>${T(x+w/2, y+h-8, name, 10.5)}`;
  const nmap = svg('0 0 340 300', `
    <rect width="340" height="300" fill="#cfcfcf"/>
    ${block(8,8,96,74,'🏠',"Catherine's House")}
    ${block(124,8,84,66,'🏠',"David's House")}
    ${block(228,8,104,50,'🌳','Park','#d9f2c4')}
    ${block(8,104,96,70,'🏠',"Ariana's House")}
    ${block(124,96,84,78,'📚','Library','#fff3c4')}
    ${block(228,78,104,96,'🛒','Supermarket')}
    ${block(8,206,96,86,'🏠',"Ruth's House")}
    ${block(228,206,104,86,'🏫','School')}
    <rect x="124" y="206" width="84" height="86" rx="6" fill="#fff" stroke="#444" stroke-width="2"/>
    <polygon points="166,222 172,246 166,250 160,246" fill="#d9534f"/><polygon points="166,278 172,254 166,250 160,254" fill="#555"/>
    <polygon points="194,250 170,244 166,250 170,256" fill="#888"/><polygon points="138,250 162,244 166,250 162,256" fill="#888"/>
    ${T(166,220,'N',11)}${T(166,290,'S',11)}${T(202,254,'E',11)}${T(131,254,'W',11)}
    <path d="M190 104 l12 12 m0 -12 l-12 12" stroke="#e11" stroke-width="4" stroke-linecap="round"/>
    ${T(166,194,'Fifth Street',9,'fill="#555"')}
    <text x="116" y="140" font-size="9" text-anchor="middle" font-family="Fredoka,system-ui,sans-serif" fill="#555" transform="rotate(-90 116 140)">Main Street</text>
    <text x="220" y="130" font-size="9" text-anchor="middle" font-family="Fredoka,system-ui,sans-serif" fill="#555" transform="rotate(-90 220 130)">Berry Drive</text>`);

  /* house plan */
  const plan = svg('0 0 240 160', `
    <rect x="8" y="8" width="224" height="144" fill="#f6f1e6" stroke="#444" stroke-width="5"/>
    <line x1="120" y1="8" x2="120" y2="60" stroke="#444" stroke-width="4"/><line x1="120" y1="92" x2="120" y2="152" stroke="#444" stroke-width="4"/>
    <line x1="8" y1="90" x2="60" y2="90" stroke="#444" stroke-width="4"/><line x1="92" y1="90" x2="120" y2="90" stroke="#444" stroke-width="4"/>
    <path d="M60 90 A32 32 0 0 1 92 122" fill="none" stroke="#444" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="92" y1="90" x2="92" y2="122" stroke="#444" stroke-width="2"/>
    <path d="M120 60 A32 32 0 0 1 152 92" fill="none" stroke="#444" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="120" y1="60" x2="152" y2="60" stroke="#444" stroke-width="2"/>
    <rect x="20" y="20" width="44" height="56" rx="4" fill="#9ec9ff" stroke="#555"/><rect x="24" y="24" width="36" height="14" rx="3" fill="#fff"/>
    <rect x="150" y="100" width="56" height="34" rx="4" fill="#e2b77e" stroke="#555"/><circle cx="140" cy="117" r="6" fill="#b98a5a"/><circle cx="216" cy="117" r="6" fill="#b98a5a"/>
    <rect x="176" y="16" width="48" height="24" rx="4" fill="#b7e3c0" stroke="#555"/>
    <rect x="18" y="106" width="30" height="36" rx="4" fill="#fff" stroke="#555"/><circle cx="33" cy="124" r="9" fill="#bfe3ff"/>
    <line x1="232" y1="60" x2="232" y2="90" stroke="#58b7ff" stroke-width="6"/>`);

  /* world map */
  const wmap = svg('0 0 300 160', `
    <ellipse cx="150" cy="80" rx="146" ry="76" fill="#9fd3f5" stroke="#4a86b8" stroke-width="2"/>
    <path d="M40 40 q20 -18 48 -10 q10 8 0 22 q-12 6 -14 20 q-10 4 -14 -8 q-18 -6 -20 -24z" fill="#8ccf7e"/>
    <path d="M84 84 q14 -4 22 8 q4 16 -6 30 q-4 14 -10 20 q-6 -16 -6 -30 q-8 -14 0 -28z" fill="#8ccf7e"/>
    <path d="M136 36 q16 -10 30 -4 q4 8 -6 14 q-14 4 -22 0 z" fill="#8ccf7e"/>
    <path d="M140 60 q18 -6 30 4 q6 18 -4 36 q-6 14 -14 16 q-8 -18 -10 -30 q-8 -12 -2 -26z" fill="#8ccf7e"/>
    <path d="M172 30 q34 -14 72 0 q12 12 -2 26 q-18 10 -34 8 q-10 12 -22 0 q-16 -12 -14 -34z" fill="#8ccf7e"/>
    <path d="M228 104 q16 -8 28 2 q4 12 -8 16 q-16 2 -20 -18z" fill="#8ccf7e"/>`);

  /* South America with Chile */
  const SA = "60,20 86,10 112,12 140,30 164,52 192,82 182,112 174,134 150,172 130,200 122,216 112,250 98,280 92,294 80,282 74,244 70,200 66,160 50,132 34,96 30,70 44,44";
  const CH = "66,160 77,162 81,200 84,240 90,272 98,284 92,294 80,282 74,244 70,200";
  const base = extra => svg('0 0 220 300', `<rect width="220" height="300" fill="#bfe3ff"/><polygon points="${SA}" fill="#bfe0a3" stroke="#6a8f52" stroke-width="2"/>${extra}`);
  const chile = base(`<polygon points="${CH}" fill="#e11d2e" stroke="#8f0f1a" stroke-width="1.5"/>`);
  const tag = (x, y, l) => `<circle cx="${x}" cy="${y}" r="15" fill="#ffcf3f" stroke="#2d2a4a" stroke-width="2"/>${T(x, y+7, l, 20)}`;
  const abc = base(`<line x1="46" y1="230" x2="74" y2="230" stroke="#2d2a4a" stroke-width="2"/>${tag(32,230,'A')}${tag(130,100,'B')}${tag(84,36,'C')}`);

  window.SOCIAL_PICS = { front, above, door, playground, nmap, plan, wmap, chile, abc,
    compass: compass(null), compassN: compass('N'), compassS: compass('S'), compassE: compass('E'), compassW: compass('W') };
})();
