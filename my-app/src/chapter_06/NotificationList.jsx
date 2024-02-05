import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    { id:1, message: "안녕하세여 오늘 일정 알려드림요" },
    { id:2, message: "오늘 점심은 무엇일까여" },
    { id:3, message: "이제 곧 미팅이 시작됩니다" }
];

var timer;

class NotificationList extends React.Component {
    // 생성자
    constructor(props) {
        super(props);

        // 생성자에서 state 초기화
        // state = notificaionts 배열
        this.state = {
            notifications: []
        };
    }
    // component 생성 함수
    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                
                // state 직접 업데이트 하지 않고 setState 사용
                this.setState({
                    notifications: notifications
                });
            } else {
                // 타이머가 끝나면 state 초기화
                this.setState({
                    notifications: []
                })
                // 타이머 clear
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    // key값 있어야 함
                    return <Notification 
                            key = {notification.id}
                            id = {notification.id}
                            message = {notification.message} />;
                })}
            </div>
        );
    }
}

export default NotificationList;