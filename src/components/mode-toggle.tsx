'use client';
import * as React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant='outline'
      size='lg'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='border border-black dark:border-white'
    >
      <SunIcon className='h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <MoonIcon className='absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
