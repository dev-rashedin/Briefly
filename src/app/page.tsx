import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className='px-4 md:px-12 flex flex-col justify-center items-center h-[85vh] mx-auto text-center'>
      <h1 className='text-4xl md:text-[50px] lg:text-[60px] xl:text-[72px] font-extrabold leading-tight max-w-4xl text-brief-dark dark:text-brief-white'>
        Too Much Text? <br /> Let Briefly Handle It.
      </h1>

      <p className='mt-4 text-base lg:text-lg xl:text-xl text-brief-dark/80 dark:text-brief-white/80  max-w-3xl md:max-w-4xl'>
        AI-powered summaries for your PDFs and text files  — fast, accurate, effortless.
      </p>

      <Link href='/summarize' className='mt-8'>
        <Button size='lg' className='px-6 py-3 text-base'>
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default Home;
