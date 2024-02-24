import { useState, useEffect } from 'react';
import '../../assets/css/Userdetails.css';
import AdminNav from '../../components/AdminNav'

const UserDetails = () => {
  const [jobApplications, setJobApplications] = useState([]);

  useEffect(() => {
    // Fetch job applications from your backend when the component mounts
    // Example: fetchJobApplications();
    // setJobApplications(responseData);
    // For demonstration purpose, I'm using a dummy array
    const dummyData = [
      { id: 1, fullName: 'Chris', email: 'avg@example.com', phoneNumber: '9644455856', Event:'Birthday Party Event' },
      { id: 2, fullName: 'David', email: 'reun@example.com', phoneNumber: '8936374627', Event:'House Warming Event' },
      { id: 3, fullName: 'Jason', email: 'nexon@example.com', phoneNumber: '9536547630', Event:'Bachelor Party Event'},
    ];
    setJobApplications(dummyData);
  }, []);

  const handleDelete = (id) => {
    // Filter out the application with the given ID and update the state
    const updatedApplications = jobApplications.filter(application => application.id !== id);
    setJobApplications(updatedApplications);
  };

  const handleUpdate = (id) => {
    // Handle update logic here
    console.log("Update application with ID:", id);
  };

  return (
    <>
      <AdminNav />
      <div className="admin-dashboard">
        <h2>Party Requests</h2>
        <div className="job-applications">
          {jobApplications.map((application) => (
            <div className="job-application" key={application.id}>
              <h3>{application.fullName}</h3>
              <p><strong>Email:</strong> {application.email}</p>
              <p><strong>Phone:</strong> {application.phoneNumber}</p>
              <p><strong>Event:</strong> {application.Event}</p>
              <div className="btn-group">
                <button className="update-btn" onClick={() => handleUpdate(application.id)}>Update</button>
                <button className="delete-btn" onClick={() => handleDelete(application.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserDetails;

