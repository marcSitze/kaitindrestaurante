import React from 'react';

const BaseLayout = ({ children }) => {
  return(
    <div>
      <p>Hello from BaseLout component wrapper</p>
        {children}
      <p>See you soon</p>
    </div>
  )
}

export default BaseLayout;