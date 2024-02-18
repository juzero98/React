import  React from "react";

const students = [
    {id: 1, name: "Inje"},
    {id: 2, name: "Steve"},
    {id: 3, name: "Bill"},
    {id: 4, name: "Jeff"},
];

function AttendanceBook(props) {
    return(
        <ul>
            {students.map((student) => {
            //{students.map((student, index) => {
                return <li key={student.id}>{student.name}</li> // key로 id를 사용
                //return <li key={`student-id-${student.id}`}>{student.name}</li> // key로 포맷팅 된 id를 사용
                //return <li key={index}>{student.name}</li> // key로 id를 사용
            })}
        </ul>
    );
}
export default AttendanceBook;