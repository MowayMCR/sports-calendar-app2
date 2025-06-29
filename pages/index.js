
import React, { useState } from 'react';

const events = [
  { date: '2025-08-15', sport: 'Football', competition: 'Premier League - Matchday 1', details: 'Liverpool vs AFC Bournemouth, 21:00, Anfield' },
  { date: '2025-08-16', sport: 'Football', competition: 'Premier League - Matchday 1', details: 'Manchester United vs Arsenal, 17:30, Old Trafford' },
  { date: '2025-08-17', sport: 'Rugby', competition: 'Top 14 - J1', details: 'Stade Toulousain vs Racing 92, 21:00' },
  { date: '2025-08-23', sport: 'MotoGP', competition: 'GP Autriche', details: 'Qualifications 14:00, Red Bull Ring' },
  { date: '2025-08-24', sport: 'Formule 1', competition: 'GP Belgique', details: 'Course 14:00, Spa-Francorchamps' },
  { date: '2025-08-25', sport: 'Golf', competition: 'PGA Tour - Tour Championship', details: 'Jour 1, Atlanta' },
  { date: '2025-08-26', sport: 'Golf', competition: 'DP World Tour - Omega European Masters', details: 'Jour 1, Crans-Montana' },
  { date: '2025-08-19', sport: 'Premier Padel', competition: 'Premier Padel Qatar Major', details: 'Matchs à partir de 10:00' },
  { date: '2025-08-20', sport: 'WRC', competition: 'WRC Rallye Allemagne', details: 'ES1 à partir de 09:00' },
  { date: '2025-08-21', sport: 'MotoE', competition: 'MotoE Autriche', details: 'Course 1 à 13:00' },
  { date: '2025-08-22', sport: 'UEFA Champions League', competition: 'Barrages Aller', details: 'Matchs à 21:00' }
];

const colorMap = {
  'Football': 'bg-blue-200',
  'Rugby': 'bg-green-200',
  'MotoGP': 'bg-red-200',
  'Formule 1': 'bg-purple-200',
  'Golf': 'bg-yellow-200',
  'Premier Padel': 'bg-pink-200',
  'WRC': 'bg-orange-200',
  'MotoE': 'bg-indigo-200',
  'UEFA Champions League': 'bg-teal-200'
};

export default function Home() {
  const [selectedDate, setSelectedDate] = useState('');
  const filteredEvents = selectedDate ? events.filter(e => e.date === selectedDate) : [];

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">📅 Sports Calendar (août 2025)</h1>
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
              <div key={idx} className={\`border rounded p-2 mb-2 \${colorMap[event.sport]}\`}>
                <div className="font-bold">{event.competition}</div>
                <div>{event.details}</div>
              </div>
            ))
          ) : (
            <div>Aucun événement ce jour.</div>
          )}
          <button onClick={() => setSelectedDate('')} className="mt-2 px-4 py-2 bg-gray-200 rounded">Effacer la sélection</button>
        </div>
      )}
    </div>
  );
}
