import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

export default function Footer() {
  const { t } = useTranslation('common');
  const activities = t('footer.activities', { returnObjects: true });
  const year = useState(new Date().getFullYear());

  return (
    <footer className='text-white'>
      <div>
        <div className='relative'>
          <div className='wave absolute top-0 left-0 h-24 w-full bg-repeat-x' />
          <div className='wave absolute top-0 left-0 h-24 w-full bg-repeat-x' />
          <div className='wave absolute top-0 left-0 h-24 w-full bg-repeat-x' />
        </div>
      </div>
      <div
        className='h-20'
        style={{ backgroundImage: 'linear-gradient(transparent, #97d4e7)' }}
      />
      <div className='bg-eco-blue'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 py-32 px-6 gap-6 md:grid-cols-3'>
          <div>
            <Image
              className='mb-2 md:mb-6'
              src='/logo-white.svg'
              width={200}
              height={100}
              alt='Logo'
            />
            <p className='font-medium'>{t('footer.about')}</p>
          </div>
          <div>
            <h3 className='font-bold text-lg mb-2 md:mb-6'>
              {t('footer.contact')}
            </h3>
            <div className='flex mb-3'>
              <span className='w-full max-w-6 mr-3'>
                <Image
                  width={24}
                  height={24}
                  src='/icon-phone.svg'
                  alt='Our phone number'
                />
              </span>
              <div>
                <p className='mb-1'>+62 21 390 5533</p>
                <p>+62 21 390 5533</p>
              </div>
            </div>
            <div className='flex mb-3'>
              <span className='w-full max-w-6 mr-3'>
                <Image
                  width={24}
                  height={24}
                  src='/icon-location.svg'
                  alt='Our address'
                />
              </span>
              <p>
                Wisma Aria Lt. 2 Suite 202, Jl. HOS. Cokroaminoto No. 81,
                Menteng-Jakarta Pusat, Indonesia 10310
              </p>
            </div>
            <div className='flex mb-3'>
              <span className='w-full max-w-6 mr-3'>
                <Image
                  width={24}
                  height={24}
                  src='/icon-home.svg'
                  alt='Our contact'
                />
              </span>
              <a className='underline' href='mailto:esi@tridentwater.com.sg'>
                esi@tridentwater.com.sg
              </a>
            </div>
          </div>
          <div>
            <h3 className='font-bold text-lg mb-2 md:mb-6'>
              {t('footer.business')}
            </h3>
            <ul className='list-disc pl-6'>
              {activities?.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-white text-gray-700 text-center py-3'>
        <p>Ecosystems International © {year}. All Rights Reserved</p>
      </div>
    </footer>
  );
}
