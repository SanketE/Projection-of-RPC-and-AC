import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Container = styled.div`
  .overlaps-form-container {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlaps-form {
    width: 70%;
    max-width: 800px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }

  div {
    margin-bottom: 20px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #555;
  }

  p {
    font-size: 16px;
    color: #777;
  }

  input[type='submit'] {
    background-color: #134f28;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;

    &:hover {
      background-color: #1a8041;
    }
  }
`;

const Review = ({ total }) => {
  const arraySnapshots = total['arraySchedules'];
  const onPrim = total['onPremisesSchedules'];
  const cloudBackup = total['cloudStoreSchedules'];

  const jsonData = total;

  console.log(total);

  const sendTotalToBackend = async (total) => {
    try {
      // Make a POST request to your backend API endpoint
      const response = await axios.post('http://localhost:5000/database', total);
      // Handle success
      console.log('Total object sent successfully:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error in sending:', error);
    }
  };

  return (
    <Container>
      <div className="overlaps-form-container">
        <form className="overlaps-form" onSubmit={(e) => {
          e.preventDefault();
          sendTotalToBackend(total);
          sessionStorage.setItem('userData', JSON.stringify(jsonData));
        }}>
          <h2>Review Policy</h2>

          <div>
            <h3>Array Snapshots</h3>
            {arraySnapshots.map((schedule, index) => (
              <div key={index}>
                {`Every ${schedule.backupFrequency.value} ${schedule.backupFrequency.unit
                  } between ${schedule.timeRangeStart} to ${schedule.timeRangeEnd}, Retain For: ${schedule.retainFor.value
                  } ${schedule.retainFor.unit}`}              </div>
            ))}
          </div>

          <div>
            <h3>On-Premises Protection Store</h3>
            {onPrim.map((schedule, index) => (
              <div key={index}>
                {`Every ${schedule.backupFrequency.value} ${schedule.backupFrequency.unit
                  } between ${schedule.StartAfter} , Retain For: ${schedule.retainFor.value
                  } ${schedule.retainFor.unit}`}              </div>
            ))}
          </div>

          <div>
            <h3>HPE Cloud Store</h3>
            {cloudBackup.map((schedule, index) => (
              <div key={index}>
                {`Every ${schedule.backupFrequency.value} ${schedule.backupFrequency.unit
                  } between ${schedule.StartAfter} , Retain For: ${schedule.retainFor.value
                  } ${schedule.retainFor.unit}`}              </div>
            ))}
          </div>
          <input type="submit"></input>
        </form>
      </div>
    </Container>
  );
};

export default Review;
