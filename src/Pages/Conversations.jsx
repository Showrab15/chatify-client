import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Conversations = () => {
  const conversations = [
    {
      id: 1,
      name: 'John Doe',
      message: 'Hello!',
      timestamp: '12:30 PM',
    },
    {
      id: 2,
      name: 'Jane Smith',
      message: 'How are you?',
      timestamp: '1:45 PM',
    },
    {
        id: 2,
        name: 'Jane Smith',
        message: 'How are you?',
        timestamp: '1:45 PM',
      }.id, {
        id: 2,
        name: 'Jane Smith',
        message: 'How are you?',
        timestamp: '1:45 PM',
      },
      {
        id: 2,
        name: 'Jane Smith',
        message: 'How are you?',
        timestamp: '1:45 PM',
      },
      {
        id: 2,
        name: 'Jane Smith',
        message: 'How are you?',
        timestamp: '1:45 PM',
      },
      {
        id: 2,
        name: 'Jane Smith',
        message: 'How are you?',
        timestamp: '1:45 PM',
      },
      {
        id: 2,
        name: 'Jane Smith',
        message: 'How are you?',
        timestamp: '1:45 PM',
      },
      {
        id: 2,
        name: 'Jane Smith',
        message: 'How are you?',
        timestamp: '1:45 PM',
      },
      {
        id: 2,
        name: 'Jane Smith',
        message: 'How are you?',
        timestamp: '1:45 PM',
      },
      {
        id: 2,
        name: 'Jane Smith',
        message: 'How are you?',
        timestamp: '1:45 PM',
      },
      {
        id: 2,
        name: 'Jane Smith',
        message: 'How are you?',
        timestamp: '1:45 PM',
      },
      {
        id: 2,
        name: 'Jane Smith',
        message: 'How are you?',
        timestamp: '1:45 PM',
      },
      {
        id: 2,
        name: 'Jane Smith',
        message: 'How are you?',
        timestamp: '1:45 PM',
      },
      {
        id: 2,
        name: 'Jane Smith',
        message: 'How are you?',
        timestamp: '1:45 PM',
      },
      {
        id: 2,
        name: 'Jane Smith',
        message: 'How are you?',
        timestamp: '1:45 PM',
      },
      
  ];

  const [showUserOptions, setShowUserOptions] = useState(false);

  const handleUserOptions = () => {
    setShowUserOptions(!showUserOptions);
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <nav className="flex items-center justify-between bg-gray-200 px-4 py-2">
        <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border w-32 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute px-4 right-3 top-1/2 transform -translate-y-1/2">
         <FaSearch></FaSearch>
          </span>
        </div>          <h2 className="text-lg text-center mx-auto  font-medium text-gray-800">Chat Conversations</h2>
        </div>
        <div className="relative inline-block text-left">
          <button
            type="button"
            className="rounded-full flex items-center focus:outline-none"
            onClick={handleUserOptions}
          >
            <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/7p6DShF/SHOWRAB.jpg" alt="User" />
          </button>
          {showUserOptions && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg">
              <button
                type="button"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full text-left"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
     <Link to="/message">
     <ul className="divide-y divide-gray-200">
        {conversations.map((conversation) => (
          <li key={conversation.id} className="px-4 py-3 cursor-pointer hover:bg-gray-100">
            <div className="flex items-center">
              <img className="w-10 h-10 rounded" src="https://i.ibb.co/7p6DShF/SHOWRAB.jpg" alt="Avatar" />
              <div className="ml-3">
                <p className="text-gray-800 font-medium">{conversation.name}</p>
                <p className="text-gray-600">{conversation.message}</p>
              </div>
              <div className="ml-auto text-gray-500 text-sm">{conversation.timestamp}</div>
            </div>
          </li>
        ))}
      </ul>
     </Link>
    </div>
  );
};

export default Conversations;
