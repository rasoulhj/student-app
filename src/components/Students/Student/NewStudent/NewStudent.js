import "./NewStudent.css";

const NewStudent = ({
    studentName,
    studentClass,
    studentPhoneNumber,
    studentEmail,
    studentNameHandler,
    studentClassHandler,
    studentPhoneHandler,
    studentEmailHandler,
    addStudent,
}) => {
    return (
        <div className="new-student">
            <h3>اضافه کردن دانش آموز</h3>
            <label>نام و نام خانوادگی</label>
            <input
                type="text"
                value={studentName}
                onChange={studentNameHandler}
            />
            <label>کلاس</label>
            <input
                type="number"
                value={studentClass}
                onChange={studentClassHandler}
            />
            <label>شماره تلفن</label>
            <input
                type="tel"
                value={studentPhoneNumber}
                onChange={studentPhoneHandler}
            />
            <label>ایمیل</label>
            <input
                type="email"
                value={studentEmail}
                onChange={studentEmailHandler}
            />
            <button onClick={() => addStudent()} className="add-btn">
                اضافه کردن
            </button>
        </div>
    );
};

export default NewStudent;
