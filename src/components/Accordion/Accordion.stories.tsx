import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Accordion>;

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div style={{ width: 760, maxWidth: '100%' }}>{children}</div>
);

const CheckboxHeaderAccordion = () => {
  const [checked, setChecked] = React.useState(false);
  const titleId = 'storybook-accordion-checkbox-title';
  const panelId = 'storybook-accordion-checkbox-panel';

  return (
    <div className="accordion">
      <div className="accordion-panel accordion-checkbox-panel">
        <div className="accordion-checkbox-header">
          <Checkbox
            className="accordion-header-checkbox"
            id="storybook-accordion-checkbox"
            size="medium"
            label="Select shipping details"
            checked={checked}
            onChange={setChecked}
          />

          <h2 id={titleId} className="accordion-heading">
            <button
              type="button"
              className="accordion-trigger"
              aria-expanded={checked}
              aria-controls={panelId}
              onClick={() => setChecked(prev => !prev)}
            >
              <span className="accordion-trigger-label">Shipping details confirmation</span>
              <span className="accordion-trigger-chevron" aria-hidden="true" />
            </button>
          </h2>
        </div>

        <div
          id={panelId}
          className="accordion-content"
          role="region"
          aria-labelledby={titleId}
          aria-hidden={!checked}
        >
          <div>
            <p>Check the header control to open the section and review the shipping notes.</p>
            <p>This pattern works well when the user must explicitly acknowledge a section.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SingleOpen: Story = {
  name: 'single',
  args: {
    mode: 'single',
    defaultOpenId: 'panel3',
    items: [
      {
        id: 'panel1',
        title: 'Accordion 1',
        content: <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, amet!</p>,
      },
      {
        id: 'panel2',
        title: 'Accordion 2',
        content: (
          <>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p>Doloremque adipisci ea error ad architecto tempore ullam dolores voluptatibus.</p>
            <p>Provident, tempore sit. Eaque nam eius assumenda iste rem.</p>
          </>
        ),
      },
      {
        id: 'panel3',
        title: 'Accordion Actions',
        content: (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget.
            </p>
            <div
              style={{ display: 'flex', justifyContent: 'flex-end', gap: 16, padding: '16px 0 0' }}
            >
              <button type="button">CANCEL</button>
              <button type="button">AGREE</button>
            </div>
          </>
        ),
      },
    ],
  },
  render: args => (
    <Wrapper>
      <Accordion {...args} />
    </Wrapper>
  ),
};

export const MultipleToggle: Story = {
  name: 'multiple',
  args: {
    mode: 'multiple',
    defaultOpenIds: ['panel2'],
    items: [
      {
        id: 'panel1',
        title: 'Grid is awesome',
        content: <p>Section 1 content</p>,
      },
      {
        id: 'panel2',
        title: "It's full of neat tricks",
        content: (
          <>
            <p>Section 2 content</p>
            <p>You can keep several sections open at the same time.</p>
          </>
        ),
      },
      {
        id: 'panel3',
        title: 'Tell me more (disabled)',
        disabled: true,
        content: <p>This section stays unavailable while disabled.</p>,
      },
    ],
  },
  render: args => (
    <Wrapper>
      <Accordion {...args} />
    </Wrapper>
  ),
};

export const LongTitle: Story = {
  name: 'long title',
  args: {
    mode: 'single',
    items: [
      {
        id: 'panel1',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Long title alignment check',
        content: (
          <p>The chevron stays aligned even when the heading text wraps to multiple lines.</p>
        ),
      },
      {
        id: 'panel2',
        title: 'Consectetur adipisicing',
        content: <p>Section 2 content</p>,
      },
    ],
  },
  render: args => (
    <Wrapper>
      <Accordion {...args} />
    </Wrapper>
  ),
};

export const CheckboxHeader: Story = {
  name: 'checkbox header',
  render: () => (
    <Wrapper>
      <CheckboxHeaderAccordion />
    </Wrapper>
  ),
};
