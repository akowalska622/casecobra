export const UserImagesGroup = ({ userImages }: { userImages: string[] }) => (
  <div className='flex -space-x-4'>
    {userImages.map((image, index) => (
      <img
        key={index}
        className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
        src={image}
        alt='user image'
      />
    ))}
  </div>
);
