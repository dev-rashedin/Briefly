"use client"
import { useState } from 'react';
import { Button } from './ui/button';

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

const LoginButton = () => {

  const [open, setOpen] = useState(false);



  return (
    <div>
      <button onClick={() => setOpen(true)}>
        <Button size='lg'>Login</Button>
      </button>
      <Dialog open={open} onClose={setOpen} className='relative z-10'>
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-gray-500/50 dark:bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in'
        />

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center text-center sm:items-center sm:p-0'>
            <DialogPanel
              transition
              className='relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-700 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-200 data-leave:ease-in my-8 w-full max-w-sm md:max-w-2xl lg:max-w-3xl h-80 lg:h-96 data-closed:sm:translate-y-0 data-closed:sm:scale-95 flex flex-col justify-center items-center'
            >
              {/* cross button */}
              <div
                onClick={() => setOpen(false)}
                className='absolute -top-[2px] -right-[2px] lg:-right-1 bg-red-600 rounded-full p-1 h-8 w-8 lg:h-10 lg:w-10 flex items-center justify-center cursor-pointer'
              >
                X
              </div>
              {/* login form */}
              <div className=' px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <DialogTitle
                      as='h3'
                      className='text-xl lg:text-3xl text-center mb-8 font-semibold text-gray-900 dark:text-gray-100'
                    >
                      Enter your credentials to sign in.
                    </DialogTitle>
                    <form className='mt-2'>
                      <div className='space-y-4'>
                        <input
                          type='email'
                          placeholder='Email'
                          className='w-full px-4 py-2 border rounded'
                        />
                        <input
                          type='password'
                          placeholder='Password'
                          className='w-full px-4 py-2 border rounded'
                        />
                      </div>
                      <div className='w-full mt-5'>
                        <Button className='w-full'>Sign in</Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );

 
};
export default LoginButton;
