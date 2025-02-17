import type { FC } from "react";
export default function Buttons(props: { title: string; href: string }) {
  const { title, href } = props;

  return (
    <>
      <a href={href} target="_blank" className="normal_button">
        <div className="text-white">{title}</div>
      </a>
    </>
  );
}
