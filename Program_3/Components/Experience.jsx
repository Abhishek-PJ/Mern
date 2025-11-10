export default function Experience() {
  const jobs = [
    { id: 1, role: "Frontend Developer", company: "PixelWorks", period: "2022 - Present" },
    { id: 2, role: "Intern", company: "BrightByte", period: "2020 - 2021" },
  ];

  return (
    <div className="card">
      <h3>Experience</h3>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.role} @ {job.company} ({job.period})
          </li>
        ))}
      </ul>
    </div>
  );
}
