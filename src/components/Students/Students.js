import Student from "./Student/Student";
import propTypes from "prop-types";

const Students = ({
    students,
    fullNameChange,
    classNumberChange,
    phoneNumberChange,
    emailChange,
    deleteStudent,
}) => {
    return (
        <>
            {students.map((student, index) => (
                <Student
                    key={index}
                    {...student}
                    fullNameChange={(event) =>
                        fullNameChange(event, student.id)
                    }
                    classNumberChange={(event) =>
                        classNumberChange(event, student.id)
                    }
                    phoneNumberChange={(event) =>
                        phoneNumberChange(event, student.id)
                    }
                    emailChange={(event) => emailChange(event, student.id)}
                    deleteStudent={() => deleteStudent(student.id)}
                />
            ))}
        </>
    );
};

export default Students;

Students.propTypes = {
    students: propTypes.array.isRequired,
    fullNameChange: propTypes.func.isRequired,
    classNumberChange: propTypes.func.isRequired,
    phoneNumberChange: propTypes.func.isRequired,
    emailChange: propTypes.func.isRequired,
    deleteStudent: propTypes.func.isRequired,
};
