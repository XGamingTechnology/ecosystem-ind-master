import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PageHeader({ image, title, subtitle }) {
  return (
    <section className='flex sm:items-center gap-4 flex-col mb-12 md:mb-0 sm:flex-row text-white max-w-6xl mx-auto'>
      <motion.div
        className='flex-1'
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src={image}
          width={480}
          height={400}
          alt='Ecosystem International'
          className='w-1/2 sm:w-full lg:mt-6'
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='flex-1'
      >
        <div className='px-4'>
          <h1 className='text-3xl lg:text-4xl font-bold mb-4 uppercase'>
            {title}
          </h1>
          {subtitle && <p className='text-base lg:text-lg mb-3'>{subtitle}</p>}
        </div>
      </motion.div>
    </section>
  );
}
