export default function Education() {
  const education = [
    { id: 1, school: "National Public School", year: "2014", grade: "A+" },
    { id: 2, school: "RV College of Engineering", year: "2020", grade: "8.6 CGPA" },
  ];

  return (
    <div className="card">
      <h3>Education</h3>
      <ul>
        {education.map((edu) => (
          <li key={edu.id}>
            {edu.school} — {edu.year} — {edu.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}
