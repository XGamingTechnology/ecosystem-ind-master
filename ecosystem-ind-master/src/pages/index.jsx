import Layout from '@/components/layouts/main';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/AnimatedCounter';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';

const MilestoneCard = ({ number, text, icon, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className='bg-white border-2 border-eco-blue rounded-md py-6 px-4 text-eco-blue'
    >
      <div className='flex gap-4 justify-between items-center'>
        <Image
          className='h-20'
          src={icon}
          width={68}
          height={85}
          alt='Milestone icon'
        />
        <p className='font-extrabold text-5xl'>
          <AnimatedCounter
            from={0}
            to={number}
            animationOptions={{ delay: index * 0.2 }}
          />
          +
        </p>
      </div>
      <p className='font-medium text-lg mb-2'>{text}</p>
      <p>{description}</p>
    </motion.div>
  );
};

const AboutUsSection = () => {
  const { t } = useTranslation(['home', 'common']);
  return (
    <section className='max-w-6xl px-4 lg:px-0 mx-auto py-4'>
      <div className='text-center mb-6 lg:text-left'>
        <h1 className='text-3xl lg:text-5xl font-bold uppercase'>
          Why <span className='text-eco-blue'>Choose Us</span>
        </h1>
        <p className='lg:text-lg'>{t('choose-us-sub')}</p>
      </div>
      <div className='flex flex-col-reverse items-end lg:flex-row lg:items-center'>
        <div className='w-full text-white max-w-3xl bg-eco-blue py-16 px-10 rounded-3xl'>
          <div className='max-w-md'>
            <h1 className='font-extrabold uppercase text-3xl lg:text-5xl mb-6'>
              {t('about-us')}
            </h1>
            <p className='font-bold mb-4 text-lg lg:text-2xl uppercase'>
              {t('about-us-tag')}
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className='font-bold text-lg  lg:text-2xl'>
                PT Ecosystems International
              </p>
              <p className='lg:text-lg mb-6'>{t('about-us-sub')}</p>
              <Link
                href='/about'
                className='bg-eco-green shadow hover:shadow-none hover:bg-eco-green-dark transition-colors rounded-xl text-lg font-semibold px-10 py-4'
              >
                {t('general.readmore', { ns: 'common' })}
              </Link>
            </motion.div>
          </div>
        </div>
        <div className='w-2/3 -mb-11 mr-6 z-10 lg:mr-0 lg:mb-0 lg:w-full lg:-ml-40'>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Image
              src='/main-about.png'
              width={636}
              height={404}
              alt='About us'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MilestoneSection = () => {
  const { t } = useTranslation('home');
  const milestones = t('milestones', { returnObjects: true });

  return (
    <section className='max-w-6xl mx-auto px-4 py-4 lg:px-0'>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8'>
        {milestones?.map((milestone, i) => (
          <MilestoneCard key={milestone.icon} index={i} {...milestone} />
        ))}
      </div>
    </section>
  );
};

const BusinessActivitySection = () => {
  const { t } = useTranslation('home');
  const activities = t('activities', { returnObjects: true });

  return (
    <section className='relative z-10 mt-32 bg-eco-blue text-white px-4 lg:px-0'>
      <div className='relative max-w-6xl mx-auto'>
        <div
          className='absolute -z-10 -top-24 -left-[50%] lg:-left-[10%] bg-no-repeat bg-contain w-[550px] h-[550px]'
          style={{ backgroundImage: 'url("/elipse-green.svg")' }}
        />
        <h1 className='font-bold text-4xl text-center mb-7 lg:text-left'>
          Business <br /> Activities
        </h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 text-eco-blue'>
          {activities?.map((activity, index) => (
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              key={activity.title}
              className='bg-white rounded-2xl py-6 px-8'
            >
              <div className='text-right mb-4'>
                <Image
                  src={activity.icon}
                  width={64}
                  height={64}
                  alt={activity.title}
                />
              </div>
              <h3 className='text-xl mb-3 font-bold'>{activity.title}</h3>
              <ul className='list-disc px-6'>
                {activity.description.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClientSection = () => {
  const { t } = useTranslation('home');

  const clients = [
    {
      image: '/clients/samafitro.png',
      title: 'Samafitro',
    },
    {
      image: '/clients/sakuratex.png',
      title: 'Sakuratex',
    },
    {
      image: '/clients/april.png',
      title: 'April',
    },
    {
      image: '/clients/ucpl.png',
      name: 'UCPL',
    },
    {
      image: '/clients/exxon.png',
      name: 'Exxon',
    },
    {
      image: '/clients/pertamina.png',
      name: 'Pertamina EP',
    },
    {
      image: '/clients/pertamina-cepu.png',
      name: 'Pertamina EP Cepu',
    },
    {
      image: '/clients/minarak.png',
      name: 'Minarak',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    swipe: false,
    touchMove: false,
    arrows: false,
  };
  return (
    <section className='bg-eco-blue pt-16 pb-[10%] footer-gradient'>
      <div className='text-center text-white mb-4 lg:mb-8'>
        <h1 className='text-3xl font-bold uppercase lg:text-5xl'>
          {t('our-clients')}
        </h1>
        <p className='text-lg'>{t('our-clients-sub')}</p>
      </div>
      <div className='mb-4'>
        <Slider {...settings}>
          {clients.slice(0, 3).map((client, i) => (
            <div key={client.name + i}>
              <Image
                src={client.image}
                width={400}
                height={48}
                className='self-center justify-self-center flex'
                alt={client.name}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <Slider {...settings}>
          {clients.slice(4, 7).map((client, i) => (
            <div key={client.name + i}>
              <Image
                src={client.image}
                width={400}
                height={48}
                alt={client.name}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={cn(className, 'video-slider')}
      style={{
        ...style,
        display: 'block',
        color: 'green',
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={cn(className, 'video-slider')}
      style={{
        ...style,
        display: 'block',
        color: 'green',
      }}
      onClick={onClick}
    />
  );
};

const VideoSection = () => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    swipe: true,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    centerMode: false,
  };
  return (
    <section className='pb-32'>
      <div className='max-w-6xl mx-auto'>
        <Slider {...settings}>
          <div className='videowrapper relative'>
            <div className='absolute w-full h-full z-20 pointer-events-none left-0'></div>
            <iframe
              className='mx-auto border-eco-green border-8 rounded-xl'
              width='920'
              height='420'
              src='https://www.youtube.com/embed/yFlrfZK8ErU?si=AtjMeFosUgYa8RQG&controls=0&modestbranding=1&autohide=1&showinfo=0&color=white'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
          </div>
          <div className='videowrapper relative'>
            <div className='absolute w-full h-full z-20 pointer-events-none left-0 top-0'></div>

            <iframe
              className='mx-auto border-eco-green border-8 rounded-xl'
              width='920'
              height='420'
              src='https://www.youtube.com/embed/yFlrfZK8ErU?si=AtjMeFosUgYa8RQG&controls=0&modestbranding=1&autohide=1&showinfo=0&color=white'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
          </div>
        </Slider>
      </div>
    </section>
  );
};

const PageHeader = () => {
  const { t } = useTranslation(['home', 'common']);
  return (
    <section className='max-w-6xl mb-12 md:mb-0 flex-col-reverse lg:flex-row mx-auto px-4 flex min-h-[60vh] pt-4 items-start lg:items-center text-white'>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          className='z-0 w-9/12 mt-8 lg:mt-0 lg:w-full'
          src='/main-circle.png'
          width={590}
          height={624}
          alt='Water treatment'
        />
      </motion.div>
      <div className='flex-1 z-10 text-center lg:text-left'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          // transition={{ ease: 'easeIn', duration: 0.3 }}
        >
          <h1
            className='font-bold text-4xl lg:text-5xl mb-6 uppercase'
            dangerouslySetInnerHTML={{ __html: t('main') }}
          ></h1>
          <p className='mb-6 font-medium drop-shadow-sm text-pretty'>
            {t('main-sub')}
          </p>
          <Link
            href='/about'
            className='bg-white rounded-lg shadow  hover:text-eco-green hover:shadow-none transition-colors text-gray-700 px-6 py-3 lg:text-lg font-bold'
          >
            {t('general.readmore', { ns: 'common' })}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Home() {
  return (
    <div>
      <PageHeader />
      <AboutUsSection />
      <MilestoneSection />
      <BusinessActivitySection />
      <ClientSection />
      <VideoSection />
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});
