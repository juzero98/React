import React, { useState } from "react";

function SignUp(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("male");

    // name 변경 시 호출
    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    // gender 변경 시 호출
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    // submit 했을 때 호출되는 함수
    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름: 
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                성별: 
                <select value={gender} onChange={handleChangeGender}>
                    <option value="male">남자</option>
                    <option value="female">여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

export default SignUp;