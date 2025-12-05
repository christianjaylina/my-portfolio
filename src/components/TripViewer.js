import React, { useState } from 'react';

const TripViewer = ({ trip, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleKeyDown = React.useCallback((e) => {
    if (e.key === 'Escape') {
      if (selectedImage !== null) {
        setSelectedImage(null);
      } else {
        onClose();
      }
    }
  }, [onClose, selectedImage]);

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing trip: ${trip.title}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
        aria-label="Close trip viewer (Esc)"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>

      <div className="max-w-5xl w-full mx-4 bg-white rounded-lg shadow-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 lg:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
          <header className="space-y-2">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{trip.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              {trip.date && (
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3V2h-2v2H8V2H6v2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H3V8h14v10z"/></svg>
                  <span>{formatDate(trip.date)}</span>
                </div>
              )}
              {trip.location && (
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  <span>{trip.location}</span>
                </div>
              )}
              {trip.photos && trip.photos.length > 0 && (
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                  <span>{trip.photos.length} photo{trip.photos.length > 1 ? 's' : ''}</span>
                </div>
              )}
            </div>
          </header>

          {trip.description && (
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Description</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{trip.description}</p>
            </section>
          )}

          {trip.photos && trip.photos.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Photos</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {trip.photos.map((photo, idx) => (
                  <figure 
                    key={idx} 
                    className="group relative cursor-pointer"
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img
                      src={photo}
                      alt={`${trip.title} (${idx + 1})`}
                      className="w-full h-32 md:h-40 object-cover rounded-lg shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-200"/>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all duration-200 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
                      </svg>
                    </div>
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* Full-size Image Viewer */}
          {selectedImage !== null && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-95 z-[60] flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                aria-label="Close image"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
              
              {/* Navigation arrows */}
              {selectedImage > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage - 1); }}
                  className="absolute left-4 text-white hover:text-gray-300 z-10"
                  aria-label="Previous image"
                >
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>
              )}
              {selectedImage < trip.photos.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage + 1); }}
                  className="absolute right-4 text-white hover:text-gray-300 z-10"
                  aria-label="Next image"
                >
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>
              )}

              <img
                src={trip.photos[selectedImage]}
                alt={`${trip.title} (${selectedImage + 1})`}
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
              <div className="absolute bottom-4 text-white text-sm">
                {selectedImage + 1} / {trip.photos.length}
              </div>
            </div>
          )}

          <footer className="pt-4 border-t text-center text-sm text-gray-500">Press Esc or click outside to close</footer>
        </div>
      </div>
    </div>
  );
};

export default TripViewer;
