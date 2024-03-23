import { maskitoPhoneOptionsGenerator } from '@maskito/phone';
import metadata from 'libphonenumber-js/metadata.max.json';

import { FifthSection } from '@/components/FifthSection';
import { FirstSection } from '@/components/FirstSection';
import { FourthSection } from '@/components/FourthSection';
import { SecondSection } from '@/components/SecondSection';
import { ThirdSection } from '@/components/ThirdSection';
import { TextField } from '@/components/_/TextField';

import type { NextPage } from 'next';

const m = maskitoPhoneOptionsGenerator({ metadata, countryIsoCode: 'RU' });

const Page: NextPage = () => (
  <main>
    <FirstSection />

    <div style={{ padding: '2rem', display: 'flex', gap: '1rem' }}>
      <TextField
        label="Label"
        maskOptions={m}
        supportingText="Supporting text"
      />

      <TextField aria-invalid label="Label" />
    </div>

    <SecondSection />
    <FifthSection />
    <ThirdSection />
    <FourthSection />
  </main>
);

export default Page;
