'use client'

import React, { useEffect } from 'react';

const CredlyBadge = ({ badgeId }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "//cdn.credly.com/assets/utilities/embed.js"
    script.async = true
    document.body.appendChild(script)
    
    return () => {
      // cleanup
      document.body.removeChild(script);
    }
  }, [])

  return (
    <div>
      <div 
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id={badgeId}
        data-share-badge-host="https://www.youracclaim.com">
      </div>
    </div>
  )
}

export default CredlyBadge
