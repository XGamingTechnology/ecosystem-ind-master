import Layout from '@/components/layouts/minimal';
// import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { contact } from '@/constants/common';
import { RiHomeLine } from 'react-icons/ri';
import { HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

const ContactIndonesia = () => {
  return (
    <div className='text-eco-blue'>
      <div className='flex mb-3'>
        <span className='w-full max-w-6 mr-3'>
          <RiHomeLine size={24} />
        </span>
        <div>
          <p className='mb-1'>{contact.id.phone1}</p>
          <p>{contact.id.phone2}</p>
        </div>
      </div>
      <div className='flex mb-3'>
        <span className='w-full max-w-6 mr-3'>
          <HiOutlineLocationMarker size={24} />
        </span>
        <p>{contact.id.address}</p>
      </div>
      <div className='flex mb-3'>
        <span className='w-full max-w-6 mr-3'>
          <HiOutlinePhone size={24} />
        </span>
        <a className='underline' href={`mailto:${contact.id.email}`}>
          {contact.id.email}
        </a>
      </div>
    </div>
  );
};

const ContactSingapore = () => {
  return (
    <div className='text-eco-blue'>
      <div className='flex mb-3'>
        <span className='w-full max-w-6 mr-3'>
          <RiHomeLine size={24} />
        </span>
        <div>
          <p>{contact.sg.phone1}</p>
        </div>
      </div>
      <div className='flex mb-3'>
        <span className='w-full max-w-6 mr-3'>
          <HiOutlineLocationMarker size={24} />
        </span>
        <p>{contact.sg.address}</p>
      </div>
      <div className='flex mb-3'>
        <span className='w-full max-w-6 mr-3'>
          <HiOutlinePhone size={24} />
        </span>
        <a className='underline' href={`mailto:${contact.sg.email}`}>
          {contact.sg.email}
        </a>
      </div>
    </div>
  );
};

const ContactForm = ({ setResult }) => {
  const { t } = useTranslation('contact');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', 'c3fe78e8-06f3-4e13-965a-cac987a31bfe');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('success');
      setTimeout(() => setResult(''), 3000);
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        name='name'
        type='text'
        placeholder={t('form.name')}
        className='w-full bg-transparent bg-white shadow-lg text-gray-700 focus:outline-eco-green-dark text-0 border-eco-green border rounded-lg block px-4 py-4 mb-4'
        required
      />
      <input
        name='email'
        type='email'
        placeholder={t('form.email')}
        className='w-full bg-transparent bg-white shadow-lg text-gray-700 focus:outline-eco-green-dark border-eco-green border rounded-lg block px-4 py-4 mb-4'
        required
      />
      <textarea
        name='message'
        rows={2}
        style={{ maxHeight: 400 }}
        placeholder={t('form.message')}
        className='w-full bg-transparent bg-white shadow-lg text-gray-700 focus:outline-eco-green-dark border-eco-green border rounded-lg block px-4 py-4 mb-4'
        required
      />
      <button
        type='submit'
        className='bg-eco-green focus:outline-none hover:bg-eco-green-dark shadow-lg transition-colors px-6 py-4 rounded-lg text-white font-bold text-lg w-full'
      >
        {t('form.send')}
      </button>
    </form>
  );
};

export default function Contact() {
  const [result, setResult] = useState('');
  const { t } = useTranslation('contact');

  return (
    <div>
      {result === 'success' && (
        <div className='fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.2)]'>
          <div className='bg-white shadow-lg rounded-lg max-w-xl w-full p-12 text-center text-eco-green text-lg font-semibold'>
            <p>Thank you for your message</p>
            <p>We&apos;ll reply in a timely manner</p>
          </div>
        </div>
      )}
      <section className='px-4'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center py-12 pb-14'>
            <h1 className='text-5xl font-extrabold mb-4 uppercase'>
              Get <span className='text-eco-green'>In Touch</span>
            </h1>
            <p>{t('get-in-touch-sub')}</p>
          </div>
          <div className='rounded-xl px-6 py-12 md:px-12 md:py-24 bg-eco-blue relative'>
            <div className='bg-eco-green w-44 h-44 absolute -left-20 -z-10 bottom-44 rounded-full'></div>
            <div className='flex flex-col md:flex-row gap-12 z-10 relative items-center'>
              <div className='text-white w-full flex-grow'>
                <h3 className='mb-8 font-bold text-4xl'>{t('contact-us')}</h3>
                <ContactForm result={result} setResult={setResult} />
              </div>
              <div className='bg-white flex-1 relative text-eco-blue px-6 py-12 rounded-md'>
                <div className='hidden md:block absolute -bottom-8 -right-8 w-28 h-28 bg-eco-blue rounded-full' />
                <div className='hidden md:block absolute -top-16 -left-16 w-28 h-28 bg-eco-green rounded-full' />
                <div className='mb-12'>
                  <h3 className='font-bold'>SINGAPORE OFFICE</h3>
                  <h3 className='font-bold mb-3'>Trident-Flo Pte. Ltd.</h3>
                  <ContactSingapore />
                </div>
                <div>
                  <h3 className='font-bold'>INDONESIA OFFICE</h3>
                  <h3 className='font-bold mb-3'>
                    PT EcoSystems International
                  </h3>
                  <ContactIndonesia />
                </div>
              </div>
            </div>
            <div className='hidden md:block bg-eco-green w-48 h-full absolute right-0 top-0 rounded-xl'></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'contact'])),
  },
});

Contact.getLayout = function getLayout(page) {
  return <Layout title='Contact'>{page}</Layout>;
};
