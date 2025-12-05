import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import TripCard from '../components/TripCard';
import TripViewer from '../components/TripViewer';

const TripJournal = () => {
  const { trips } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrip, setSelectedTrip] = useState(null);

  const filteredTrips = trips.filter(trip =>
    trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Educational Trip Journal
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Document and share your educational journeys, tours, and memorable experiences
          </p>

          {/* Search */}
          <div className="flex justify-center">
            <div className="w-full sm:w-96">
              <input
                type="text"
                placeholder="Search trips by title, location, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field"
              />
            </div>
          </div>
        </div>

        {/* Trips Grid */}
        {filteredTrips.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {trips.length === 0 ? 'No trips yet' : 'No trips found'}
            </h3>
            <p className="text-gray-600 mb-6">
              {trips.length === 0 
                ? 'Start documenting your educational journeys by adding your first trip!'
                : 'Try adjusting your search terms to find what you\'re looking for.'
              }
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrips.map((trip) => (
              <TripCard
                key={trip.id}
                trip={trip}
                viewOnly={true}
                onView={(t) => setSelectedTrip(t)}
              />
            ))}
          </div>
        )}

        {selectedTrip && (
          <TripViewer trip={selectedTrip} onClose={() => setSelectedTrip(null)} />
        )}
      </div>
    </div>
  );
};

export default TripJournal;
