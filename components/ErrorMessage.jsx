import React from 'react';

const ErrorMessage = ({ children }) => (
  <div className=" bg-red-600" fade={false} data-testid="error">
    {children}
  </div>
);

export default ErrorMessage;
