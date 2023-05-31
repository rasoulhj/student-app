import propTypes from "prop-types";

import "./Student.css";

const Student = ({
    id,
    fullName,
    classNumber,
    phoneNumber,
    email,
    fullNameChange,
    classNumberChange,
    phoneNumberChange,
    emailChange,
    deleteStudent,
}) => {
    return (
        <div className="student">
            <label>شماره دانش آموزی: {id}</label>

            <label>نام و نام خانوادگی</label>
            <input type="text" value={fullName} onChange={fullNameChange} />

            <label>کلاس</label>
            <input
                type="number"
                value={classNumber}
                onChange={classNumberChange}
            />

            <label>شماره تلفن</label>
            <input
                type="tel"
                value={phoneNumber}
                onChange={phoneNumberChange}
            />

            <label>ایمیل</label>
            <input type="email" value={email} onChange={emailChange} />
            <br />
            <br />
            <button className="btn-delete" onClick={deleteStudent}>
                حذف
            </button>
        </div>
    );
};

export default Student;

Student.propTypes = {
    id: propTypes.number.isRequired,
    fullName: propTypes.string.isRequired,
    classNumber: propTypes.number.isRequired,
    phoneNumber: propTypes.number.isRequired,
    email: propTypes.string.isRequired,
    deleteStudent: propTypes.func.isRequired
};
