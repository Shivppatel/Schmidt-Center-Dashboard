import { Fragment } from 'react';
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon
} from '@heroicons/react/outline';
const features = [
  {
    name: 'Connected to the Purple Air Network',
    description:
      'Our project displays the air quality within PG County, geared towards students and faculty alike.',
    icon: GlobeAltIcon
  },
  {
    name: 'Compare Locations',
    description:
      'This website will have the ability to compare and contrast different regions in the county.',
    icon: ScaleIcon
  },
  {
    name: 'Live Air Quality Data',
    description:
      'Our site utilizes the data found from https://map.purpleair.com/ , updated in real time for transparent use.',
    icon: LightningBoltIcon
  },
  {
    name: 'Mobile notifications',
    description: 'This runs for both desktop and mobile applications!',
    icon: AnnotationIcon
  }
];
function Home() {
  return (
    <>
      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='py-12 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='lg:text-center'>
                <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>
                  Air Quality
                </h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  Schmidt Center Dashboard
                </p>
                <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>

              <div className='mt-10'>
                <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
                  {features.map((feature) => (
                    <div key={feature.name} className='relative'>
                      <dt>
                        <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                          <feature.icon
                            className='h-6 w-6'
                            aria-hidden='true'
                          />
                        </div>
                        <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                          {feature.name}
                        </p>
                      </dt>
                      <dd className='mt-2 ml-16 text-base text-gray-500'>
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
