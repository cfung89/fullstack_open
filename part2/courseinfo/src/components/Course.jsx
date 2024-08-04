const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} ex={part.exercises} />
      ))}
    </div>
  );
};

const Part = ({ name, ex }) => {
  return (
    <p>
      {name} {ex}
    </p>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((add, current) => add + current.exercises, 0);

  return <b>total of {total} exercises</b>;
};

export default Course;
