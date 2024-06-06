import { Counter } from '@/components/Counter';
import { Form } from '@/components/Form';
import { Scheme } from '@/components/Scheme';
import { Why } from '@/components/Why';
import { FifthSection } from '@/components/sections/Fifth';
import { FirstSection } from '@/components/sections/First';
import { FourthSection } from '@/components/sections/Fourth';
import { SecondSection } from '@/components/sections/Second';
import { ThirdSection } from '@/components/sections/Third';

import type { NextPage } from 'next';

const IndexPage: NextPage = () => (
  <main>
    <FirstSection />
    <Form />

    <SecondSection />
    <Counter />

    <ThirdSection />
    <Why />

    <FourthSection />
    <Scheme />

    <FifthSection />
    <Form last />
  </main>
);

export default IndexPage;
