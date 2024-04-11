import EnRecruitment from '@/app/home/_components/EnRecruitment';
import Interest from '@/app/home/_components/Interest';
import News from '@/app/home/_components/News';
import Recruitment from '@/app/home/_components/Recruitment';
import ArticleContainer from '@/components/article/ArticleContainer';
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
          <Interest />
          <EnRecruitment />
        </SectionContent>
      </SectionContainer>
      <SectionContainer>
        <SectionHeader headerTitle="NEWS" />
        <SectionContent>
          <News />
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
