import Layout from '@/components/layouts/article';
import Image from 'next/image';

import cn from 'classnames';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Slider from 'react-slick';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  // arrows: false,
};

const TestimoniCard = ({ name, title, image, description }) => {
  return (
    <div className='p-2'>
      <div className='flex flex-col md:flex-row gap-4 bg-white rounded-md p-8'>
        <div>
          <Image
            src={image}
            width={128}
            height={128}
            alt={`Testimoni ${name}`}
            className='w-16 h-16 md:h-auto md:w-auto'
          />
        </div>
        <div className='flex-1'>
          <h3 className='md:text-xl font-bold'>{name}</h3>
          <p className='font-semibold text-gray-600 md:font-bold md:text-lg'>
            {title}
          </p>
          <div
            className='text-gray-600'
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const { t } = useTranslation('about');

  const testimonials = t('testimonials', { returnObjects: true });
  const tjourneys = t('journeys', { returnObjects: true });

  const journeys = [
    ...tjourneys.slice(0, 2),

    {
      ...tjourneys[3],
      addition: () => (
        <a
          href='https://solarimpulse.com/solutions-explorer/electro-contaminant-removal-ecr-system'
          target='_blank'
          rel='noopener norefferer'
        >
          <Image
            src='/solar-impulse.png'
            width={82}
            height={82}
            alt='Solar Impulse'
          />
        </a>
      ),
    },
    {
      ...tjourneys[4],
      addition: () => (
        <div className='text-sm md:text-base rounded-full border border-eco-blue font-bold px-4 py-2'>
          November 2022 &gt; 250k zero accident man hours
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        image='/about-eco.png'
        title='About  Ecosystems International'
      />
      <section className='pb-12 pt-24'>
        <div className='flex flex-col lg:flex-row items-center gap-8 px-4 item-center max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='flex-1'
          >
            <Image
              className='w-full'
              src='/about-vision.png'
              width={400}
              height={300}
              alt='Vision & Mission'
            />
          </motion.div>
          <div className='flex-1'>
            <h1 className='uppercase text-eco-green font-bold text-xl'>
              {t('vision-mission')}
            </h1>
            <h3 className='font-bold text-4xl mb-3'>{t('what-we-believe')}</h3>
            <p
              className='text-lg mb-3'
              dangerouslySetInnerHTML={{ __html: t('vision') }}
            ></p>
            <p
              className='text-lg'
              dangerouslySetInnerHTML={{ __html: t('mission') }}
            ></p>
          </div>
        </div>
      </section>
      <section className='bg-eco-blue text-white'>
        <div
          className='h-20 w-full'
          style={{ backgroundImage: 'linear-gradient(white, transparent)' }}
        ></div>
        <div className='max-w-6xl mx-auto py-12 px-4'>
          <div className='flex flex-col-reverse justify-between lg:flex-row'>
            <p
              className='text-lg mb-6 flex-1'
              dangerouslySetInnerHTML={{ __html: t('about-us-desc') }}
            ></p>
            <div className='lg:text-right flex-1'>
              <h1 className='uppercase font-bold text-4xl'>{t('about-us')}</h1>
              <p className='text-lg font-semibold mb-2'>
                PT Ecosystems International
              </p>
              <div className='w-1/3 h-1.5 mb-4 lg:mb-0 lg:ml-auto rounded-full bg-white'></div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row justify-between'>
            <div className='flex-1'>
              <h1 className='uppercase font-bold text-4xl'>
                {t('certifications')}
              </h1>
              <p className='text-lg font-semibold mb-1'>
                PT Ecosystems International
              </p>
              <div className='w-1/3 h-1.5 mb-4 lg:mb-0 rounded-full bg-white'></div>
            </div>
            <div className='bg-white shadow-lg rounded-2xl py-6 px-6'>
              <Image
                src='/certificate.png'
                width={400}
                height={200}
                alt='Certification'
              />
            </div>
          </div>
        </div>
        <div
          className='h-20 w-full'
          style={{ backgroundImage: 'linear-gradient(transparent, white)' }}
        ></div>
      </section>

      <section className='py-12 relative'>
        <div
          style={{ backgroundImage: 'url("/about-bg-left.svg")' }}
          className='left-0 -top-2 absolute z-0 w-40 h-full bg-no-repeat bg-contain bg-left-top'
        />

        <div
          style={{ backgroundImage: 'url("/about-bg-right.svg")' }}
          className='right-0 bottom-0 absolute z-0 w-40 h-full bg-no-repeat bg-contain bg-right-bottom'
        />
        <div className='max-w-6xl mx-auto mb-10 px-4'>
          <h1
            className='text-4xl font-bold mb-10 text-center uppercase'
            dangerouslySetInnerHTML={{ __html: t('our-journey') }}
          ></h1>
          <div className='relative'>
            <div className='grid gap-x-3 grid-cols-3 gap-y-8 our-journey-grid'>
              <div className='absolute -z-10 left-20 md:left-1/2 top-0 h-full w-1 border-2 border-dashed border-eco-blue'></div>

              {journeys.map((journey, i) => {
                const isEven = (i + 1) % 2 === 0;

                const Addition = () => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className='md:block self-center'
                  >
                    {journey.addition ? <journey.addition /> : null}
                  </motion.div>
                );

                const rowStart = `row-start-${i + 1}`;

                const Content = () => (
                  <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className={cn(
                      `col-start-2 md:col-start-auto md:row-start-auto self-center`,
                      rowStart,
                      {
                        'md:text-right': isEven,
                      },
                    )}
                  >
                    <p className='font-bold text-lg text-eco-blue'>
                      {journey.title}
                    </p>
                    <p>{journey.description}</p>
                    <div className='md:hidden'>
                      <Addition />
                    </div>
                  </motion.div>
                );

                return (
                  <React.Fragment key={journey.year}>
                    {isEven ? (
                      Content()
                    ) : (
                      <div className='hidden md:flex'>
                        <Addition />
                      </div>
                    )}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className={cn(
                        'col-start-1 md:col-start-auto md:row-start-auto mx-auto self-center flex p-4 w-28 h-28 justify-center items-center rounded-full border-2 border-eco-blue',
                        rowStart,
                        {
                          'bg-eco-green w-28 h-28 md:w-40 md:h-40 text-white text-2xl md:text-3xl':
                            journey.highlight,
                          'w-28 h-28 text-eco-blue bg-white text-xl md:text-2xl':
                            !journey.highlight,
                        },
                      )}
                    >
                      <h3 className='font-bold'>{journey.year}</h3>
                    </motion.div>
                    {isEven ? (
                      <div className='hidden md:flex'>
                        <Addition />
                      </div>
                    ) : (
                      Content()
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='text-center'>
          <div className='py-12'>
            <h1 className='text-3xl md:text-4xl font-bold'>
              {t('thought-leader')}
            </h1>
            <p>{t('thought-leader-sub')}</p>
          </div>
        </div>
      </section>
      <section className='bg-eco-blue'>
        <div className='py-28'>
          <div className='max-w-6xl mx-auto text-white text-center pb-12'>
            <h1 className='text-4xl font-bold uppercase'>
              {t('what-they-said')}
            </h1>
            <p className='text-lg font-semibold mb-2'>
              PT Ecosystems International
            </p>
            <div className='w-1/5 h-1.5 mb-4 mx-auto lg:mb-0 rounded-full bg-white'></div>
          </div>
          <div className='max-w-5xl mx-auto'>
            <div className='text-gray-700'>
              <Slider {...settings} className='items-start'>
                {testimonials.map((testimonial) => (
                  <TestimoniCard key={testimonial.name} {...testimonial} />
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div
          className='h-20 w-full'
          style={{ backgroundImage: 'linear-gradient(transparent, white)' }}
        ></div>
      </section>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
});

About.getLayout = function getLayout(page) {
  return <Layout title='About Us'>{page}</Layout>;
};
