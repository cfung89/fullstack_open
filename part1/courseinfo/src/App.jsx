const Header = (course) => {
    console.log(course);
    
    return (
        <h1>{course.course}</h1>
    )
}

const Part = (part) => {
    console.log(part);

    return (
        <p>
            {part.part} {part.exercise}
        </p>
    )
}

const Content = (part) => {
    console.log(part);

    return (
        <div>
            <Part part={part.p1} exercise={part.e1} />
            <Part part={part.p2} exercise={part.e2} />
            <Part part={part.p3} exercise={part.e3} />
        </div>
    )
}

const Total = (ex) => {
    console.log(ex);

    return (
        <p>Number of exercises {ex.total}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;

    return (
        <div>
            <Header course={course} />
            <Content p1={part1} p2={part2} p3={part3} e1={exercises1} e2={exercises2} e3={exercises3} />
            <Total total={exercises1 + exercises2 + exercises3} />
        </div>
    )
}

export default App
