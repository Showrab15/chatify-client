import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Message = () => {
  const messages = [
    {
      id: 1,
      sender: 'John Doe',
      content: 'Hello!',
      content: 'Hello!',
      content: 'Hello!',
      content: 'Hello!',
      content: 'Hello!',
      content: 'Hello!',
      content: 'Hello!',
      content: 'Hello!',
      timestamp: '12:30 PM',
    },
    {
      id: 2,
      sender: 'Jane Smith',
      content: 'Hi there!',
      content: 'Hi there!',
      content: 'Hi there!',
      timestamp: '12:35 PM',
      content: 'Hi there!',
      content: 'Hi there!',
      content: 'Hi there!',
      content: 'Hi there!',
    },
    // Add more message objects as needed
  ];

  const handleSendText = () => {
    // Handle sending text message
  };

  const handleSendPhoto = () => {
    // Handle sending photo message
  };

  const handleSendVideo = () => {
    // Handle sending video message
  };

  return (
    <div className="max-w-lg mx-auto">
      <nav className=" bg-gray-200 px-4 py-2 z-10">
   <Link to="/convo">     <button className="p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button></Link>
        <h2 className="text-lg font-medium text-gray-800">John Doe</h2>
      </nav>
      <div className="pt-16">
        <div className="max-h-96 overflow-y-auto bg-white rounded-lg shadow-md">
          <div className="p-4">
            {messages.map((message) => (
              <div key={message.id} className="flex flex-col mb-4">
                <div
                  className={`${
                    message.sender === 'John Doe' ? 'ml-auto bg-blue-500 text-white' : 'mr-auto bg-gray-200'
                  } py-2 px-4 rounded-lg`}
                >
                  <p>{message.content}</p>
                </div>
                <span className="text-gray-500 text-sm mt-1">{message.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 bg-white rounded-lg shadow-md p-4">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
<button className="p-2 rounded-full bg-blue-500 text-white" onClick={handleSendVideo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-blue-500 text-white" onClick={handleSendPhoto}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-green-600 text-white"  onClick={handleSendText} >
          <FaArrowAltCircleRight className="w-8  h-8"></FaArrowAltCircleRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
