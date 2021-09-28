import * as React from 'react';

type Size = {
  height: number;
  width: number;
  depth: number;
};

type Position = {
  x: number;
  y: number;
  z: number;
};

type Rotation = {
  x: number;
  y: number;
  z: number;
};

type Props = {
  size: Size;
  position: Position;
  rotation: Rotation;
};

function Cube({ size, position, rotation }: Props): JSX.Element {
  const [hovered, setHovered] = React.useState<boolean>(false);

  return (
    <mesh
      position={[position.x, position.y, position.z]}
      rotation={[rotation.x, rotation.y, rotation.z]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <boxGeometry args={[size.width, size.height, size.depth]} />
      <meshStandardMaterial color={hovered ? '#DE3163' : 'orange'} />
    </mesh>
  );
}

export default Cube;
