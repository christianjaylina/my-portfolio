import React from 'react';

const CertificateViewer = ({ certificate, onClose }) => {
  const handleKeyDown = React.useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

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

  const getCategoryColor = (category) => {
    const colors = {
      Academic: 'bg-blue-100 text-blue-800',
      Professional: 'bg-green-100 text-green-800',
      Technical: 'bg-purple-100 text-purple-800',
      Language: 'bg-orange-100 text-orange-800',
      Other: 'bg-gray-100 text-gray-800'
    };
    return colors[category] || colors.Other;
  };

  const isPDF = certificate.file && certificate.file.includes('data:application/pdf');

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing certificate: ${certificate.title}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
        aria-label="Close certificate viewer (Esc)"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>

      <div className="max-w-4xl w-full mx-4 bg-white rounded-lg shadow-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 lg:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
          <header className="space-y-2">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{certificate.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              {certificate.issueDate && (
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3V2h-2v2H8V2H6v2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H3V8h14v10z"/></svg>
                  <span>Issued: {formatDate(certificate.issueDate)}</span>
                </div>
              )}
              {certificate.expiryDate && (
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3V2h-2v2H8V2H6v2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H3V8h14v10z"/></svg>
                  <span>Expires: {formatDate(certificate.expiryDate)}</span>
                </div>
              )}
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(certificate.category)}`}>
                {certificate.category}
              </span>
              {certificate.credentialId && (
                <span className="text-xs text-gray-500" title="Credential ID">
                  ID: {certificate.credentialId}
                </span>
              )}
            </div>
          </header>

          <section className="space-y-4">
            {certificate.issuer && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">Issuer</h2>
                <p className="text-gray-700">{certificate.issuer}</p>
              </div>
            )}
            {certificate.description && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">Description</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{certificate.description}</p>
              </div>
            )}
          </section>

          {certificate.file && (
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Preview</h2>
              <div className="flex items-center justify-center bg-gray-50 rounded-lg p-4">
                {isPDF ? (
                  <div className="text-center">
                    <svg className="w-20 h-20 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/></svg>
                    <p className="text-sm text-gray-600 mb-4">PDF certificate preview not available inline.</p>
                    <a
                      href={certificate.file}
                      download={`${certificate.title}.pdf`}
                      className="btn-primary"
                    >
                      Download PDF
                    </a>
                  </div>
                ) : (
                  <img
                    src={certificate.file}
                    alt={certificate.title}
                    className="max-h-[60vh] max-w-full object-contain rounded shadow"/>
                )}
              </div>
            </section>
          )}

          <footer className="pt-4 border-t text-center text-sm text-gray-500">Press Esc or click outside to close</footer>
        </div>
      </div>
    </div>
  );
};

export default CertificateViewer;
