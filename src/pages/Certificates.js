import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import CertificateCard from '../components/CertificateCard';
import CertificateViewer from '../components/CertificateViewer';

const Certificates = () => {
  const { certificates } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const categories = ['all', ...new Set(certificates.map(cert => cert.category))];

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            My Certificates
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A collection of my achievements, certifications, and professional accomplishments
          </p>

          {/* Search and Filter */}
          <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search certificates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field w-full sm:w-48"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        {filteredCertificates.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {certificates.length === 0 ? 'No certificates yet' : 'No certificates found'}
            </h3>
            <p className="text-gray-600 mb-6">
              {certificates.length === 0 
                ? 'Start building your achievement collection by adding your first certificate!'
                : 'Try adjusting your search terms or category filter.'
              }
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCertificates.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                viewOnly={true}
                onView={(c) => setSelectedCertificate(c)}
              />
            ))}
          </div>
        )}

        {selectedCertificate && (
          <CertificateViewer
            certificate={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Certificates;
