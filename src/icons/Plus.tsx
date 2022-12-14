import * as React from "react";
import Svg, { Rect } from "react-native-svg";

function Plus() {
	return (
		<Svg width={34} height={34} viewBox="0 0 34 34" fill="none">
			<Rect y={14} width={34} height={6} rx={3} fill="#fff" />
			<Rect
				x={20}
				width={34}
				height={6}
				rx={3}
				transform="rotate(90 20 0)"
				fill="#fff"
			/>
		</Svg>
	);
}

export default Plus;
