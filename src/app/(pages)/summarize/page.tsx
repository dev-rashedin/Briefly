'use client';

import { Button } from '@/components/ui/button';
// import { chatSession } from '@/config/AIConfig';
// import { useGetUserInfo } from '@/hooks/useGetUserInfo';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
// import { toast } from 'sonner';

const SummarizePage = () => {
  const [open, setOpen] = useState(false);
  const [userText, setUserText] = useState('');
  const [loading, setLoading] = useState(false);

  // const { isAuth, userEmail } = useGetUserInfo();

  const router = useRouter();
  // const generateSummary = async () => {
  //   if (!isAuth) {
  //     setOpen(true);
  //     return;
  //   }

  //   if (userText.split('').length < 10) {
  //     toast('Text is too small to summarize.');
  //     return;
  //   }

  //   setLoading(true);

  //   const prompt = `Summarize this text: ${userText}`;
  //   const result = await chatSession.sendMessage(prompt);

  //   setLoading(false);
  //   console.log('Summarized Text: ', result.response.text());

  //   saveSummary(result.response.text());
  // };

  // const saveSummary = async (summary: string) => {
  //   setLoading(true);
  //   const id = Date.now().toString();

  //   await setDoc(doc(db, 'Summaries', id), {
  //     userText,
  //     summary,
  //     userEmail,
  //     id,
  //   });

  //   setLoading(false);

  //   router.push(`/summary/${id}`);
  // };

  return (
    <div className='bg-[#f5f5f5] flex flex-col justify-center items-center px-4 md:px-12 h-[90vh]'>
      <div className='bg-white w-full h-[70vh] shadow-md rounded-2xl flex p-2'>
        <textarea
          onChange={(e) => setUserText(e.target.value)}
          className='w-full rounded-l-2xl p-5 resize-none md:border-r focus:outline-none'
          placeholder='Enter or paste your text and press "Generate Summary"'
        />

        <textarea
          disabled
          className='w-full rounded-r-2xl p-5 resize-none focus:outline-none hidden md:inline-flex'
        />
      </div>

      <Button className='mt-8' disabled={loading} >
        {loading ? 'Generating...' : 'Generate Summary'}
      </Button>

      {/* <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>SIgn In with Google</DialogTitle>
            <DialogDescription>
              Please sign in to access the text summarization feature. Logging
              in ensures a personalized experience and saves your progress.
            </DialogDescription>

            <Button className='mt-8' onClick={signInWithGoogle}>
              Sign In with Google
            </Button>
          </DialogHeader>
        </DialogContent>
      </Dialog> */}
    </div>
  );
};

export default SummarizePage;
