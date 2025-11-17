import React, { useState } from 'react';
import StudentTable from './StudentTable';

export default function Student() {
  const initial = [
    { slno: 1, name: 'stud1', usn: 'rvce1', tmarks: 150 },
    { slno: 2, name: 'stud2', usn: 'rvce2', tmarks: 145 },
  ];

  const [list, setList] = useState(initial);
  const [name, setName] = useState('');
  const [usn, setUsn] = useState('');
  const [tmarks, setTmarks] = useState('');

  function addStudent(e) {
    e.preventDefault();

    const newStud = {
      slno: list.length + 1,
      name,
      usn,
      tmarks: Number(tmarks),
    };

    setList([...list, newStud]);
    setName('');
    setUsn('');
    setTmarks('');
  }

  return (
    <div>
      <h2>Student List</h2>

      {/* Table Component */}
      <StudentTable list={list} />

      <br />

      {/* Add Student Form */}
      <form onSubmit={addStudent}>
        <input
          value={name}
          placeholder='Name'
          onChange={e => setName(e.target.value)}
        />

        <input
          value={usn}
          placeholder='USN'
          onChange={e => setUsn(e.target.value)}
        />

        <input
          value={tmarks}
          placeholder='Marks'
          onChange={e => setTmarks(e.target.value)}
        />

        <button>Add</button>
      </form>
    </div>
  );
}
