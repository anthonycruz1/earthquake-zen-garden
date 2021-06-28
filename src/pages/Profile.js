import React from 'react';
import DataContext from '../contexts/DataContext';

// Renders Profile component, detailed profile information in an HTML table. Consumes DataContext for link to profile avatarImage, profile.firstName, profile.lastName, profile.phone, profile.email, and profile.bio.
function Profile() {
  return (
    <DataContext.Consumer>
      {(data) => {
        const profile = data.profile;
        return (
          <div className="profile__container container">
            <h3 className="profile__title">Profile</h3>
            <div className="profile__content">
              <img
                className="profile__pic"
                src={profile.avatarImage}
                alt="a profile pic"
              />
              <div className="table-container">
                <table className="profile__table">
                  <tbody>
                    <tr>
                      <th>
                        <div className="profile-table__th">First name</div>
                      </th>
                      <td>{profile.firstName}</td>
                    </tr>
                    <tr>
                      <th>Last name</th>
                      <td>{profile.lastName}</td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>{profile.phone}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{profile.email}</td>
                    </tr>
                    <tr>
                      <th>Bio</th>
                      <td>
                        <div>{profile.bio}</div>
                        {profile.bio}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }}
    </DataContext.Consumer>
  );
}

export default Profile;
