import React, { useState } from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';

// Renders Home component, information about multiple earthquakes in an HTML table. Each earthquake is a separate row. Clicking on the header of any column orders the rows of the table according to contents in that column.
function Home() {
  const [earthquakeData, setEarthquakeData] = useState(data.data.features);

  // order keeps track of which columns are ordered and how. Can be null, 'lowToHigh', or 'highToLow'. Used to help order rows in table.
  const [order, setOrder] = useState({
    title: null,
    magnitude: null,
    time: null,
  });

  // Sorts clicked column according to its contents
  const sortColumn = (e) => {
    const column = e.target.dataset.column; // identifies clicked column
    const newData = earthquakeData.slice();
    let newOrder;

    newData.sort((a, b) => {
      if (order[column] === 'lowToHigh') {
        newOrder = 'highToLow';
        // if user orders by title, use localeCompare to sort in alphabetical order
        return column === 'title'
          ? b.properties[column].localeCompare(a.properties[column])
          : b.properties[column] - a.properties[column];
      } else {
        newOrder = 'lowToHigh';
        // if user orders by title, use localeCompare to sort in alphabetical order
        return column === 'title'
          ? a.properties[column].localeCompare(b.properties[column])
          : a.properties[column] - b.properties[column];
      }
    });
    setOrder({ ...order, [column]: newOrder }); // sets new order of clicked column in state
    setEarthquakeData(newData);
  };

  return (
    <div className="home__container">
      <h3 className="home__title title">{data.data.metadata.title}</h3>
      <div className="Home__content">
        <table className="home__table">
          <colgroup>
            <col className="table__title"></col>
            <col className="table__mag"></col>
            <col className="table__time"></col>
          </colgroup>
          <thead className="home__table-thead">
            <tr>
              <td
                data-column="title"
                style={{ cursor: 'pointer' }}
                onClick={sortColumn}
              >
                Title
              </td>
              <td
                data-column="mag"
                style={{ cursor: 'pointer' }}
                onClick={sortColumn}
              >
                Magnitude
              </td>
              <td
                data-column="time"
                style={{ cursor: 'pointer' }}
                onClick={sortColumn}
              >
                Time
              </td>
            </tr>
          </thead>
          <tbody className="home__table-tbody">
            {earthquakeData.map((feature) => {
              return (
                <tr key={feature.id}>
                  <td>
                    <Link to={`earthquake/${feature.id}`}>
                      {feature.properties.title}
                    </Link>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    {feature.properties.mag}
                  </td>
                  <td>
                    {new Date(feature.properties.time).toLocaleTimeString(
                      'en-US',
                      {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      }
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
