import React from 'react';
import './ResultTable.css';

const ResultTable = ({ data }) => {
  const generateGoogleMapsLink = (postOffice) => {
    const query = `${postOffice.Name}, ${postOffice.Circle}, ${postOffice.District}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  };

  return (
    <div className="tab">
      <div className="subtebdiv">
        <table className="mytab" border="1px">
          <thead>
            <tr>
              <th>No.</th>
              <th>Post Office Name</th>
              <th>Branch Type</th>
              <th>State</th>
              <th>District</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {data.map((postOffice, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{postOffice.Name}</td>
                <td>{postOffice.BranchType}</td>
                <td>{postOffice.Circle}</td>
                <td>{postOffice.District}</td>
                <td>
                  <a href={generateGoogleMapsLink(postOffice)} target="_blank" rel="noopener noreferrer">
                    View on Map
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultTable;
