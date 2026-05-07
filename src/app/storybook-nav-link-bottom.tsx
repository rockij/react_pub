import Link from 'next/link';
import TooltipDemo from '../components/Tooltip/Tooltip';

type StorybookNavLinkProps = {
  href: string;
  tooltipId: string;
};

export function StorybookNavLinkBottom({ href, tooltipId }: StorybookNavLinkProps) {
  return (
    <TooltipDemo id={tooltipId} content="컴포넌트 상세 확인" place="bottom">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        Storybook
      </Link>
    </TooltipDemo>
  );
}
