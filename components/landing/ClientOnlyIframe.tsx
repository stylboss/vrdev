"use client";
import React from "react";

const ClientOnlyIframe = ({ src, ...props }: React.IframeHTMLAttributes<HTMLIFrameElement>) => {
  return <iframe src={src} {...props} />;
};

export default ClientOnlyIframe;