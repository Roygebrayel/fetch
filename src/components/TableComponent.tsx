import React from 'react';

type Student = {
  id: number;
  name: string;
}

type TableComponentProps = {
  students: Student[];
}

const TableComponent: React.FC<TableComponentProps> = ({ students }) => {
  return (
    <div>
      <h1>Students List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
