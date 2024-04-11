import Recruitment from '@/app/home/_components/Recruitment';
import Introduction from '@/components/introduction/Introduction';
import SectionContainer from '@/components/layout/SectionContainer';
import { SectionContent } from '@/components/layout/SectionContent';
import { SectionHeader } from '@/components/layout/SectionHeader';

export default function Page() {
  return (
    <main className="">
      <Introduction
        title="Interactive Digital Experience Analytics Laboratory"
        textColor="text-white">
        <Background />
      </Introduction>
      <SectionContainer>
        <SectionHeader headerTitle="INTRODUCTION" />
        <SectionContent>
          <Recruitment />
        </SectionContent>
      </SectionContainer>
    </main>
  );
}

function Background() {
  return (
    <div className="bg-[url('../assets/image/background.png')] bg-cover absolute top-0 w-[100%] h-[100%]"></div>
  );
}
