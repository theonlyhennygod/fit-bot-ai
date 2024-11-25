'use client';

import Image from 'next/image';
import Chat from './components/Chat';

export default function Home() {
  return (
    <main className="App">
      <div className='container'>
        <div className='logoBox'>
          <Image src="/logo.png" alt="Fitness logo" width="380" height="90" />
          <p>Take your fitness game to the next level with Fit-Bot.</p>
        </div>
        <Chat />
      </div>
    </main>
  )
}