"use client"
import Image from 'next/image'; 
import { useRouter } from 'next/navigation'; 

const Explorebtn = () => {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('#events'); 
  };

  return (
    <button type="button" id="button" className="mt-7 mx-auto btn flex bg-background p-2 rounded-2xl" onClick={handleClick}>
      Explore Now
      <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24}/>
    </button>
  );
}

export default Explorebtn;
