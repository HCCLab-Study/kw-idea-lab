import Link from 'next/link';
import React from 'react';

export default function Recruitment() {
  return (
    <div>
      <p>
        디지털경험분석 연구실(IDEA Lab.) 은 1) 디지털 세상에서 인간을 이해하고
        분석하는 인공지능 기술을 탐구하고, 이를 기반으로 2) 사용자를 널리 이롭게
        하는 소프트웨어를 개발합니다. 사용자 경험을 핵심가치로 삼아 기획, 분석,
        개발의 영역을 다루고 있으며, 특히 여러 영역의 경계에서 창의적인 IDEA로
        도전적인 문제를 해결하고 있습니다.
      </p>
      <p>
        연구생(학부연구생/석사과정/박사과정)에 관심이 있다면
        <Link
          href="https://kdpark.notion.site/IDEA-Lab-f5ef11264d2a4e8e8d0c5e7469491f06"
          target="_blank">
          모집 안내문
        </Link>
        을 참고하세요
      </p>
    </div>
  );
}
