import React, { createContext, useContext, useState, useEffect } from 'react';
import { forceRefreshData } from '../data/sampleData';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);
  const [certificates, setCertificates] = useState([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    // Force refresh data with latest updates (temporary for development)
    forceRefreshData();
    
    const savedTrips = localStorage.getItem('portfolio-trips');
    const savedCertificates = localStorage.getItem('portfolio-certificates');

    if (savedTrips) {
      setTrips(JSON.parse(savedTrips));
    }
    if (savedCertificates) {
      setCertificates(JSON.parse(savedCertificates));
    }
  }, []);

  // Save trips to localStorage whenever trips change
  useEffect(() => {
    localStorage.setItem('portfolio-trips', JSON.stringify(trips));
  }, [trips]);

  // Save certificates to localStorage whenever certificates change
  useEffect(() => {
    localStorage.setItem('portfolio-certificates', JSON.stringify(certificates));
  }, [certificates]);

  const value = {
    trips,
    certificates,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
