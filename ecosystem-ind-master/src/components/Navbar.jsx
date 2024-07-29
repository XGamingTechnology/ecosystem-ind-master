import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { HiOutlineMenu } from 'react-icons/hi';

export default function Navbar() {
  const router = useRouter();
  const { t, i18n } = useTranslation('common');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const menus = t('menus', { returnObjects: true });
  return (
    <>
      <div className='h-28'></div>
      <div className='left-0 top-0 z-50 fixed w-full'>
        <div
          className={cn(
            'absolute border-t top-0 -z-10 py-6 border-gray-100 shadow-lg left-0 w-full bg-white transition-transform md:hidden',
            {
              'translate-y-20': isMenuOpen,
              '-translate-y-52': !isMenuOpen,
            },
          )}
        >
          <div>
            <nav className='text-gray-500  flex flex-col lg:hidden font-medium'>
              {menus?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'p-2 flex hover:text-eco-green flex-col items-center',
                    { 'text-eco-green': router.pathname === item.href },
                  )}
                  onClick={onToggleMenuClick}
                >
                  <span className='transition-all'>{item.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className='py-6 px-4 bg-white top-0 shadow-sm z-50'>
          <div className='relative z-50 flex justify-between max-w-6xl mx-auto'>
            <Link href='/'>
              <Image
                className='h-8 w-auto md:h-12'
                src='/logo.svg'
                width={220}
                height={46}
                alt='Ecosystems International Logo'
              />
            </Link>
            <div className='flex items-center'>
              <nav className='hidden md:flex font-medium'>
                {menus?.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className='text-gray-500 p-2 flex hover:text-eco-green flex-col items-center'
                  >
                    <span className='transition-all'>{item.title}</span>
                    <span
                      className={cn('w-1/2 rounded-full h-1.5', {
                        'bg-eco-green': router.pathname === item.href,
                      })}
                    ></span>
                  </Link>
                ))}
              </nav>

              <div className='md:hidden'>
                <button onClick={onToggleMenuClick}>
                  <HiOutlineMenu size={32} />
                </button>
              </div>
              <div className='pl-4'>
                <button
                  className={cn('font-bold', {
                    'text-eco-green': i18n.language === 'en',
                  })}
                  onClick={() => onToggleLanguageClick('en')}
                >
                  EN
                </button>
                <span> | </span>
                <button
                  className={cn('font-bold', {
                    'text-eco-green': i18n.language === 'id',
                  })}
                  onClick={() => onToggleLanguageClick('id')}
                >
                  ID
                </button>
                <span className='h-1.5 w-full block'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
