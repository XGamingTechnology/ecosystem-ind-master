import Layout from '@/components/layouts/article';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageHeader from '@/components/PageHeader';
import { SwiperSlide, Swiper } from 'swiper/react';
import Link from 'next/link';
import { FreeMode } from 'swiper/modules';
import { useTranslation } from 'next-i18next';

export default function Project() {
  const { t } = useTranslation('project');
  const projects = t('projects', { returnObjects: true });
  return (
    <div>
      <PageHeader
        title='Our Project'
        subtitle='As per today, PT ESI has more than 500 world wide project in Water Management (Water Treatment & Waste Water Treatment).'
        image='/main-project.png'
      />
      <section className='py-32'>
        <div className='mb-6 max-w-6xl mx-auto px-4 lg:px-0'>
          <h1 className='text-4xl font-bold mb-2'>Industrial Project</h1>
          <div className='w-40 rounded-full h-1.5 bg-gray-700' />
        </div>
        <div className='mb-12'>
          <Swiper
            slidesPerView={1.2}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 2.5,
              },
              1280: {
                slidesPerView: 3.5,
              },
              1536: {
                slidesPerView: 4.8,
                spaceBetween: 24,
              },
            }}
            spaceBetween={16}
            modules={[FreeMode]}
          >
            {projects?.industrial.map((project, i) => (
              <SwiperSlide
                key={project.title}
                className='project-slide flex relative rounded-lg bg-cover p-0 m-0'
                style={{
                  backgroundImage: `url("${project.image}")`,
                }}
              >
                <div className='absolute bg-amber-950 opacity-15 w-full h-full top-0 left-0 rounded' />
                <div className='relative w-full rounded px-6 py-12 items-end h-[500px] md:h-[500px]'>
                  <div className='absolute bottom-12'>
                    <h3 className='text-white font-bold text-lg mb-3'>
                      {project.title}
                    </h3>
                    <p className='text-white mb-6 font-mono'>
                      {project.description}
                    </p>
                    {/* <Link
                      href='/'
                      className='py-4 px-8 font-bold rounded border border-gray-700 bg-white'
                    >
                      Read More
                    </Link> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperSlide />
          </Swiper>
        </div>

        <div className='mb-6 max-w-6xl text-right mx-auto px-4 lg:px-0'>
          <h1 className='text-4xl font-bold mb-2'>Oil & Gas</h1>
          <div className='w-40 rounded-full h-1.5 bg-gray-700 ml-auto' />
        </div>
        <div className='mb-12'>
          <Swiper
            slidesPerView={1.2}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 2.5,
              },
              1280: {
                slidesPerView: 3.5,
              },
              1536: {
                slidesPerView: 4.8,
                spaceBetween: 24,
              },
            }}
            spaceBetween={16}
            modules={[FreeMode]}
          >
            {projects?.oilgas.map((project, i) => (
              <SwiperSlide
                key={project.title}
                className='project-slide flex relative rounded-lg bg-cover p-0 m-0'
                style={{
                  backgroundImage: `url("${project.image}")`,
                }}
              >
                <div className='absolute bg-amber-950 opacity-15 w-full h-full top-0 left-0 rounded' />
                <div className='relative w-full rounded px-6 py-12 items-end h-[500px] md:h-[500px]'>
                  <div className='absolute bottom-12'>
                    <h3 className='text-white font-bold text-lg mb-3'>
                      {project.title}
                    </h3>
                    <p className='text-white mb-6 font-mono'>
                      {project.description}
                    </p>
                    {/* <Link
                      href='/'
                      className='py-4 px-8 font-bold rounded border border-gray-700 bg-white'
                    >
                      Read More
                    </Link> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperSlide />
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'project'])),
  },
});

Project.getLayout = function getLayout(page) {
  return <Layout title='Project'>{page}</Layout>;
};
