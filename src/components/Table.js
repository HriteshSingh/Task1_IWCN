import React, { useState } from 'react';

function Table() {
  // State for managing editable index
  const [editableIndex, setEditableIndex] = useState(null);

  // State for managing edited text
  const [editedText, setEditedText] = useState('');

  // Initial data of the table
  const [data, setData] = useState([
    "Onboarding Call",
    "Google Search Console Access",
    "Google Analytics Access",
    "Website Access",
    "Technical Audit",
    "Anchor Text and Semantic Analysis",
    "Competitor Analysis",
    "Anchor Text / URL Mapping",
    "Google Data Studio Report + Local Reporting Suite",
    "Site Level Optimization",
    "On Page Optimization",
    "Content Creation",
    "Content Publishing",
    "Premium Press Release",
    "Authority Niche Placements",
    "Review Management",
    "Index Links",
    "Video Recap"
  ]);

  // Function to handle editing a table item 
  const handleEdit = (index, text) => {
    setEditableIndex(index);
    setEditedText(text);
  };

  // Function to handle saving the edited text
  const handleSave = (index) => {
    // Update the data array with the edited text
    const newData = [...data];
    newData[index] = editedText;
    setData(newData);

    // Prepare the edited data to be posted to the API
    const editedData = {
      index: index, 
      text: editedText
    };

    // Now you can post `editedData` to your API using fetch or any other method
    console.log("Data ready to post:", editedData);

    // Reset editableIndex and editedText
    setEditableIndex(null);
    setEditedText('');
  };

  return (
    <>
      <div className='table-container'>
        {/* Header */}
        <div className='table-contain'>
            <b>MONTH 1</b>
        </div>
        {/* Table rows */}
        {data.map((item, index) => (
          <div key={index} className='table-contain1' onClick={() => handleEdit(index, item)}>
            {/* Render input field if editable, otherwise render span */}
            {editableIndex === index ? (
              <input
                type='text'
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                onBlur={() => handleSave(index)}
                autoFocus
              />
            ) : (
              <span>{item}</span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Table;
