import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .overlaps-form-container {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlaps-form {}

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }

  .form-group {
    margin-bottom: 20px;
  }

  label {
    font-size: 16px;
    color: #333;
  }

  input[type='text'] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;

const CheckboxSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CheckboxInput = styled.input`
  margin-right: 8px;
`;

const GetPolicyDetails = ({ setTotal, total }) => {
  const [policyName, setName] = useState('');
  const [applicationType, setType] = useState([]);

  useEffect(() => {
    setTotal(prevTotal => ({
      ...prevTotal,
      policyName,
      applicationType
    }));
  }, [policyName, applicationType, setTotal]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setType(prevTypes => {
      if (prevTypes.includes(value)) {
        return prevTypes.filter(type => type !== value);
      } else {
        return [...prevTypes, value];
      }
    });
    console.log(total);
  };

  return (
    <Container>
      <div className="overlaps-form-container">
        <form className="overlaps-form">
          <h2>Add Protection Policy</h2>
          <div className="form-group">
            <label htmlFor="policyName">Protection Policy Name</label>
            <input
              type="text"
              id="policyName"
              placeholder="Enter Policy Name"
              value={policyName}
              onChange={handleNameChange}
              required
            />
            <label htmlFor="Description">Description</label>
            <input type="text" id="description" />

            <CheckboxSection className="checkbox-section">
              <label>Options:</label>
              <CheckboxItem>
                <label htmlFor="vmware">VMWARE</label>
                <CheckboxInput
                  type="checkbox"
                  id="vmware"
                  name="option"
                  value="VMWARE"
                  onChange={handleCheckboxChange}
                  checked={applicationType.includes('VMWARE')}
                />
              </CheckboxItem>
              <CheckboxItem>
                <label htmlFor="databaseLog">DataBase Log</label>
                <CheckboxInput
                  type="checkbox"
                  id="databaseLog"
                  name="option"
                  value="DataBase Log"
                  onChange={handleCheckboxChange}
                  checked={applicationType.includes('DataBase Log')}
                />
              </CheckboxItem>
              <CheckboxItem>
                <label htmlFor="aws">AWS</label>
                <CheckboxInput
                  type="checkbox"
                  id="aws"
                  name="option"
                  value="AWS"
                  onChange={handleCheckboxChange}
                  checked={applicationType.includes('AWS')}
                />
              </CheckboxItem>
              <CheckboxItem>
                <label htmlFor="hpeArrayVolumes">HPE Array Volumes</label>
                <CheckboxInput
                  type="checkbox"
                  id="hpeArrayVolumes"
                  name="option"
                  value="HPE Array Volumes"
                  onChange={handleCheckboxChange}
                  checked={applicationType.includes('HPE Array Volumes')}
                />
              </CheckboxItem>
            </CheckboxSection>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default GetPolicyDetails;
