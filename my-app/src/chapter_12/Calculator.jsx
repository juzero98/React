import React,{ useState } from "react";
import TemperatureInput from "./TemperatureInput";

// 물 끓는지 여부 판단하는 컴포넌트
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>
}

// 섭씨로 변환
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

// 화씨로 변환
function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// 입력된 temperature을 입력된 convert 함수로 변환한 값을 반환ㄴ
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return ""; // input 값이 숫자가 아닐 경우 empty 문자열 반환
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    // 섭씨가 변경됐을 경우
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    // 화씨가 변경됐을 경우
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    // 입력된게 섭씨인지 화씨인지에 따라 tryConvert()로 값 변경
    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature; // f면 c로 변환, c면 그대로
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature; // c면 f로 변환, f면 그대로

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    )
}

export default Calculator;


