const educationData = [
  {
    degree: "10th Standard",
    institute: "Sheth B M Primary School, Patan",
    year: "2020 - 2021",
  },
  {
    degree: "12th Science",
    institute: "Eklavya School Of Science, Patan",
    year: "2022 - 2023",
  },
  {
    degree: "B.Tech - Information Technology",
    institute: "Sankalchand Patel College of Engineering",
    year: "2023 - 2027",
  }
];

const Education = () => {
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <h2 style={{ fontSize: "40px", fontWeight: 700, marginBottom: "10px" }}>
        Education 🎓
      </h2>
      <p style={{ color: "#9ca3af", marginBottom: "50px" }}>
        My academic journey that shaped my passion and skills
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          width: "80%",
        }}
      >
        {educationData.map((edu, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 0 12px rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
              textAlign: "center",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
            }}
          >
            <h3 style={{ fontSize: "20px", fontWeight: "600" }}>{edu.degree}</h3>
            <p style={{ color: "#9ca3af", margin: "5px 0" }}>{edu.institute}</p>
            <span style={{ fontWeight: "bold", color: "#cfcfcf" }}>{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
