import React from 'react';

const CertificateCard = ({ certificate, onDelete, onView, viewOnly = false }) => {

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Academic': 'bg-blue-100 text-blue-800',
      'Professional': 'bg-green-100 text-green-800',
      'Technical': 'bg-purple-100 text-purple-800',
      'Language': 'bg-orange-100 text-orange-800',
      'Other': 'bg-gray-100 text-gray-800'
    };
    return colors[category] || colors['Other'];
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onView && onView(certificate);
    }
  };

  const handleCardClick = () => {
    onView && onView(certificate);
  };

  return (
    <>
      <div
        className="card hover:shadow-lg transition-shadow duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        role="button"
        tabIndex={0}
        aria-label={`View certificate: ${certificate.title}`}
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
      >
        {/* Certificate Image/PDF Preview */}
        <div className="h-48 bg-gray-200 overflow-hidden">
          {certificate.file ? (
            <img
              src={certificate.file}
              alt={certificate.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            </div>
          )}
        </div>

        {/* Certificate Content */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
              {certificate.title}
            </h3>
            {!viewOnly && (
              <button
                onClick={(e) => { e.stopPropagation(); onDelete && onDelete(); }}
                className="text-gray-400 hover:text-red-600 transition-colors duration-200 ml-2"
                title="Delete certificate"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
              </button>
            )}
          </div>

          <div className="space-y-2 mb-3">
            <p className="text-sm font-medium text-gray-700">{certificate.issuer}</p>
            {certificate.issueDate && (
              <p className="text-sm text-gray-600">
                Issued: {formatDate(certificate.issueDate)}
              </p>
            )}
            {certificate.expiryDate && (
              <p className="text-sm text-gray-600">
                Expires: {formatDate(certificate.expiryDate)}
              </p>
            )}
          </div>

          {certificate.description && (
            <p className="text-gray-600 text-sm line-clamp-2 mb-3">
              {certificate.description}
            </p>
          )}

          <div className="flex items-center justify-between">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(certificate.category)}`}>
              {certificate.category}
            </span>
            {certificate.credentialId && (
              <span className="text-xs text-gray-500" title="Credential ID">
                ID: {certificate.credentialId.slice(0, 8)}...
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Detailed viewing handled by CertificateViewer outside this component */}
    </>
  );
};

export default CertificateCard;
