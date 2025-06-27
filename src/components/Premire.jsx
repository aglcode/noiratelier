import React from 'react'
import TextPressure from '@/components/ui/TextPressure.jsx'
import video from '../assets/video.mp4';

const Premire = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[var(--color-dark)]">
      <video
        src={video}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div style={{ width: '100%', maxWidth: 1200, height: 180, position: 'relative', padding: '0 2rem' }}>
          <TextPressure
            text="Plume"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            minFontSize={36}
            className="text-2xl sm:text-5xl font-normal text-center leading-tight heading"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
    </main>
  )
}

export default Premire