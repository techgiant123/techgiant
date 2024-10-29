// Icon.tsx
import React from "react";

// Define the props type
interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const Icon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill = "currentColor",
}) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
     xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      height={height}
      width={width}
      viewBox="0 0 535 510"
      enable-background="new 0 0 535 510"
     xmlSpace="preserve"
    >
      <path
        fill="#FCFCFC"
        opacity="1.000000"
        stroke="none"
        d="
M364.000000,511.000000 
   C242.695557,511.000000 121.891113,511.000000 1.043332,511.000000 
   C1.043332,341.069550 1.043332,171.139069 1.043332,1.104296 
   C179.221115,1.104296 357.442322,1.104296 535.831787,1.104296 
   C535.831787,170.999863 535.831787,340.999908 535.831787,511.000000 
   C478.805695,511.000000 421.652863,511.000000 364.000000,511.000000 
M427.860687,305.054474 
   C428.503052,304.209869 429.145416,303.365265 429.993347,302.064667 
   C430.270325,301.891449 430.547333,301.718262 431.198425,302.212189 
   C432.949890,302.746887 434.701385,303.281586 436.452850,303.816284 
   C436.699066,303.446228 436.945282,303.076202 437.191498,302.706146 
   C436.062592,301.341370 434.933655,299.976562 433.953552,298.081665 
   C434.372955,297.746063 434.792328,297.410461 435.959625,297.060913 
   C436.571381,296.202728 437.183136,295.344543 438.091797,293.984253 
   C439.286713,292.933624 440.481628,291.883026 442.275177,291.106232 
   C442.964050,291.166962 443.652893,291.227722 444.341766,291.288452 
   C443.762207,290.821686 443.182617,290.354919 442.858368,289.258423 
   C443.848450,288.351318 444.838562,287.444244 446.059845,287.215057 
   C446.309326,288.653992 446.558838,290.092926 446.852936,291.789154 
   C448.333801,289.750336 449.205475,287.443085 450.857086,286.496155 
   C454.874756,284.192627 455.020599,284.446991 451.638245,280.158112 
   C452.442902,279.447083 453.247559,278.736053 454.699158,278.337372 
   C457.704834,279.947296 459.882782,278.356018 461.151855,276.007233 
   C461.903107,274.616791 461.396423,272.546631 461.764587,270.207977 
   C462.562225,269.479065 463.359894,268.750122 464.689117,268.008881 
   C464.709045,267.317719 464.729004,266.626526 464.194244,265.354980 
   C461.413940,264.610748 458.637390,263.236420 455.852722,263.219635 
   C427.536224,263.049072 399.218414,263.086182 370.900970,263.094299 
   C356.637024,263.098358 350.609528,269.154236 350.578125,283.514801 
   C350.507080,315.994873 350.465149,348.475037 350.413544,380.955139 
   C350.406738,385.233917 350.412598,389.512695 350.412598,394.668549 
   C354.158081,392.331604 356.932068,390.600800 360.395416,388.907257 
   C360.938019,388.291962 361.480652,387.676636 362.358490,386.479919 
   C367.204285,382.232086 372.050079,377.984283 377.352844,374.373474 
   C379.248047,374.155396 381.143219,373.937286 383.038422,373.719208 
   C382.567871,372.027283 382.097351,370.335327 382.001221,368.995117 
   C381.877319,368.876678 381.753418,368.758270 382.430817,368.832214 
   C388.007935,368.434967 389.968048,365.514099 389.055267,358.467834 
   C389.506622,357.892059 389.958008,357.316284 391.254547,356.863281 
   C394.993195,356.441925 394.739014,354.934998 392.448456,352.083038 
   C393.480865,349.741028 394.513275,347.399017 396.109283,344.917725 
   C396.124329,343.957458 396.139404,342.997223 396.053101,341.272644 
   C396.244843,340.534851 396.436615,339.797028 397.234100,338.813416 
   C397.173462,337.213104 397.112823,335.612823 396.890320,333.085754 
   C396.890320,325.330872 396.890320,317.576019 396.890320,309.161377 
   C400.122528,309.161377 402.914795,309.371338 405.664612,309.118835 
   C411.882263,308.547882 418.079010,307.748657 424.946503,307.099731 
   C425.647552,306.432129 426.348602,305.764557 427.030487,305.016357 
   C427.030487,305.016357 427.103760,305.055084 427.860687,305.054474 
