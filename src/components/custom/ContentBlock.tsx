import React from "react";

const ContentBlock = ({
  children,
  width = "w-1/4",
  className,
}: Readonly<{
  children: React.ReactNode;
  width?: string;
  className?: string;
}>) => {
  return (
    <div
      className={`p-6 bg-white rounded-xl ${width} ${className} overflow-y-auto scroll-smooth`}>
      {children}
    </div>
  );
};

export default ContentBlock;
