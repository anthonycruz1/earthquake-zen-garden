import React from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../contexts/DataContext';

// Renders Earthquake component, a view of the details of target earthquake in an HTML table. Consumes DataContext for earthquake info.
function Earthquake() {
  const { id } = useParams();

  return (
    <DataContext.Consumer>
      {(data) => {
        // Grabs target earthquake from DataContext
        let earthquake = data.data.features.filter((el) => {
          if (el.id === id) {
            return el;
          }
        });
        earthquake = earthquake[0].properties;

        return (
          <div className="earthquake__container container">
            <h3 className="earthquake__title title">{earthquake.title}</h3>
            <table className="earthquake__table">
              <tbody>
                <tr>
                  <th scope="row">Title</th>
                  <td>{earthquake.title}</td>
                </tr>
                <tr>
                  <th scope="row">Magnitude</th>
                  <td>{earthquake.mag}</td>
                </tr>
                <tr>
                  <th scope="row">Time</th>
                  <td>
                    {new Date(earthquake.time).toLocaleTimeString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Status</th>
                  <td>{earthquake.status}</td>
                </tr>
                <tr>
                  <th scope="row">Tsunami</th>
                  <td>{earthquake.tsunami}</td>
                </tr>
                <tr>
                  <th scope="row">type</th>
                  <td>{earthquake.type}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }}
    </DataContext.Consumer>
  );
}

export default Earthquake;
