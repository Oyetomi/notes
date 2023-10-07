import React from "react";

export const Button = (props: { children: React.ReactNode }) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button children={}></Button>
      <Button>Hello world!</Button>
    </>
  );
};
