import React from "react";

const ContentBlock = ({
  children,
  width = "w-1/4",
}: Readonly<{
  children: React.ReactNode;
  width?: string;
}>) => {
  return <div className={`p-6 bg-white rounded-xl ${width}`}>{children}</div>;
};

export default ContentBlock;
