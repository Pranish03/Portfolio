import "./styles/mainComponent.css";

const timeline = [
  {
    date: "Jun 2022",
    description: "Started learning React.js for frontend development",
  },
  {
    date: "Jan 2023",
    description: "Explored UI/UX design using Figma tools",
  },
  {
    date: "Mar 2023",
    description: "Learned Node.js and Express for backend APIs",
  },
  {
    date: "Sep 2024",
    description: "Studied Python for data analysis and science",
  },
  {
    date: "Jun 2025",
    description: "Started machine learning with Python frameworks",
  },
];

const MainComponent = () => {
  return (
    <div>
      <div className="container">
        <div>
          <h2 className="greeting">Hello there!</h2>
          <p>
            I'm Pranish Chaulagain, a Full Stack Web Developer, UI/UX Designer,
            and Data Science & Machine Learning enthusiast.
            <br />
            <br />I build intelligent, user-focused digital products by
            combining code, design, and data.
          </p>
        </div>
        <img src="img.jpeg" alt="img" />
      </div>

      <div>
        {timeline.map((item, index) => (
          <div className="timelines" key={index}>
            <span className="date">{item.date}</span>
            {item.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
