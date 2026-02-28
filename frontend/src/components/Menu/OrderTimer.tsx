import React from 'react';

interface OrderTimerProps {
  closingTime: string; // The time when ordering closes
  title: string;
}

const OrderTimer: React.FC<OrderTimerProps> = ({ closingTime, title }) => {
  return (
    <div className="bg-orange-50/90 border-l-4 border-orange-500 p-4 rounded-md shadow-sm backdrop-blur-sm">
      <div className="flex items-center">
        <span className="text-orange-700 font-bold mr-2">🕒 {title}:</span>
        <span className="text-orange-800 font-medium">Orders close at {closingTime}</span>
      </div>
    </div>
  );
};

export default OrderTimer;
