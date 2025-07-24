"use client"
import { JSX, useState } from 'react';
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
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <DialogPanel
              transition
              className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95'
            >
              <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='sm:flex sm:items-start'>
                  <div className='mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10'></div>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <DialogTitle
                      as='h3'
                      className='text-base font-semibold text-gray-900'
                    >
                      Deactivate account
                    </DialogTitle>
                    <div className='mt-2'>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                <button
                  type='button'
                  onClick={() => setOpen(false)}
                  className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto'
                >
                  Deactivate
                </button>
                <button
                  type='button'
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto'
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );

 
};
export default LoginButton;
