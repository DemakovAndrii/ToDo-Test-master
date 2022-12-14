import React from "react";
import Svg, { Rect } from "react-native-svg";

const BackArow = ({ color }) => {
	return (
		<Svg width={9} height={15} viewBox="0 0 9 15" fill="none">
			<Rect
				x={7.07108}
				width={2}
				height={10}
				rx={1}
				transform="rotate(45 7.071 0)"
				fill={color}
			/>
			<Rect
				y={7.41418}
				width={2}
				height={10}
				rx={1}
				transform="rotate(-45 0 7.414)"
				fill={color}
			/>
		</Svg>
	);
};

export default BackArow;
