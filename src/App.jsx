import data from "./data";
import React from "react";

const App = () => {
  const [people, setPeople] = React.useState(data);

  const handleClick = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays todays</h3>
        <section>
          {people.map((person) => {
            const { id, name, age, image } = person;
            return (
              <article className="person" key={id}>
                <img src={image} alt={name} className="img" />
                <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </div>
              </article>
            );
          })}
        </section>
        <button type="button" className="btn btn-block" onClick={handleClick}>
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
