import React from 'react'

const BeeSupport = () => {
  const message = encodeURIComponent(
    `referal code: PGB100\nname: \ndepartment;\nphone:\nhostel name:`
  );
  const whatsappUrl = `https://wa.me/916235401737?text=${message}`;
  return (
    <a href={whatsappUrl} target='_blank' rel='noopener noreferrer'>
      <div className='fixed-component'>BeeSupport</div>
    </a>
  );
}

export default BeeSupport