import Link from 'next/link';
import TooltipDemo from '../components/Tooltip/Tooltip';

type StorybookNavLinkProps = {
  href: string;
  tooltipId: string;
};

export function StorybookNavLink({ href, tooltipId }: StorybookNavLinkProps) {
  return (
    <TooltipDemo id={tooltipId} content="컴포넌트 문서를 Storybook 새 탭에서 엽니다.">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        Storybook
      </Link>
    </TooltipDemo>
  );
}
