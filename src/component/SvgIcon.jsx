import React from 'react';
import Svg, { Path, Line, Circle } from 'react-native-svg';

const PasswordLookSvg = () => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#da1212"   // red
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
            <Circle cx="12" cy="12" r="3" />
        </Svg>
    );
};

const PasswordHideSvg = () => {
    return (
        <Svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#bebebe" // gray
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-eye-off"
            >
            <Path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/>
            <Path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/>
            <Path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/>
            <Path d="m2 2 20 20"/>
        </Svg>
    );
};
export {PasswordLookSvg , PasswordHideSvg}