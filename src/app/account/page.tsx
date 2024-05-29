import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const AccountPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log({ user });

  return (
    <div className='flex min-h-screen w-full'>
      <div className='max-w-6xl w-full mx-auto py-10'>
        {user?.picture ? (
          <img
            className='inline-block h-16 w-16 rounded-full ring-2 ring-slate-100 mb-4'
            src={user?.picture}
            alt='user image'
          />
        ) : null}
        <h1 className='text-3xl  font-semibold'>
          Welcome back {user?.given_name || 'there'}
        </h1>
      </div>
    </div>
  );
};

export default AccountPage;
