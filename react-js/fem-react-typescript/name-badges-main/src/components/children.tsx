import { PropsWithChildren } from 'react';

type BoxProps = PropsWithChildren<{
  style: React.CSSProperties;
}>;

const Box = ({ children, style }: BoxProps) => {
  return (
    <section
      className="m-4"
      style={{
        padding: '1em',
        border: '5px solid purple',
        margin: '3em',
        ...style,
      }}
    >
      {children}
    </section>
  );
};

const Application = () => {
  return (
    <main className="m-8">
      <Box
        style={{
          padding: '1em',
          border: '5px solid purple',
          margin: '3em',
        }}
      >
        Just a string.
        <p>Some HTML that is not nested.</p>
        <Box
          style={{
            padding: '1em',
            border: '5px solid purple',
            margin: '9em',
          }}
        >
          <h2>Another React component with one child.</h2>
        </Box>
        <Box
          style={{
            padding: '1em',
            border: '5px solid purple',
            margin: '6em',
          }}
        >
          <h2 className="mb-4">A nested React component with two children.</h2>
          <p>The second child.</p>
        </Box>
      </Box>
    </main>
  );
};

export default Application;