M302.713135,262.505219 
   C302.121918,262.851776 301.530731,263.198334 300.333252,263.935913 
   C294.956451,266.232513 291.535370,270.166321 289.653015,276.306671 
   C289.448212,277.586243 289.065063,278.865753 289.064331,280.145416 
   C289.035675,329.534088 289.032990,378.922729 289.084503,428.311371 
   C289.086151,429.875885 289.693115,431.439758 290.165680,433.880920 
   C290.432037,436.992523 290.698395,440.104156 291.019836,443.836823 
   C292.032715,443.693756 293.045593,443.550690 294.463654,442.893097 
   C295.828033,441.856964 297.192413,440.820831 299.371796,439.915955 
   C305.212463,439.295197 311.790802,432.780975 311.889496,426.937592 
   C316.901886,422.144409 321.875214,417.309570 326.936859,412.568939 
   C332.859924,407.021484 335.284637,400.454193 335.223907,392.157898 
   C334.911102,349.419861 335.046844,306.678558 334.962860,263.196228 
   C332.981934,263.101227 331.000977,263.006226 328.096252,263.097076 
   C319.726166,263.046814 311.356079,262.996582 302.713135,262.505219 
M167.500397,263.120941 
   C145.338776,263.144196 123.176613,263.104584 101.016403,263.293915 
   C98.940346,263.311646 96.876633,264.774536 94.807205,265.566467 
   C95.787750,267.373535 96.430969,269.504120 97.803444,270.935333 
   C106.900993,280.422302 116.397011,289.537231 125.277672,299.218750 
   C131.820831,306.351929 139.227386,310.175110 149.056671,309.240784 
   C153.592636,308.809631 158.203568,309.167297 162.972931,309.167297 
   C162.972931,317.821594 163.004333,325.476349 162.964645,333.130768 
   C162.919434,341.852325 165.184036,349.848663 169.974594,357.186279 
   C179.573029,371.888031 191.912964,383.863800 206.172256,393.955261 
   C206.905487,394.474182 207.901779,394.621399 208.780365,394.943451 
   C208.999695,394.338043 209.209930,394.027252 209.211395,393.715485 
   C209.387833,356.064087 209.703705,318.412262 209.614380,280.761383 
   C209.588257,269.757690 202.987656,263.587555 191.992783,263.218933 
   C184.169632,262.956696 176.331726,263.133698 167.500397,263.120941 
M224.776154,288.499847 
   C224.736694,323.644196 224.762253,358.788818 224.598572,393.932587 
   C224.568649,400.353058 225.571747,406.178040 230.237091,410.917084 
   C240.157394,420.994110 249.989899,431.160797 260.088226,441.056183 
   C261.755341,442.689789 264.588867,443.133026 266.883331,444.126404 
   C267.915039,441.722961 269.812744,439.330780 269.844238,436.914307 
   C270.152374,413.266388 270.193390,389.614441 270.223450,365.963562 
   C270.259857,337.315735 270.322968,308.667084 270.141083,280.020264 
   C270.077271,269.965973 264.192139,263.633148 254.740555,263.258545 
   C245.927536,262.909241 237.088562,263.266602 228.263412,263.142792 
   C225.350021,263.101929 224.584122,264.281403 224.654373,267.013885 
   C224.829849,273.839111 224.753906,280.670776 224.776154,288.499847 
M224.818741,192.499969 
   C224.818741,209.904663 224.818741,227.309372 224.818741,244.892334 
   C235.621567,244.892334 245.780685,245.410522 255.860077,244.736618 
   C264.727936,244.143723 270.346924,236.513824 270.222198,228.569305 
   C269.864166,205.763382 270.158142,182.947479 270.164215,160.135498 
   C270.172211,129.996780 270.188995,99.857887 270.047424,69.719795 
   C270.038635,67.854065 269.081726,65.582954 267.775452,64.314392 
   C267.166351,63.722836 264.180878,64.579140 263.097015,65.629761 
   C251.993591,76.392815 241.088547,87.360069 230.063202,98.204323 
   C226.002579,102.198250 224.532562,106.887680 224.581635,112.575546 
   C224.808578,138.882416 224.765900,165.191605 224.818741,192.499969 
