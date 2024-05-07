import ArticleContainer from '@/components/article/ArticleContainer';
import React from 'react';

const researchScope = [
  '설계 / 기획 : UX Design, Interaction Design',
  '개발 / 구현 : Web, Mobile, IoT, XR applications',
  '분석 : Human Activity Recognition, UX analytics, Causal Inference, AI applications (NLP, Vision, Voice)',
  '운영 : DevOps, MLOps, CXM',
];

const applicationDomain = [
  'Healthcare / Medical / Rehabilitation',
  'Education / Learning',
  'E-commerce',
  'Assistive Technology',
  'Automotive UX / Robot UX',
];

export default function Interest() {
  return (
    <section className="flex mt-16 gap-x-4">
      <ArticleContainer>
        <ArticleContainer.Header title="Research Scope (Products' Lifecycle)" />
        <ArticleContainer.ItemLists items={researchScope} />
      </ArticleContainer>
      <ArticleContainer>
        <ArticleContainer.Header title="Application Domain" />
        <ArticleContainer.ItemLists items={applicationDomain} />
      </ArticleContainer>
    </section>
  );
}
