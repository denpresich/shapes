import './Scene.css';

import { Canvas } from '@react-three/fiber';
import { Cube } from '../Cube';

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

type CameraPosition = {
  x: number;
  y: number;
  z: number;
  zoom: number;
};

type LightPosition = {
  x: number;
  y: number;
  z: number;
};

type Props = {
  size: Size;
  rotation: Rotation;
  position: Position;
  cameraPosition: CameraPosition;
  lightPosition: LightPosition;
};

function Scene({
  size,
  rotation,
  position,
  cameraPosition,
  lightPosition,
}: Props): JSX.Element {
  return (
    <Canvas className="scene">
      <ambientLight />
      <pointLight
        position={[lightPosition.x, lightPosition.y, lightPosition.z]}
      />
      <mesh
        scale={-cameraPosition.zoom / 100}
        rotation={[cameraPosition.x, cameraPosition.y, cameraPosition.z]}
      >
        <gridHelper args={[10, 20]} />
        <Cube size={size} position={position} rotation={rotation} />
      </mesh>
    </Canvas>
  );
}

export default Scene;
