import  { useState } from 'react';
import '../../assets/css/Job.css'

import AdminNav from '../../components/AdminNav';

function ViewJobs() {
  // Mock job data
  const mockJobs = [
    { id: 1, title: 'Birthday party', description: 'Transport your guests to a magical world with a themed birthday party, whether its a glamorous Hollywood affair, a whimsical garden tea party, or a thrilling superhero extravaganza. ', location: 'TamilNadu', Price: '20,000' },
    { id: 2, title: 'Bachelor party', description: 'A full of fun and a celebration for a soon-to-be groom organized and attended primarily by friends,', location: 'Kerala', Price: '100' },
    { id: 3, title: 'House warming ', description: 'A warm, friendly housewarming party invitation sets the tone and sparks excitement for guests who’ll be seeing your place for the first time. No matter the size or theme of your celebration, sending out housewarming party invitations lets your guests know a bit about what to expect, when they should show up, and what they should bring.', location: 'Karnataka', Price: '30,000' },
    { id: 4, title: 'Baby Shower ', description: 'A baby is a blank slate. Heres hoping that yours only inherits the good traits', location: 'Telangana', Price: '50,000' },
    { id: 5, title: 'New Born', description: 'A baby is a blank slate. Heres hoping that yours only inherits the good traits', location: 'Andhra', Price: '70,000' },
    { id: 6, title: 'Surprise Party', description: 'Im truly touched by your thoughtful gift', location: 'Kashmir', Price: '21,000' },
    // Add more mock job data as needed
  ];

  const [jobs] = useState(mockJobs);

  return (
    <>
    <AdminNav/>
    <div className="view-jobs-container">
      <h2><center>PARTY PLANNING</center></h2>
      <br></br>
      
      <div className="job-list">
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Location: {job.location}</p>
            <p>Price: {job.salary}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default ViewJobs;
