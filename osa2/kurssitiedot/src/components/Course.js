const Course = ({course}) => {
    const reducer = (p, c) => p + c
    const total = course.parts.map(part => part.exercises).reduce(reducer)
  
    return (
      <div>
      <h2>{course.name}</h2>
      {course.parts.map(part => 
        <p key={part.id}> {part.name} {part.exercises} </p>
      )}
      <h4>total of {total} exercises</h4>
      </div>
    )
}

export default Course