M290.343689,214.496613 
   C290.455261,219.823654 290.367340,225.164139 290.725433,230.474548 
   C291.256226,238.346375 298.015900,244.745087 305.873749,245.039291 
   C309.533356,245.176315 313.201477,245.094864 316.865723,245.098862 
   C322.777313,245.105331 328.688904,245.100586 334.501617,245.100586 
   C334.717133,243.841492 334.870575,243.361282 334.871429,242.880829 
   C334.947937,199.743103 335.180878,156.604034 334.838745,113.469528 
   C334.801270,108.746346 332.564240,103.069527 329.435211,99.521255 
   C319.435211,88.181282 308.602386,77.567696 297.900482,66.864250 
   C296.479065,65.442657 293.956146,65.122429 291.943359,64.292130 
   C291.389587,66.229088 290.355255,68.165359 290.352448,70.103119 
   C290.283173,117.901237 290.323151,165.699509 290.343689,214.496613 
M209.085800,127.526817 
   C209.085800,123.593178 209.085800,119.659546 209.085800,115.725906 
   C208.649658,115.434189 208.213501,115.142471 207.777359,114.850754 
   C201.695663,119.564285 195.393661,124.022232 189.573639,129.039307 
   C172.160217,144.050323 160.302277,161.741577 162.783081,186.193375 
   C163.247238,190.768417 162.849472,195.430908 162.849472,200.237747 
   C157.383347,200.237747 152.418381,200.447586 147.477570,200.191498 
   C138.768524,199.740143 131.682068,202.699783 125.603020,208.972275 
   C115.976646,218.904938 106.039261,228.535767 96.264420,238.325211 
   C93.720055,240.873398 94.493706,243.595840 98.090332,244.616119 
   C99.503746,245.017075 101.047081,245.091476 102.531311,245.091934 
   C131.843842,245.100861 161.156616,245.141022 190.468796,245.028915 
   C202.489380,244.982941 209.060226,238.430832 209.089844,226.448334 
   C209.170517,193.805466 209.101959,161.162231 209.085800,127.526817 
M367.794769,127.703262 
   C362.589691,123.502579 357.384583,119.301895 351.244629,114.346725 
   C351.041412,117.291504 350.888092,118.564178 350.875916,119.838203 
   C350.769348,130.999344 350.649261,142.160583 350.607086,153.322083 
   C350.517181,177.144211 350.327942,200.967316 350.461761,224.788422 
   C350.541931,239.052719 356.887360,245.124771 370.993256,245.121521 
   C399.815765,245.114868 428.638519,245.101181 457.460358,244.942276 
   C459.588898,244.930542 461.710846,243.731277 463.835876,243.084061 
   C463.005402,241.069168 462.664825,238.589661 461.265625,237.114090 
   C451.531921,226.849655 441.587555,216.784729 431.691681,206.674500 
   C427.263794,202.150711 421.863007,200.028671 415.524658,200.111664 
   C409.421448,200.191589 403.316376,200.128952 396.852173,200.128952 
   C396.852173,192.862946 396.733337,186.065231 396.880035,179.273224 
   C397.099915,169.094284 394.584930,159.634216 388.392731,151.637650 
   C382.101257,143.512985 375.017731,136.001663 367.794769,127.703262 
z"
      />
      <path
        fill="#040404"
        opacity="1.000000"
        stroke="none"
        d="
M168.000397,263.117798 
   C176.331726,263.133698 184.169632,262.956696 191.992783,263.218933 
   C202.987656,263.587555 209.588257,269.757690 209.614380,280.761383 
   C209.703705,318.412262 209.387833,356.064087 209.211395,393.715485 
   C209.209930,394.027252 208.999695,394.338043 208.780365,394.943451 
   C207.901779,394.621399 206.905487,394.474182 206.172256,393.955261 
   C191.912964,383.863800 179.573029,371.888031 169.974594,357.186279 
   C165.184036,349.848663 162.919434,341.852325 162.964645,333.130768 
   C163.004333,325.476349 162.972931,317.821594 162.972931,309.167297 
   C158.203568,309.167297 153.592636,308.809631 149.056671,309.240784 
   C139.227386,310.175110 131.820831,306.351929 125.277672,299.218750 
   C116.397011,289.537231 106.900993,280.422302 97.803444,270.935333 
   C96.430969,269.504120 95.787750,267.373535 94.807205,265.566467 
   C96.876633,264.774536 98.940346,263.311646 101.016403,263.293915 
   C123.176613,263.104584 145.338776,263.144196 168.000397,263.117798 
