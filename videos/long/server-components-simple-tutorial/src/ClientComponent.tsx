"use client";

type ClientComponentProps = {
  children: React.ReactNode;
};

export default function ClientComponent({ children }: ClientComponentProps) {
  console.log("this ll rendered in the front");
  return <>
      <h1>
        {children}
      </h1>
      <h1>
        this component ll rendered in the client side while it is useed insde in the server compoent
      </h1>
  </>;
}
