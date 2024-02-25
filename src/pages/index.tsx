import { FifthSection } from '@/components/FifthSection';
import { FirstSection } from '@/components/FirstSection';
import { SecondSection } from '@/components/SecondSection';
import { ThirdSection } from '@/components/ThirdSection';

import type { NextPage } from 'next';

const Page: NextPage = () => (
  <main>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FifthSection />
  </main>
);

export default Page;
