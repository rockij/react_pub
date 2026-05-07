import Link from 'next/link';
import TooltipDemo from '../components/Tooltip/Tooltip';

type StorybookNavLinkComponentsProps = {
  href: string;
};

export function StorybookNavLinkComponents({ href }: StorybookNavLinkComponentsProps) {
  return (
    <TooltipDemo
      id="global-storybook-nav-components"
      content="컴포넌트 상세 확인"
      place="bottom"
      triggerStyle={{ height: '100%' }}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        Storybook
      </Link>
    </TooltipDemo>
  );
}
