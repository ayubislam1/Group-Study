import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Button } from '../components/ui/button';
import useAuth from '../hooks/useAuth';


const AssignmentDetail = () => {
  const [assignment, setAssignment] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    // Fetch the assignment details
    axios.get(`http://localhost:7000/assignments/${id}`)
      .then(response => {
        setAssignment(response.data);
      })
      .catch(err => console.error("Error fetching assignment details: ", err));
  }, [id]);

  const handleSubmit = async (googleDocsLink, note) => {
    try {
      const response = await axios.post(`http://localhost:7000/submit-assignment`, {
        assignmentId: id,
        googleDocsLink,
        note,
        email: user.email
      });
      alert("Assignment submitted successfully!");
      setModalOpen(false);
    } catch (error) {
      alert("Error submitting the assignment.");
    }
  };

  if (!assignment) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">{assignment.title}</h1>
      <p>{assignment.description}</p>
      <p>Marks: {assignment.marks}</p>
      <p>Difficulty: {assignment.difficulty}</p>
      <img src={assignment.image} alt={assignment.title} className="w-full h-60 object-cover rounded-md mt-5" />
      
      <Button onClick={() => setModalOpen(true)} className="mt-5">Take Assignment</Button>

      {modalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-md shadow-lg w-96">
            <h2 className="text-xl mb-3">Submit Your Assignment</h2>
            <input
              type="text"
              placeholder="Google Docs Link"
              className="w-full p-2 border rounded-md mb-3"
            />
            <textarea
              placeholder="Quick Note"
              className="w-full p-2 border rounded-md mb-3"
            />
            <div className="flex justify-end gap-3">
              <Button onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button onClick={() => handleSubmit(googleDocsLink, note)}>Submit</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentDetail;
