import React from "react";
import Header from "../components/Header";

const Measurements = () => {
  return (
    <>
      <Header />
      <main className="measurements">
        <div className="container">
            <section className="measurements__wrapper">
              <h1>Some feedbacks</h1>
              <div className="create">
                <button className="btn btn__primary">Create</button>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Fullname</th>
                    <th>Variety</th>
                    <th>Type</th>
                    <th>Color</th>
                    <th>Temperature</th>
                    <th>Graduation</th>
                    <th>PH</th>
                    <th>Observation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Some name</td>
                    <td>A variety</td>
                    <td>A type</td>
                    <td>A color</td>
                    <td>99</td>
                    <td>Some graduation</td>
                    <td>1.4</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestiae corporis laborum, illo veniam at perspiciatis, magni, adipisci esse eveniet quo harum totam.</td>
                  </tr>
                </tbody>
              </table>
            </section>
        </div>
      </main>
    </>
  );
};

export default Measurements;
