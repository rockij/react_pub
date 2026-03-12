```tsx
import React from "react";

interface RectangleProps {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
}

const Rectangle: React.FC<RectangleProps> = ({
  width,
  height,
  borderRadius,
  backgroundColor,
}) => (
  <div
    style={{
      width,
      height,
      borderRadius,
      backgroundColor,
      boxSizing: "border-box",
    }}
  />
);

interface TextProps {
  content: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  color: string;
}

const TextNode: React.FC<TextProps> = ({
  content,
  fontSize,
  fontWeight,
  lineHeight,
  color,
}) => (
  <span
    style={{
      fontSize,
      fontWeight,
      lineHeight: `${lineHeight}px`,
      color,
    }}
  >
    {content}
  </span>
);

const SampleComponent: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 320,
        padding: 16,
        borderRadius: 12,
        backgroundColor: "#fff",
        boxSizing: "border-box",
        gap: 12,
      }}
    >
      <TextNode
        content="Header Title"
        fontSize={24}
        fontWeight={600}
        lineHeight={32}
        color="#111"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
        }}
      >
        <Rectangle
          width={48}
          height={48}
          borderRadius={8}
          backgroundColor="#007AFF"
        />
        <TextNode
          content="Some description text that might be a little longer."
          fontSize={14}
          fontWeight={400}
          lineHeight={20}
          color="#333"
        />
      </div>
      <Rectangle width={320} height={1} borderRadius={0} backgroundColor="#EEE" />
    </div>
  );
};

export default SampleComponent;
```