import React from 'react';
import { MdAppRegistration } from "react-icons/md";


function DocsPreview() {
  return (
    <div className='max-w-screen-lg mx-auto px-4 py-6'>
      <h1 className='text-2xl font-bold text-center mb-6'>Document Preview</h1>
      <div className='bg-amber-300 p-6 rounded-lg shadow-lg flex flex-col space-y-6'>
        <h2 className='text-xl font-semibold'>How to get started</h2>
        <ol className="relative border-l-4 border-gray-400 space-y-8">
          {steps.map((step, index) => (
            <li key={index} className="relative">
              <span className="absolute -left-5 top-1 flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                {step.icon}
              </span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              {step.details.map((detail, i) => (
                <p key={i} className="text-sm text-gray-700">{detail}</p>
              ))}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

const steps = [
  {
    title: 'Registration',
    details: ['Your personal details'],
    icon: <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 16" fill="currentColor"><path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"/></svg>
  },
  {
    title: 'Verify your account',
    details: ['1. Personal ID/Company Affidavit (required)', '2. Certificate related to your business (if any)'],
    icon: <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 16" fill="currentColor"><path d="M16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Z"/></svg>
  },
  {
    title: 'Review',
    details: ['Approve or Reject by Admin'],
    icon: <svg className="w-5 h-5 text-gray-500" viewBox="0 0 18 20" fill="currentColor"><path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2Z"/></svg>
  },
  {
    title: 'Confirmation',
    details: ['Account approved'],
    icon: <svg className="w-5 h-5 text-gray-500" viewBox="0 0 18 20" fill="currentColor"><path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7Z"/></svg>
  },
  {
    title: 'Create Shop',
    details: ['1. Choose sub-category', '2. Fill in your shop details'],
    icon: <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 16" fill="currentColor"><path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16Z"/></svg>
  }
];

export default DocsPreview;