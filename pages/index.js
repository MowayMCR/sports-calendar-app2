
import React, { useState } from 'react';

const events = [
  { date: '2025-08-15', sport: 'Football', competition: 'Premier League - Matchday 1', details: 'Liverpool vs AFC Bournemouth, 21:00, Anfield' },
  { date: '2025-08-16', sport: 'Football', competition: 'Premier League - Matchday 1', details: 'Manchester United vs Arsenal, 17:30, Old Trafford' },
  { date: '2025-08-17', sport: 'Rugby', competition: 'Top 14 - J1', details: 'Stade Toulousain vs Racing 92, 21:00' }
];

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(null);

  const filteredEvents = selectedDate ? events.filter(e => e.date === selectedDate) : [];

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">Sports Calendar App</h1>
      <input
        type="date"
        onChange={(e) => setSelectedDate(e.target.value)}
        className="border p-2 rounded"
      />
      {selectedDate && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Événements le {selectedDate}</h2>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, idx) => (
              <div key={idx} className="border rounded p-2 mb-2 bg-gray-50">
                <div className="font-bold">{event.competition}</div>
                <div>{event.details}</div>
              </div>
            ))
          ) : (
            <div>Aucun événement ce jour.</div>
          )}
        </div>
      )}
    </div>
  );
}
