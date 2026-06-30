import React, { createContext, useState, useEffect, useContext } from 'react';
import type { ReactNode } from 'react';

export interface BookingData {
  id: string;
  vehicleName: string;
  brand: string;
  image: string;
  pickupDate: string;
  returnDate: string;
  status: string;
  totalAmount: number;
  location: string;
}

interface BookingContextType {
  bookings: BookingData[];
  addBooking: (booking: BookingData) => void;
  cancelBooking: (id: string) => void;
}

const initialBookings: BookingData[] = [
  {
    id: "BK-7829",
    vehicleName: "Tesla Model S",
    brand: "Tesla",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pickupDate: "2026-07-01",
    returnDate: "2026-07-03",
    status: "Upcoming",
    totalAmount: 20000,
    location: "Mumbai Central"
  },
  {
    id: "BK-6512",
    vehicleName: "Ford Mustang",
    brand: "Ford",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    pickupDate: "2026-05-15",
    returnDate: "2026-05-17",
    status: "Completed",
    totalAmount: 16000,
    location: "Delhi Airport"
  }
];

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookings, setBookings] = useState<BookingData[]>(() => {
    const saved = localStorage.getItem('luxerentals_bookings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialBookings;
      }
    }
    return initialBookings;
  });

  useEffect(() => {
    localStorage.setItem('luxerentals_bookings', JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (booking: BookingData) => {
    setBookings((prev) => [booking, ...prev]);
  };

  const cancelBooking = (id: string) => {
    setBookings((prev) => 
      prev.map(b => b.id === id ? { ...b, status: 'Cancelled' } : b)
    );
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, cancelBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
