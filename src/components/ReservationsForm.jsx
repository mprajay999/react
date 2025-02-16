import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Reservations = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [partySize, setPartySize] = useState(2);
  const [specialRequests, setSpecialRequests] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  // Dummy function to simulate fetching available booking slots
  const fetchAvailableSlots = async (date) => {
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        const slots = ['18:00', '18:30', '19:00', '19:30', '20:00'];
        resolve(slots);
        setLoading(false);
      }, 1000);
    });
  };

  useEffect(() => {
    const getSlots = async () => {
      const slots = await fetchAvailableSlots(selectedDate);
      setAvailableSlots(slots);
      setSelectedTime('');
    };
    getSlots();
  }, [selectedDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservationData = {
      date: selectedDate,
      time: selectedTime,
      partySize,
      specialRequests,
    };

    console.log("Submitting Reservation:", reservationData);

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservationData)
      });

      if (response.ok) {
        alert('Reservation successful!');
      } else {
        alert('Reservation failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
    }
  };

  return (
    <section className="py-16 bg-background" id="reservations">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-heading text-center text-primary mb-8">
          Make a Reservation
        </h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
          {/* Date Picker */}
          <div className="mb-4">
            <label className="block text-text-primary mb-2">Select Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MMMM d, yyyy"
              className="w-full px-3 py-2 border rounded"
              minDate={new Date()}
            />
          </div>
          {/* Time Picker / Available Slots */}
          <div className="mb-4">
            <label className="block text-text-primary mb-2">Select Time</label>
            {loading ? (
              <p>Loading available slots...</p>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`px-3 py-2 border rounded transition-colors ${
                      selectedTime === slot
                        ? 'bg-accent text-white'
                        : 'bg-white text-text-primary hover:bg-secondary'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Party Size Selection */}
          <div className="mb-4">
            <label className="block text-text-primary mb-2">Party Size</label>
            <select
              value={partySize}
              onChange={(e) => setPartySize(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            >
              {[1,2,3,4,5,6,7,8,9,10].map((size) => (
                <option key={size} value={size}>
                  {size} {size === 1 ? 'person' : 'people'}
                </option>
              ))}
            </select>
          </div>
          {/* Special Requests */}
          <div className="mb-4">
            <label className="block text-text-primary mb-2">Special Requests</label>
            <textarea
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Any special requests? Let us know..."
              rows={4}
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={!selectedTime}
            className="w-full px-4 py-3 bg-accent text-white rounded hover:bg-opacity-80 transition-colors disabled:opacity-50"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservations;

