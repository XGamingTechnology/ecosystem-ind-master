import Layout from '@/components/layouts/article';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const PageHeader = ({ title, image }) => (
  <section className='flex gap-4 text-white max-w-6xl mx-auto mb-6'>
    <Image
      src={image}
      width={480}
      height={400}
      alt='Ecosystem International'
      className='mt-6'
    />
    <div className='px-4'>
      <h1 className='text-2xl font-bold mb-6'>{title}</h1>
      <p className='text-lg mb-3'>
        ECR is based on scientific principles involving responses of water
        contaminants to strong electric fields and electrically-induced
        oxidation and reduction reactions.
      </p>
      <p className='font-bold text-lg uppercase'>
        “Imagine chemical dosing, <br />
        but easier & without chemical.”
      </p>
    </div>
  </section>
);

export default function Ecr() {
  const processes = [
    'Seeding resulting from the anode reduction of metal ions that become new centres for larger, stable, insoluble complexes that precipitate as complex metal oxides.',
    "Emulsion breaking resulting from the oxygen and hydrogen ions that bond into the water receptor sites of oil molecules creating a water insoluble complex separating water from oil, driller's mud, dyes, inks, etc.",
    "Halogen complexing as the metal ions bind themselves to chlorines in a chlorinated hydrocarbon molecule resulting in a large insoluble complex separating water from pesticides, herbicides, chlorinated PCB's etc.",
    'Bleaching by the oxygen ions produced in the reaction chamber oxidizes dyes, cyanides, bacteria, viruses, biohazards, etc.',
    'Electron flooding of the water eliminates the polar effect of the water complex, allowing colloidal materials to precipitate, and the increase of electrons creates an osmotic pressure that ruptures bacteria, cysts, and viruses;',
    'Oxidation - Reduction reactions are forced to their natural end point within the chamber, which speeds up the natural process of nature that occurs in wet chemistry.',
    'EC induced PH swings higher.',
  ];
  return (
    <div>
      <PageHeader
        title='Electro Contaminant Removal (ECR)'
        image='/main-ecr.png'
      />
      <section className='pb-12'>
        <div className='max-w-6xl mx-auto'>
          <div className='mb-12 grid grid-cols-2 gap-4'>
            <Image
              src='/ecr-process.png'
              width={500}
              height={400}
              alt='ECR Process'
            />
            <div className='pb-16'>
              <h1 className='text-eco-blue text-5xl font-bold'>
                Electro <br />
                Contaminant <br />
                Removal Reaction
              </h1>
              <p>
                Electro coagulation through the reaction chamber produces
                several distinct electrochemical results independently. These
                observed reactions could be explained as:
              </p>
            </div>
            {processes.map((processItem) => (
              <div key={processItem} className='flex items-start'>
                <div className='rounded-md bg-eco-blue w-full max-w-11 h-11' />
                <p className='text-lg pl-3 -mt-1'>{processItem}</p>
              </div>
            ))}
          </div>
          <div className='flex items-center gap-6 px-6 text-white rounded-2xl bg-eco-blue'>
            <Image
              src='/ecr-unit.png'
              width={553}
              height={436}
              alt='ECR Unit'
              className='-mt-10'
            />
            <h1 className='font-bold text-3xl uppercase'>
              ELECTRO CONTAMINANT REMOVAL UNIT
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

Ecr.getLayout = function getLayout(page) {
  return <Layout title='ECR'>{page}</Layout>;
};
