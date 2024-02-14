import React from "react";

class ConfirmButton2 extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isConfirmed: false // 확인 여부
        };
        
    }

    // Event Handler
    // Arrow Function 형태로 구현
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        )
    }
}

export default ConfirmButton2;