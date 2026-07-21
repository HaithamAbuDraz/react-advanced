import type { Student } from '../types/Student';

interface StudentCardProps {
  student: Student;
  showGPA?: boolean;
}

function StudentCard({ student, showGPA = true }: StudentCardProps) {
  const getGrade = (gpa: number): string => {
    if (gpa >= 3.5) return 'Excellent 🏆';
    if (gpa >= 3.0) return 'Good 👍';
    if (gpa >= 2.5) return 'Satisfactory 📚';
    if (gpa >= 2.0) return 'Needs Improvement 📖';
    return 'Academic Warning ⚠️';
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        margin: '0.5rem 0',
      }}
    >
      <h3 style={{ margin: '0 0 0.5rem 0' }}>{student.name}</h3>
      <p style={{ margin: '0.25rem 0' }}>
        <strong>Major:</strong> {student.major}
      </p>
      {showGPA && (
        <>
          <p style={{ margin: '0.25rem 0' }}>
            <strong>GPA:</strong> {student.gpa.toFixed(2)}
          </p>
          <p style={{ margin: '0.25rem 0', fontWeight: 'bold' }}>
            Status: {getGrade(student.gpa)}
          </p>
        </>
      )}
    </div>
  );
}

export default StudentCard;
