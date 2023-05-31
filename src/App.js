import { useEffect, useState, useRef } from "react";
import Students from "./components/Students/Students";
import NewStudent from "./components/Students/Student/NewStudent/NewStudent";
import data from "./data";

import "./App.css";

function App() {

    const inputElement = useRef(null);

    const [studentsState, setStudents] = useState(data);

    const [searchbarValue, setSearchbarValue] = useState("");

    const [arrayHolder, setArrayHolder] = useState([]);

    const [studentName, setStudentName] = useState("");
    const [studentClass, setStudentClass] = useState("");
    const [studentPhoneNumber, setStudentPhoneNumber] = useState("");
    const [studentEmail, setStudentEmail] = useState("");

    const fullNameChangeHandler = (event, id) => {
        const allStudents = [...studentsState];
        const studentIndex = allStudents.findIndex(
            (student) => student.id === id
        );
        const student = { ...allStudents[studentIndex] };
        student.fullName = event.target.value;
        allStudents[studentIndex] = student;
        setStudents(allStudents);
    };

    const classNumberChangeHandler = (event, id) => {
        const allStudents = [...studentsState];
        const studentIndex = allStudents.findIndex(
            (student) => student.id === id
        );
        const student = { ...allStudents[studentIndex] };
        student.classNumber = event.target.value;
        allStudents[studentIndex] = student;
        setStudents(allStudents);
    };

    const phoneNumberChangeHandler = (event, id) => {
        const allStudents = [...studentsState];
        const studentIndex = allStudents.findIndex(
            (student) => student.id === id
        );
        const student = { ...allStudents[studentIndex] };
        student.phoneNumber = event.target.value;
        allStudents[studentIndex] = student;
        setStudents(allStudents);
    };

    const emailChangeHandler = (event, id) => {
        const allStudents = [...studentsState];
        const studentIndex = allStudents.findIndex(
            (student) => student.id === id
        );
        const student = { ...allStudents[studentIndex] };
        student.email = event.target.value;
        allStudents[studentIndex] = student;
        setStudents(allStudents);
    };

    const deleteStudentHandler = (id) => {
        const allStudents = [...studentsState];
        const filteredStudents = allStudents.filter(
            (student) => student.id !== id
        );
        setStudents(filteredStudents);
    };

    useEffect(() => {
        setArrayHolder(studentsState);
        inputElement.current.focus()
    }, []);

    const searchFilterFunction = (event) => {
        const itemData = arrayHolder.filter((item) => {
            const itemData = item.fullName.toUpperCase();
            const textData = event.target.value.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setStudents(itemData);
        setSearchbarValue();
    };

    const studentNameHandler = (event) => {
        setStudentName(event.target.value);
    };

    const studentClassHandler = (event) => {
        setStudentClass(event.target.value);
    };

    const studentPhoneHandler = (event) => {
        setStudentPhoneNumber(event.target.value);
    };

    const setStudentEmailHandler = (event) => {
        setStudentEmail(event.target.value);
    };

    const newStudentHandler = () => {
        const newStudetsState = [...studentsState];
        newStudetsState.push({
            id: studentsState.length + 1,
            fullName: studentName,
            classNumber: studentClass,
            phoneNumber: studentPhoneNumber,
            email: studentEmail,
        });
        setStudents(newStudetsState);
        setStudentName("");
        setStudentClass("");
        setStudentPhoneNumber("");
        setStudentEmail("");
    };

    const executeScroll = () => {
        window.scrollTo(0, inputElement.current.offsetTop)
    }

    return (
        <div>
            <NewStudent
                studentName={studentName}
                studentClass={studentClass}
                studentPhoneNumber={studentPhoneNumber}
                studentEmail={studentEmail}
                studentNameHandler={studentNameHandler}
                studentClassHandler={studentClassHandler}
                studentPhoneHandler={studentPhoneHandler}
                studentEmailHandler={setStudentEmailHandler}
                addStudent={newStudentHandler}
            />
            <input
                ref={inputElement}
                type="text"
                value={searchbarValue}
                onChange={searchFilterFunction}
                placeholder="جستجو کن"
            />
            <Students
                students={studentsState}
                fullNameChange={fullNameChangeHandler}
                classNumberChange={classNumberChangeHandler}
                phoneNumberChange={phoneNumberChangeHandler}
                emailChange={emailChangeHandler}
                deleteStudent={deleteStudentHandler}
            />
            <button onClick={executeScroll}>برگشت به بالا</button>
        </div>
    );
};

export default App;
