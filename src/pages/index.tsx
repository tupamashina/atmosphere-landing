import { FifthSection } from '@/components/sections/Fifth';
import { FirstSection } from '@/components/sections/First';
import { FourthSection } from '@/components/sections/Fourth';
import { SecondSection } from '@/components/sections/Second';
import { ThirdSection } from '@/components/sections/Third';

import type { NextPage } from 'next';

const IndexPage: NextPage = () => (
  <main>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
  </main>
);

export default IndexPage;
