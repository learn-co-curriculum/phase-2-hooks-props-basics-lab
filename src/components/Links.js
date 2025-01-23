
import React from 'react';

const Links = ({ github, linkedin }) => {
  return (
    <div>
      <h3>Links</h3>
      {github && <p>{github}</p>}
      {linkedin && <p>{linkedin}</p>}
    </div>
  );
};

export default Links;