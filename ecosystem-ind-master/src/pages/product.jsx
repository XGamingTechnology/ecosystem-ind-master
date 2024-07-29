import Layout from '@/components/layouts/article';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { motion } from 'framer-motion';
import { useState } from 'react';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import PageHeader from '@/components/PageHeader';
import { useTranslation } from 'next-i18next';

let tabs = [
  { id: 'ecr', label: 'ECR' },
  { id: 'membrane', label: 'ENBE PTFE Membrane' },
  { id: 'hydroxil', label: 'Hydroxil Radical (OH-R)' },
];

const Tabs = ({ children, index }) => {
  return children[index];
};

const ImageGallery = ({ images }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-8'>
      {images.map((image, i) => (
        <Image
          key={image}
          className={classNames('w-full', {
            'col-span-2': i + 1 === images.length,
          })}
          src={image}
          width={200}
          height={100}
          alt={i}
        />
      ))}
    </div>
  );
};

const ContentEcr = () => {
  const { t } = useTranslation('product');
  const images = [
    '/products/ecr/ecr-1.jpg',
    '/products/ecr/ecr-2.jpg',
    '/products/ecr/ecr-3.jpg',
    '/products/ecr/ecr-4.jpg',
    '/products/ecr/ecr-5.jpg',
  ];

  const processes = t('content-ecr.processes', { returnObjects: true });
  const reactions = t('content-ecr.reactions', { returnObjects: true });

  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-24'>
        <h3 className='font-bold text-lg'>
          Electro Contaminants Removal (ECR®)
        </h3>
        <p>
          ECR is based on scientific principles involving responses of water
          contaminants to strong electric fields and electrically-induced
          oxidation and reduction reactions.
        </p>
        <p className='font-bold mb-3'>
          “Imagine chemical dosing, but easier & without chemical.”
        </p>
        <ImageGallery images={images} />
        <div>
          <div className='text-center mb-6'>
            <h3 className='text-2xl font-bold'>
              {t('content-ecr.removal-reaction')}
            </h3>
            <p>{t('content-ecr.removal-reaction-sub')}</p>
          </div>
          <div className='grid gap-4 grid-cols-2 md:grid-cols-3'>
            {processes?.map((processItem, i) => {
              const isEven = (i + 2) % 2 === 0;
              const isFirst = i === 0;
              const isLast = i + 1 === processes.length;

              const alignMiddle = isLast;
              const alignRight = (!isEven || isFirst) && !isLast;

              if (!processItem.title)
                return (
                  <motion.div
                    key='ecr-machine'
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className='self-center w-full row-span-2 md:row-span-3'
                  >
                    <Image
                      className='w-full'
                      src='/products/ecr/ecr-machine.png'
                      width={100}
                      height={400}
                      alt='ECR Machine'
                    />
                  </motion.div>
                );
              return (
                <motion.div
                  key={processItem.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={classNames({
                    'md:text-right': alignRight,
                    'md:text-center md:col-span-full': alignMiddle,
                  })}
                >
                  <Image
                    className={classNames({
                      'md:ml-auto': alignRight,
                      'md:mx-auto': alignMiddle,
                    })}
                    src='/icon-molecules.svg'
                    width={46}
                    height={46}
                    alt=''
                  />
                  <p className='font-bold'>{processItem.title}</p>
                  <p>{processItem.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: 'linear-gradient(#97d4e7, transparent)',
        }}
      >
        <div className='py-12'>
          <div className='max-w-6xl mx-auto px-4 lg:px-0'>
            <h1 className='font-bold text-3xl text-white'>
              ECR® - CHEMICAL REACTIONS
            </h1>
            <div className='h-1.5 rounded-full bg-white w-36'></div>
          </div>

          <Swiper
            slidesPerView={1.1}
            centerInsufficientSlides
            breakpoints={{
              640: {
                slidesPerView: 1.1,
              },
              1024: {
                slidesPerView: 1.5,
              },
              1280: {
                slidesPerView: 2.5,
              },
              1536: {
                slidesPerView: 3.8,
                spaceBetween: 24,
              },
            }}
            spaceBetween={16}
            modules={[FreeMode]}
          >
            {reactions?.map((reaction, i) => (
              <SwiperSlide key={reaction.title} className='project-slide py-6'>
                <div className='min-h-52 px-6 py-4 rounded-xl border border-gray-100 bg-white shadow-lg'>
                  <h3 className='font-bold text-lg'>{reaction.title}</h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: reaction.content }}
                  ></div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperSlide />
          </Swiper>
        </div>
      </div>

      <div className='max-w-6xl mx-auto mb-12'>
        <Image
          className='mb-24'
          src='/products/ecr/ecr-solution.png'
          width={1200}
          height={800}
          alt='ECR Solution'
        />

        <Image
          src='/products/ecr/ecr-solution-2.png'
          width={1200}
          height={800}
          alt='ECR Solution 2'
        />
      </div>

      <div className='bg-eco-blue px-4 py-24'>
        <div className='max-w-6xl mx-auto'>
          <div className='mb-6'>
            <h1 className='text-4xl mb-2 font-bold text-white'>
              Learn More About Electro Coaguation
            </h1>
            <div className='h-1.5 w-36 rounded-full bg-white' />
          </div>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <div
              className='flex rounded-lg min-h-[460px] relative bg-no-repeat bg-cover bg-center'
              style={{ backgroundImage: 'url("/paper-sample.png")' }}
            >
              <div
                className='absolute flex items-end rounded-lg bottom-0 text-center text-white left-0 h-full w-full'
                style={{
                  backgroundImage:
                    'linear-gradient(transparent 0%, rgba(0,0,0,0.8) 90%)',
                }}
              >
                <div>
                  <h3 className='text-lg mb-4'>
                    Treatment of textile wastewaters by electocoagulation (2015)
                  </h3>
                  <button className='w-full hover:bg-[rgba(255,255,255,0.2)] transition-colors pt-4 pb-4 border-t border-gray-500'>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentMembrane = () => {
  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-24'>
        <h3 className='font-bold text-lg'>ENBE PTFE MEMBRANE</h3>
        <p>
          The ENBE E-PTFE membrane module has a 3 layers structure with a
          membrane skin layer on both sides and a support layer in the middle.
          Although the liquid flows in from the skin side, the surface of this
          layer has a very finite pore structure as shown in the following
          picture. With this finite structure, the surface of the membrane can
          be made of very small accumulations of SS. Therefore, it can provide
          long-term stable filtration ability.
        </p>
        <br />

        <Image
          src='/products/ptfe/ptfe-character.png'
          width={1136}
          height={250}
          alt='PTFE Structure'
        />
        <br />
        <div className='md:flex'>
          <div>
            <p>
              The bond between flourine and carbon is the strongest in organic
              chemistry.
            </p>
            <p>Special properties of PTFE :</p>
            <ul className='list-disc list-inside ml-4'>
              <li>Non-combustible</li>
              <li>Anti-adhesive</li>
              <li>Non-Aging</li>
              <li>Low static and dynamic coefficient</li>
              <li>Resistant to Radiation</li>
              <li>Wide range of temperature usage ( -286 dgc to 315 dgc)</li>
              <li>Chemical resistant (pH 0 to pH 14)</li>
            </ul>
          </div>
          <Image
            src='/products/ptfe/ptfe-molecule.png'
            width={370}
            height={290}
            alt='PTFE Molecule'
          />
        </div>
        <br />
        <h3 className='font-bold text-lg'>
          3 Layer Flexible Membrane Module (Cross-flow Filtration Module)
        </h3>
        <br />
        <p className='font-bold'>Advantages:</p>
        <ul className='list-disc list-inside ml-4'>
          <li>High filtration flow with low energy costs.</li>
          <li>
            Easy maintenance (CIP, COP) and stable operation (Closs-flow
            filtration).
          </li>
          <li>
            Applicable for all water filtration treatments by applying
            appropriate membrane pore size.
          </li>
          <li>
            It can be applied to containers to save land, construction time, and
            costs.
          </li>
          <li>
            As a patent is in progress, membrane contamination during operation
            is minimized by changing the shape of the spacer and using its air
            injection structure for effective membrane cleaning through Vortex
            formation through circulating water and air bubbles.
          </li>
        </ul>
        <br />
        <Image
          className='mx-auto'
          src='/products/ptfe/ptfe-module.png'
          width={822}
          height={396}
          alt='PTFE Module'
        />
        <br />
        <p className='font-bold text-center'>Membrane Module Specification.</p>
        <br />

        <Image
          className='mx-auto'
          src='/products/ptfe/ptfe-module-specs.png'
          width={712}
          height={290}
          alt='PTFE Module specs'
        />
        <br />

        <p>
          Depending on the field conditions, we can manufacture and supply
          specially customized membrane modules in addition to the general
          specifications above.
        </p>
        <br />

        <h3 className='font-bold text-lg'>
          3 Layer Flexible Membrane Module (Cross-flow Filtration Module)
        </h3>
        <br />

        <ul className='list-disc list-inside'>
          <li>
            Flexible structure to maximize membrane cleaning by aeration and
            backwashing.
          </li>
          <li>Cost reduction and productivity improvement by simple design.</li>
          <li>The world&apos;s only flexible flat membrane structure.</li>
          <li>
            The water outlet pipe and the air supply pipe are configured
            together in the unit.
          </li>
          <li>
            Patented Design useful for replacement of hollow fiber membrane.
          </li>
        </ul>
        <br />
        <Image
          className='mx-auto'
          src='/products/ptfe/ptfe-3layer-membrane.png'
          width={984}
          height={513}
          alt='PTFE 3 Layers Membrane'
        />
        <br />
        <p className='font-bold text-center'>
          Membrane specification (for Membrane Bio Reactor)
        </p>
        <br />

        <Image
          className='mx-auto'
          src='/products/ptfe/ptfe-membrane-specs.png'
          width={992}
          height={692}
          alt='PTFE Membrane Specs'
        />
      </div>
    </div>
  );
};

const ContentHydro = () => {
  const images = [
    '/products/hydroxil/hydro-1.png',
    '/products/hydroxil/hydro-2.png',
    '/products/hydroxil/hydro-3.png',
    '/products/hydroxil/hydro-4.png',
    '/products/hydroxil/hydro-5.png',
  ];
  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-24'>
        <h3 className='font-bold text-lg'>ENBE PTFE MEMBRANE</h3>
        <p>
          Ozone gas is dissolved in water, and a small amount of OH radical is
          generated instantly, but it is an anion-based substance that produces
          a very strong reaction that is extinguished at the moment of
          instantaneous generation because it is a half-life substance of 1/1
          millionth of a second.
        </p>
        <br />
        <p>
          The ultrafine bubbles generated from the bubble generator remain in
          the water for a long time, and as they are gradually reduced by the
          water pressure, heat energy and ultrasonic energy generated when
          bursting in the water are generated, and the ozone remaining in the
          bubble generates a high concentration of OH Radical, and it can be
          used for industrial purposes by continuously generating OH Radical
          that disappears at the moment of instantaneous occurrence with
          nanobubble generation technology and high ozone dissolved mixing
          technology.
        </p>

        <br />
        <ImageGallery images={images} />
        <br />

        <Image
          className='mx-auto'
          src='/products/hydroxil/hydro-solution.png'
          width={1142}
          height={532}
          alt='Hydroxil solution'
        />
        <br />

        <h3 className='font-bold text-lg'>ERADICATE ALL PATHOGENS</h3>

        <div className='lg:flex gap-4'>
          <Image
            className='mx-auto'
            src='/products/hydroxil/hydro-test-1.png'
            width={579}
            height={601}
            alt='Hydroxil test 1'
          />
          <Image
            className='mx-auto'
            src='/products/hydroxil/hydro-test-2.png'
            width={579}
            height={601}
            alt='Hydroxil test 2'
          />
        </div>
        <br />

        <div className='gap-4 lg:flex'>
          <Image
            className='mx-auto'
            src='/products/hydroxil/hydro-benefit-1.png'
            width={600}
            height={627}
            alt='Benefit 1'
          />
          <Image
            className='mx-auto'
            src='/products/hydroxil/hydro-benefit-2.png'
            width={600}
            height={627}
            alt='Benefit 2'
          />
        </div>
        <br />

        <Image
          className='mx-auto'
          src='/products/hydroxil/hydro-table.png'
          width={1158}
          height={537}
          alt='Hydroxil table'
        />
      </div>
    </div>
  );
};

function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className='max-w-6xl mx-auto grid grid-cols-3 space-x-1 mb-8'>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`${
              activeTab === index ? 'text-eco-green' : ''
            } relative rounded-full px-3 py-1.5 md:text-lg font-bold transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {activeTab === index && (
              <motion.span
                layoutId='bubble'
                className='absolute inset-0 border-b-4 border-eco-green z-10'
                transition={{ type: 'spring', duration: 0.6 }}
              />
            )}
            <span className='absolute inset-0 border-b-4 border-eco-gray-500 mix-blend-difference'></span>
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        <Tabs index={activeTab}>
          <ContentEcr />
          <ContentMembrane />
          <ContentHydro />
        </Tabs>
      </div>
    </div>
  );
}

export default function Product() {
  const { t } = useTranslation('product');

  return (
    <div>
      <PageHeader
        title={t('our-product')}
        image='/main-product.png'
        subtitle={t('our-product-sub')}
      />
      <section className='py-12'>
        <div>
          <h1 className='text-4xl text-center font-bold mb-12'>
            {t('explore-our-product')}
          </h1>
          <AnimatedTabs />
        </div>
      </section>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'product'])),
  },
});

Product.getLayout = function getLayout(page) {
  return <Layout title='Product'>{page}</Layout>;
};
