import { Block } from '@/components/Block';
import { FifthSection } from '@/components/sections/Fifth';
import { FirstSection } from '@/components/sections/First';
import { FourthSection } from '@/components/sections/Fourth';
import { SecondSection } from '@/components/sections/Second';
import { ThirdSection } from '@/components/sections/Third';

import type { NextPage } from 'next';

const IndexPage: NextPage = () => (
  <main>
    <FirstSection />
    <Block />

    <SecondSection />
    <Block />

    <ThirdSection />
    <Block />

    <FourthSection />
    <Block />

    <FifthSection />
    <Block />
  </main>
);

export default IndexPage;
