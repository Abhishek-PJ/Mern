import React from 'react';

export default function StudentTable({ list }) {
  return (
    <table border='1'>
      <thead>
        <tr>
          <th>Sl No</th>
          <th>Name</th>
          <th>USN</th>
          <th>Total Marks</th>
        </tr>
      </thead>

      <tbody>
        {list.map(s => (
          <tr key={s.slno}>
            <td>{s.slno}</td>
            <td>{s.name}</td>
            <td>{s.usn}</td>
            <td>{s.tmarks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
