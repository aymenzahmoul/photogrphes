"use client"; 

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/page.css';

export default function ReservationForm() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const [message, setMessage] = useState('');

  const onSubmit = async data => {
    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, date: selectedDate }),
      });

      if (response.ok) {
        setMessage('Your reservation has been successfully submitted!');
      } else {
        const result = await response.json();
        setMessage(`Failed to submit: ${result.error}`);
      }
    } catch (error) {
      setMessage(`Failed to submit: ${error.message}`);
    }
  };

  return (
    <div className='parent min-h-screen flex items-center justify-center'> 
      <div className="form-container w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Book Your Photoshoot</h1>
        
        {message && (
          <div className="mb-4 text-green-500 font-bold text-center">
            {message}
          </div>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4"> 
          
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-0">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              {...register("name", { required: "Full Name is required" })}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-0">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="Number Phone"
              {...register("phone", { required: "Phone Number is required", pattern: { value:  /^(?:\+216(?:\d{8})?|\+33(?:\d{9})?|0[1-9]\d{8})$/,message: "Invalid phone number" } })}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
            />
            {errors.phone && <p className="text-red-500 mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="address" className="block text-gray-700 font-medium mb-0">Address</label>
            <input
              id="address"
              type="text"
              placeholder="123 Main St, City, Country"
              {...register("address", { required: "Address is required" })}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
            />
            {errors.address && <p className="text-red-500 mt-1">{errors.address.message}</p>}
          </div>

          <div>
            <label htmlFor="eventType" className="block text-gray-700 font-medium mb-0">Type of Event</label>
            <select
              id="eventType"
              {...register("eventType", { required: "Please select the type of event" })}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
            >
              <option value="">Select an event</option>
              <option value="wedding">Wedding</option>
              <option value="anniversary">Anniversary</option>
              <option value="engagement">Engagement</option>
              <option value="other">Other</option>
            </select>
            {errors.eventType && <p className="text-red-500 mt-1">{errors.eventType.message}</p>}
          </div>

          <div>
            <label htmlFor="date" className="block text-gray-700 font-medium mb-0">Preferred Date</label>
            <DatePicker
              id="date"
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setValue("date", date);
              }}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
              placeholderText="Select a date"
            />
            {errors.date && <p className="text-red-500 mt-1">{errors.date.message}</p>}
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block text-gray-700 font-medium mb-0">Additional Information</label>
            <textarea
              id="additionalInfo"
              rows="4"
              placeholder="Any additional details or requests"
              {...register("additionalInfo")}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-bold p-3 w-full rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
