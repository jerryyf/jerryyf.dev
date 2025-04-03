'use client'

import { TypeAnimation } from 'react-type-animation';

export function TypeWriter() {
  return (
    <TypeAnimation
      sequence={[
        'is a DevOps engineer',
        2000,
        'is a security engineer',
        2000,
        'is a Vim enjoyer',
        2000,
        'is a homelab enthusiast',
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};