z"
      />
      <path
        fill="#030303"
        opacity="1.000000"
        stroke="none"
        d="
M359.705994,388.869995 
   C356.932068,390.600800 354.158081,392.331604 350.412598,394.668549 
   C350.412598,389.512695 350.406738,385.233917 350.413544,380.955139 
   C350.465149,348.475037 350.507080,315.994873 350.578125,283.514801 
   C350.609528,269.154236 356.637024,263.098358 370.900970,263.094299 
   C399.218414,263.086182 427.536224,263.049072 455.852722,263.219635 
   C458.637390,263.236420 461.413940,264.610748 464.337280,265.983215 
   C464.372681,267.081390 464.265106,267.551300 464.157532,268.021210 
   C463.359894,268.750122 462.562225,269.479065 461.296112,270.566589 
   C458.569183,273.291840 456.310730,275.658447 454.052246,278.025055 
   C453.247559,278.736053 452.442902,279.447083 451.226685,280.561676 
   C449.152954,282.822540 447.490814,284.679840 445.828644,286.537140 
   C444.838562,287.444244 443.848450,288.351318 442.481018,289.614899 
   C441.961273,290.258392 441.818909,290.545410 441.676575,290.832397 
   C440.481628,291.883026 439.286713,292.933624 437.634155,294.317200 
   C436.521545,295.458374 435.866608,296.266602 435.211670,297.074829 
   C434.792328,297.410461 434.372955,297.746063 433.577515,298.426331 
   C432.409088,299.695679 431.616730,300.620361 430.824341,301.545044 
   C430.547333,301.718262 430.270325,301.891449 429.578278,302.369568 
   C428.476715,303.468018 427.790253,304.261566 427.103760,305.055084 
   C427.103760,305.055084 427.030487,305.016357 426.744049,305.087982 
   C425.733154,305.787170 425.008698,306.414734 424.284241,307.042297 
   C418.079010,307.748657 411.882263,308.547882 405.664612,309.118835 
   C402.914795,309.371338 400.122528,309.161377 396.890320,309.161377 
   C396.890320,317.576019 396.890320,325.330872 396.830383,333.885925 
   C396.723053,336.143799 396.675720,337.601532 396.628387,339.059235 
   C396.436615,339.797028 396.244843,340.534851 395.914124,341.907959 
   C395.698669,343.381195 395.622162,344.219086 395.545654,345.057007 
   C394.513275,347.399017 393.480865,349.741028 392.174011,352.687347 
   C391.402832,354.441284 390.906097,355.590912 390.409363,356.740540 
   C389.958008,357.316284 389.506622,357.892059 388.724731,358.876495 
   C386.139313,362.403381 383.884430,365.521606 381.629578,368.639832 
   C381.753418,368.758270 381.877319,368.876678 381.510437,368.925385 
   C379.645050,370.482605 378.270477,372.109528 376.895905,373.736450 
   C372.050079,377.984283 367.204285,382.232086 361.881683,386.821625 
   C360.838593,387.732208 360.272308,388.301086 359.705994,388.869995 
z"
      />
      <path
        fill="#020202"
        opacity="1.000000"
        stroke="none"
        d="
M224.777496,287.999878 
   C224.753906,280.670776 224.829849,273.839111 224.654373,267.013885 
   C224.584122,264.281403 225.350021,263.101929 228.263412,263.142792 
   C237.088562,263.266602 245.927536,262.909241 254.740555,263.258545 
   C264.192139,263.633148 270.077271,269.965973 270.141083,280.020264 
   C270.322968,308.667084 270.259857,337.315735 270.223450,365.963562 
   C270.193390,389.614441 270.152374,413.266388 269.844238,436.914307 
   C269.812744,439.330780 267.915039,441.722961 266.883331,444.126404 
   C264.588867,443.133026 261.755341,442.689789 260.088226,441.056183 
   C249.989899,431.160797 240.157394,420.994110 230.237091,410.917084 
   C225.571747,406.178040 224.568649,400.353058 224.598572,393.932587 
   C224.762253,358.788818 224.736694,323.644196 224.777496,287.999878 
