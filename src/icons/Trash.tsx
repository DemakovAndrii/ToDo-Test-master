import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent({color, height}) {
  return (
    <Svg height={height} viewBox="0 0 512 512" width={height} fill={color}>
      <Path d="M400 113.3h-80v-20c0-16.2-13.1-29.3-29.3-29.3h-69.5C205.1 64 192 77.1 192 93.3v20h-80V128h21.1l23.6 290.7c0 16.2 13.1 29.3 29.3 29.3h141c16.2 0 29.3-13.1 29.3-29.3L379.6 128H400v-14.7zm-193.4-20c0-8.1 6.6-14.7 14.6-14.7h69.5c8.1 0 14.6 6.6 14.6 14.7v20h-98.7v-20zm135 324.6v.8c0 8.1-6.6 14.7-14.6 14.7H186c-8.1 0-14.6-6.6-14.6-14.7v-.8L147.7 128h217.2l-23.3 289.9z" />
      <Path d="M249 160H263V401H249z" />
      <Path d="M320 160L305.4 160 294.7 401 309.3 401z" />
      <Path d="M206.5 160L192 160 202.7 401 217.3 401z" />
    </Svg>
  );
}

export default SvgComponent;
