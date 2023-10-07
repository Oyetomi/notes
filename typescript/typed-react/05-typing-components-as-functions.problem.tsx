import React from "react";

interface Props {
  className: string;
}

export const Button = (props: Props) => {
  return <div></div>;
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
