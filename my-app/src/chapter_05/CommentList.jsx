import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "박주영",
        comment: "하이항힝항하ㅣㅇ히아하ㅣㅇ히이"
    },
    {
        name: "유재석",
        comment: "안냐세요 유재석입니다."
    },
    {
        name: "박명수",
        comment: "저는 ISTP입니더"
    }

];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    );
}

export default CommentList;