
import React from 'react';
import Hero from './Hero';
import OutstandingResults from './OutstandingResults';
import StudentTestimonials from './StudentTestimonials';
import SeniorCourseRoadmap from './SeniorCourseRoadmap';
import SeniorTeacherCarousel from './SeniorTeacherCarousel';
import HonorRoll from './HonorRoll';
import ParentTestimonials from './ParentTestimonials';
import SeniorBanner from './SeniorBanner';
import { NewsItem, PageType } from '../types';
import { Target } from 'lucide-react';

interface SeniorPageProps {
  heroNews: NewsItem[];
  onNavigate: (page: PageType) => void;
}

const SeniorPage: React.FC<SeniorPageProps> = ({ heroNews, onNavigate }) => {
  
  const SENIOR_QUICK_LINKS = [
    { label: '課程班別', href: '#course-roadmap' },
    { label: '教學成果', href: '#outstanding-results' },
    { label: '師資陣容', href: '#senior-teachers' },
    { label: '家長見證', href: '#testimonials' },
  ];

  return (
    <div>
      <Hero 
        title={
          <div className="inline-block text-left">
            <span className="block mb-2">
              頂尖大學
            </span>
            <span className="text-purple-600 block">
              夢想
              <span className="relative inline-block">
                啟航
                {/* 地平線 - 位置微調向上 2px */}
                <span 
                  className="absolute left-[0.7em] h-[2px] bg-purple-200/60 pointer-events-none z-10"
                  style={{ 
                    bottom: 'calc(1.22em + 2px)',
                    width: 0,
                    transform: 'translateX(-50%)',
                    animation: 'groundLineControl 15s ease-in-out infinite'
                  }}
                />
                
                {/* 袋鼠遮罩容器 - 位置微調向上 2px */}
                <div
                  className="absolute left-[0.7em] w-[3em] h-[10em] overflow-hidden pointer-events-none select-none z-20"
                  style={{ 
                    bottom: 'calc(1.22em + 2px)',
                    transform: 'translateX(-50%)' 
                  }}
                >
                  <img
                    src="https://www.dropbox.com/scl/fi/gqc20td9wam3srl7ufhsu/_.svg?rlkey=c7wna8nbddi0ztlx57hs9e7wz&raw=1"
                    alt="kangaroo"
                    className="absolute bottom-0 left-1/2 w-[1.25em] h-[1.25em]"
                    style={{ 
                      opacity: 0,
                      transform: 'translateX(-50%) translateY(100%)',
                      animation: 'kangarooHorizonAction 15s ease-in-out infinite'
                    }}
                  />
                </div>
              </span>
            </span>
          </div>
        }
        topLabel="育豪資優 高中部"
        gradeLabel="高一 ~ 高三"
        courseLabel="先修. 許豪英文. 寒暑訓K書班"
        subtitle="學測分科雙軌並進，打造完美學習歷程。針對頂尖大學校系需求，提供客製化升學指導。"
        newsItems={heroNews}
        onNavigate={onNavigate}
        showQuickLinks={true}
        quickLinks={SENIOR_QUICK_LINKS}
        theme="purple"
        secondaryBtnLabel="學測落點預測"
        secondaryBtnIcon={<Target size={20} />}
      />

      {/* 1. Image Carousel Banner */}
      <SeniorBanner />

      {/* 2. Outstanding Results (亮眼成績 - 版面同國小) */}
      <OutstandingResults theme="purple" />

      {/* 3. Student Testimonials (學員心得 - 版面同國小) */}
      <StudentTestimonials theme="purple" />

      {/* 4. Course Roadmap (課程規劃 - 版面同國小, 高中專屬內容) */}
      <SeniorCourseRoadmap />

      {/* 5. Teachers (師資陣容 - 版面同國小, 高中專屬圖片) */}
      <SeniorTeacherCarousel />

      {/* 6. Honor Roll (榮耀金榜 - 英語檢定/前三志願/各校榜首) */}
      <HonorRoll variant="senior" theme="purple" />

      {/* 7. Parent Testimonials (口碑推薦 - 版面同國小) */}
      <ParentTestimonials theme="purple" />

    </div>
  );
};

export default SeniorPage;
