import Link from 'next/link';

const Download = ({ icon }) => {

  
  return (
    <>
      <Link href='/Resume_yassine_zadod.pdf' target='_blank' className='flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4'>
        <span className='text-Snow'>Download</span>
        <span>{icon}</span>
      </Link>
    </>
  );
};

export default Download;