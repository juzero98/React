import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16
    },
    messageText: {
        color: "black",
        fontSize: 16
    }
};

class Notification extends React.Component {
    // 생성자
    constructor(props) {
        super(props);

        this.state = {};
    }

    // 생성
    componentDidMount() {
        console.log(`${this.props.id} componentDidMount() called`);
    }

    // 수정
    componentDidUpdate() {
        console.log(`${this.props.id} componentDidUpdate() called`);
    }

    // 종료
    componentWillUnmount() {
        console.log(`${this.props.id} componentWillUnmount() called`);
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;