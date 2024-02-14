import React from "react";

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isConfirmed: false // 확인 여부
        };

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    // Event Handler
    // bind 방식으로 처리
    handleConfirm() {
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

export default ConfirmButton;