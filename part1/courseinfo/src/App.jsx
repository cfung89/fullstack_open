const Header = (course) => {
  console.log(course);

  return <h1>{course.course.name}</h1>;
};

const Part = (part) => {
  console.log(part);

  return (
    <p>
      {part.part} {part.exercise}
    </p>
  );
};

const Content = (part) => {
  console.log(part);

  return (
    <div>
      <Part
        part={part.parts.parts[0].name}
        exercise={part.parts.parts[0].exercises}
      />
      <Part
        part={part.parts.parts[1].name}
        exercise={part.parts.parts[1].exercises}
      />
      <Part
        part={part.parts.parts[2].name}
        exercise={part.parts.parts[2].exercises}
      />
    </div>
  );
};

const Total = (ex) => {
  console.log(ex);

  return (
    <p>
      Number of exercises{" "}
      {ex.parts.parts[0].exercises +
        ex.parts.parts[1].exercises +
        ex.parts.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  );
};

export default App;
