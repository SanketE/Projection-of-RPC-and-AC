import React, { useState } from 'react';


const AddSchedule = ({ count,onSave,onCancel}) => {
    const [scheduleId] = useState(count)
    const [scheduleName ] = useState(`Array_Snapshot_${count}`);

    const [backupFrequency, setBackupFrequency] = useState({ value: '', unit: 'hours' });
    const [StartAfter, setStartAfter] = useState('');

    const [retainFor, setRetainFor] = useState({ value: '', unit: 'hours' });



    const handleSave = () => {
        console.log('array snap Saved!');
        onSave({
            scheduleId,
            scheduleName,
            backupFrequency,
            StartAfter,
            retainFor
        });
    };

    const handleCancel = () => {
        console.log('arraysnap Cancelled!');
        onCancel()
    };


    const handleBackupFrequencyChange = (e) => {
        setBackupFrequency({ ...backupFrequency, value: e.target.value });
    };

    const handleBackupFrequencyUnitChange = (e) => {
        setBackupFrequency({ ...backupFrequency, unit: e.target.value });
    };

    const handleStartAfterChange = (e) => {
        setStartAfter(e.target.value);
    };



    const handleRetainForChange = (e) => {
        setRetainFor({ ...retainFor, value: e.target.value });
    };

    const handleRetainForUnitChange = (e) => {
        setRetainFor({ ...retainFor, unit: e.target.value });
    };

    return (
        <div className="form-container">
        
            <label htmlFor="backupFrequency">Backup Frequency:</label>
            <input type="number" id="backupFrequency" value={backupFrequency.value} onChange={handleBackupFrequencyChange} />
            <select value={backupFrequency.unit} onChange={handleBackupFrequencyUnitChange}>
                <option value="hours">Hours</option>
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
            </select>

            <label htmlFor="timeRange">StartAfter:</label>
            <input type="time" id="StartAfter" value={StartAfter} onChange={handleStartAfterChange} />


            <label htmlFor="retainFor">Retain For:</label>
            <input type="number" id="retainFor" value={retainFor.value} onChange={handleRetainForChange} />
            <select value={retainFor.unit} onChange={handleRetainForUnitChange}>
                <option value="hours">Hours</option>
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
                <option value="months">Months</option>

            </select>

            <div className="button-group">
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleSave}>Save</button>
            </div>

        </div>

    );
};

export default AddSchedule;