z"
      />
      <path
        fill="#020202"
        opacity="1.000000"
        stroke="none"
        d="
M224.819275,191.999969 
   C224.765900,165.191605 224.808578,138.882416 224.581635,112.575546 
   C224.532562,106.887680 226.002579,102.198250 230.063202,98.204323 
   C241.088547,87.360069 251.993591,76.392815 263.097015,65.629761 
   C264.180878,64.579140 267.166351,63.722836 267.775452,64.314392 
   C269.081726,65.582954 270.038635,67.854065 270.047424,69.719795 
   C270.188995,99.857887 270.172211,129.996780 270.164215,160.135498 
   C270.158142,182.947479 269.864166,205.763382 270.222198,228.569305 
   C270.346924,236.513824 264.727936,244.143723 255.860077,244.736618 
   C245.780685,245.410522 235.621567,244.892334 224.818741,244.892334 
   C224.818741,227.309372 224.818741,209.904663 224.819275,191.999969 
z"
      />
      <path
        fill="#040404"
        opacity="1.000000"
        stroke="none"
        d="
M290.343689,213.997192 
   C290.323151,165.699509 290.283173,117.901237 290.352448,70.103119 
   C290.355255,68.165359 291.389587,66.229088 291.943359,64.292130 
   C293.956146,65.122429 296.479065,65.442657 297.900482,66.864250 
   C308.602386,77.567696 319.435211,88.181282 329.435211,99.521255 
   C332.564240,103.069527 334.801270,108.746346 334.838745,113.469528 
   C335.180878,156.604034 334.947937,199.743103 334.871429,242.880829 
   C334.870575,243.361282 334.717133,243.841492 334.501617,245.100586 
   C328.688904,245.100586 322.777313,245.105331 316.865723,245.098862 
   C313.201477,245.094864 309.533356,245.176315 305.873749,245.039291 
   C298.015900,244.745087 291.256226,238.346375 290.725433,230.474548 
   C290.367340,225.164139 290.455261,219.823654 290.343689,213.997192 
z"
      />
      <path
        fill="#030303"
        opacity="1.000000"
        stroke="none"
        d="
M209.089172,128.022980 
   C209.101959,161.162231 209.170517,193.805466 209.089844,226.448334 
   C209.060226,238.430832 202.489380,244.982941 190.468796,245.028915 
   C161.156616,245.141022 131.843842,245.100861 102.531311,245.091934 
   C101.047081,245.091476 99.503746,245.017075 98.090332,244.616119 
   C94.493706,243.595840 93.720055,240.873398 96.264420,238.325211 
   C106.039261,228.535767 115.976646,218.904938 125.603020,208.972275 
   C131.682068,202.699783 138.768524,199.740143 147.477570,200.191498 
   C152.418381,200.447586 157.383347,200.237747 162.849472,200.237747 
   C162.849472,195.430908 163.247238,190.768417 162.783081,186.193375 
   C160.302277,161.741577 172.160217,144.050323 189.573639,129.039307 
   C195.393661,124.022232 201.695663,119.564285 207.777359,114.850754 
   C208.213501,115.142471 208.649658,115.434189 209.085800,115.725906 
   C209.085800,119.659546 209.085800,123.593178 209.089172,128.022980 
z"
      />
      <path
        fill="#030303"
        opacity="1.000000"
        stroke="none"
        d="
M368.037903,127.962494 
   C375.017731,136.001663 382.101257,143.512985 388.392731,151.637650 
   C394.584930,159.634216 397.099915,169.094284 396.880035,179.273224 
   C396.733337,186.065231 396.852173,192.862946 396.852173,200.128952 
   C403.316376,200.128952 409.421448,200.191589 415.524658,200.111664 
   C421.863007,200.028671 427.263794,202.150711 431.691681,206.674500 
   C441.587555,216.784729 451.531921,226.849655 461.265625,237.114090 
   C462.664825,238.589661 463.005402,241.069168 463.835876,243.084076 
   C461.710846,243.731277 459.588898,244.930542 457.460358,244.942276 
   C428.638519,245.101181 399.815765,245.114868 370.993256,245.121521 
   C356.887360,245.124771 350.541931,239.052719 350.461761,224.788422 
   C350.327942,200.967316 350.517181,177.144211 350.607086,153.322083 
   C350.649261,142.160583 350.769348,130.999344 350.875916,119.838203 
   C350.888092,118.564178 351.041412,117.291504 351.244629,114.346725 
   C357.384583,119.301895 362.589691,123.502579 368.037903,127.962494 
