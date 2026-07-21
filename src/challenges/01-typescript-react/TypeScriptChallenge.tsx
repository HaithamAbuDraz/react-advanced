import StudentCard from './components/StudentCard';
import type { Student } from './types/Student';

function TypeScriptChallenge() {
  const students: Student[] = [
    { id: 1, name: 'Alice Johnson', major: 'Computer Science', gpa: 3.8 },
    { id: 2, name: 'Bob Smith', major: 'Engineering', gpa: 3.2 },
    { id: 3, name: 'Carol Davis', major: 'Mathematics', gpa: 2.7 },
    { id: 4, name: 'David Brown', major: 'Physics', gpa: 4.0 },
    { id: 5, name: 'Eva Martinez', major: 'Biology', gpa: 2.3 },
    { id: 6, name: 'Frank Wilson', major: 'Computer Science', gpa: 3.9 },
    { id: 7, name: 'Grace Lee', major: 'Engineering', gpa: 2.9 },
    { id: 8, name: 'Henry Adams', major: 'Mathematics', gpa: 3.1 },
  ];

  return (
    <div>
      <h2>📚 Student List</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1rem',
        }}
      >
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default TypeScriptChallenge;
