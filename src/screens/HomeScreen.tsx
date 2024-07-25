import React, { useEffect, useState } from 'react';
import TableComponent from '../components/TableComponent';

type Student = {
  id: number;
  name: string;
};

const HomeScreen: React.FC = () => {
  const [data, setData] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    console.log('Fetching data from API...');
    fetch('http://localhost:5089/api/Student/GetAllStudents')
      .then((response) => {
        console.log('Response received:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data received:', data);
        const students = data.map((item: any) => ({
          id: item.id,
          name: item.name,
        }));
        setData(students);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <TableComponent students={data} />
    </div>
  );
};

export default HomeScreen;