z"
      />
      <path
        fill="#040404"
        opacity="1.000000"
        stroke="none"
        d="
M290.295898,275.926331 
   C291.535370,270.166321 294.956451,266.232513 300.913025,263.803955 
   C301.990540,263.430115 302.488281,263.188202 302.985992,262.946320 
   C311.356079,262.996582 319.726166,263.046814 328.898804,263.161133 
   C331.476257,263.462891 333.251129,263.700653 335.026031,263.938416 
   C335.046844,306.678558 334.911102,349.419861 335.223907,392.157898 
   C335.284637,400.454193 332.859924,407.021484 326.936859,412.568939 
   C321.875214,417.309570 316.901886,422.144409 311.515259,427.374390 
   C306.946320,431.802399 302.751587,435.793549 298.556824,439.784668 
   C297.192413,440.820831 295.828033,441.856964 293.870178,443.152557 
   C292.506042,443.346588 291.735413,443.281189 290.964752,443.215759 
   C290.698395,440.104156 290.432037,436.992523 290.248413,433.067505 
   C290.410736,396.286713 290.528412,360.319366 290.552612,324.351959 
   C290.563477,308.210144 290.387238,292.068207 290.295898,275.926331 
z"
      />
      <path
        fill="#DDE0DF"
        opacity="1.000000"
        stroke="none"
        d="
M289.974457,276.116516 
   C290.387238,292.068207 290.563477,308.210144 290.552612,324.351959 
   C290.528412,360.319366 290.410736,396.286713 290.174500,432.629028 
   C289.693115,431.439758 289.086151,429.875885 289.084503,428.311371 
   C289.032990,378.922729 289.035675,329.534088 289.064331,280.145416 
   C289.065063,278.865753 289.448212,277.586243 289.974457,276.116516 
z"
      />
      <path
        fill="#DDE0DF"
        opacity="1.000000"
        stroke="none"
        d="
M298.964294,439.850342 
   C302.751587,435.793549 306.946320,431.802399 311.471741,427.708862 
   C311.790802,432.780975 305.212463,439.295197 298.964294,439.850342 
z"
      />
      <path
        fill="#E2E5E4"
        opacity="1.000000"
        stroke="none"
        d="
M445.944244,286.876099 
   C447.490814,284.679840 449.152954,282.822540 451.110077,280.868774 
   C455.020599,284.446991 454.874756,284.192627 450.857086,286.496155 
   C449.205475,287.443085 448.333801,289.750336 446.852936,291.789154 
   C446.558838,290.092926 446.309326,288.653992 445.944244,286.876099 
z"
      />
      <path
        fill="#E2E5E4"
        opacity="1.000000"
        stroke="none"
        d="
M454.375702,278.181213 
   C456.310730,275.658447 458.569183,273.291840 461.141541,270.853638 
   C461.396423,272.546631 461.903107,274.616791 461.151855,276.007233 
   C459.882782,278.356018 457.704834,279.947296 454.375702,278.181213 
z"
      />
      <path
        fill="#E7E9E8"
        opacity="1.000000"
        stroke="none"
        d="
M382.030212,368.736023 
   C383.884430,365.521606 386.139313,362.403381 388.702637,359.155945 
   C389.968048,365.514099 388.007935,368.434967 382.030212,368.736023 
z"
      />
      <path
        fill="#E7E9E8"
        opacity="1.000000"
        stroke="none"
        d="
M377.124390,374.054962 
   C378.270477,372.109528 379.645050,370.482605 381.323242,368.749512 
   C382.097351,370.335327 382.567871,372.027283 383.038422,373.719208 
   C381.143219,373.937286 379.248047,374.155396 377.124390,374.054962 
z"
      />
      <path
        fill="#E2E5E4"
        opacity="1.000000"
        stroke="none"
        d="
