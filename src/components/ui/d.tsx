return (
  <Dialog>
    <DialogTrigger asChild>
      <Button size='lg'>Login</Button>
    </DialogTrigger>

    <DialogContent className='sm:max-w-md'>
      <DialogHeader>
        <DialogTitle>Login</DialogTitle>
        <DialogDescription>
          Enter your credentials to sign in.
        </DialogDescription>
      </DialogHeader>

      {/* Replace with your form */}
    

      <DialogFooter>
        <DialogClose asChild>
          <Button type='submit'>Sign in</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
