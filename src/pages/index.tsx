import { FifthSection } from '@/components/FifthSection';
import { FirstSection } from '@/components/FirstSection';
import { FourthSection } from '@/components/FourthSection';
import { SecondSection } from '@/components/SecondSection';
import { ThirdSection } from '@/components/ThirdSection';

import type { NextPage } from 'next';

const Page: NextPage = () => (
  <main>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
  </main>
);

export default Page;