M431.011383,301.878632 
   C431.616730,300.620361 432.409088,299.695679 433.503113,298.691376 
   C434.933655,299.976562 436.062592,301.341370 437.191498,302.706146 
   C436.945282,303.076202 436.699066,303.446228 436.452850,303.816284 
   C434.701385,303.281586 432.949890,302.746887 431.011383,301.878632 
z"
      />
      <path
        fill="#DDE0DF"
        opacity="1.000000"
        stroke="none"
        d="
M334.994446,263.567322 
   C333.251129,263.700653 331.476257,263.462891 329.360718,263.068176 
   C331.000977,263.006226 332.981934,263.101227 334.994446,263.567322 
z"
      />
      <path
        fill="#E7E9E8"
        opacity="1.000000"
        stroke="none"
        d="
M390.831970,356.801910 
   C390.906097,355.590912 391.402832,354.441284 392.123047,353.069214 
   C394.739014,354.934998 394.993195,356.441925 390.831970,356.801910 
z"
      />
      <path
        fill="#E2E5E4"
        opacity="1.000000"
        stroke="none"
        d="
M396.931244,338.936340 
   C396.675720,337.601532 396.723053,336.143799 396.911316,334.349304 
   C397.112823,335.612823 397.173462,337.213104 396.931244,338.936340 
z"
      />
      <path
        fill="#DDE0DF"
        opacity="1.000000"
        stroke="none"
        d="
M290.992310,443.526306 
   C291.735413,443.281189 292.506042,443.346588 293.667603,443.409851 
   C293.045593,443.550690 292.032715,443.693756 290.992310,443.526306 
z"
      />
      <path
        fill="#E2E5E4"
        opacity="1.000000"
        stroke="none"
        d="
M395.827454,344.987366 
   C395.622162,344.219086 395.698669,343.381195 395.964844,342.290100 
   C396.139404,342.997223 396.124329,343.957458 395.827454,344.987366 
z"
      />
      <path
        fill="#E2E5E4"
        opacity="1.000000"
        stroke="none"
        d="
M424.615356,307.071014 
   C425.008698,306.414734 425.733154,305.787170 426.753632,305.128296 
   C426.348602,305.764557 425.647552,306.432129 424.615356,307.071014 
z"
      />
      <path
        fill="#E2E5E4"
        opacity="1.000000"
        stroke="none"
        d="
M427.482239,305.054779 
   C427.790253,304.261566 428.476715,303.468018 429.475494,302.597595 
   C429.145416,303.365265 428.503052,304.209869 427.482239,305.054779 
z"
      />
      <path
        fill="#E2E5E4"
        opacity="1.000000"
        stroke="none"
        d="
M435.585632,297.067871 
   C435.866608,296.266602 436.521545,295.458374 437.485687,294.568237 
   C437.183136,295.344543 436.571381,296.202728 435.585632,297.067871 
z"
      />
      <path
        fill="#E2E5E4"
        opacity="1.000000"
        stroke="none"
        d="
M441.975861,290.969299 
   C441.818909,290.545410 441.961273,290.258392 442.353333,289.929779 
   C443.182617,290.354919 443.762207,290.821686 444.341766,291.288452 
   C443.652893,291.227722 442.964050,291.166962 441.975861,290.969299 
z"
      />
      <path
        fill="#E7E9E8"
        opacity="1.000000"
        stroke="none"
        d="
M360.050720,388.888611 
   C360.272308,388.301086 360.838593,387.732208 361.714050,387.112335 
   C361.480652,387.676636 360.938019,388.291962 360.050720,388.888611 
z"
      />
      <path
        fill="#DDE0DF"
        opacity="1.000000"
        stroke="none"
        d="
M302.849548,262.725769 
   C302.488281,263.188202 301.990540,263.430115 301.216187,263.608459 
   C301.530731,263.198334 302.121918,262.851776 302.849548,262.725769 
z"
      />
      <path
        fill="#E2E5E4"
        opacity="1.000000"
        stroke="none"
        d="
M464.423309,268.015045 
   C464.265106,267.551300 464.372681,267.081390 464.614624,266.273438 
   C464.729004,266.626526 464.709045,267.317719 464.423309,268.015045 
z"
      />
    </svg>
  );
};

export default Icon;