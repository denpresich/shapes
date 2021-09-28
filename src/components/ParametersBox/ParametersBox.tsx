import './ParametersBox.css';

import cn from 'classnames';

import { Input } from './Input';
import { SliderInput } from './SliderInput';

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
  className?: string;

  size: Size;
  position: Position;
  rotation: Rotation;
  sceneCameraPosition: CameraPosition;
  sideCameraPosition: CameraPosition;
  lightPosition: LightPosition;
  showSideCamera: boolean;

  onSizeChange: (size: Size) => void;
  onPositionChange: (position: Position) => void;
  onRotationChange: (rotation: Rotation) => void;
  onSceneCameraPositionChange: (position: CameraPosition) => void;
  onSideCameraPositionChange: (position: CameraPosition) => void;
  onLightPositionChange: (position: LightPosition) => void;
  onShowSideCameraChange: (show: boolean) => void;
};

function ParametersBox({
  className,
  size,
  position,
  rotation,
  sceneCameraPosition,
  sideCameraPosition,
  lightPosition,
  showSideCamera,
  onSizeChange,
  onPositionChange,
  onRotationChange,
  onSceneCameraPositionChange,
  onSideCameraPositionChange,
  onLightPositionChange,
  onShowSideCameraChange,
}: Props): JSX.Element {
  return (
    <div className={cn('parameters-box', className)}>
      <div>
        <h4>Views</h4>
        <div>
          <label htmlFor="showSideCamera">Side camera</label>
          <input
            type="checkbox"
            id="showSideCamera"
            name="showSideCamera"
            checked={showSideCamera}
            onChange={(e) => onShowSideCameraChange(e.target.checked)}
          />
        </div>
      </div>
      <div>
        <h4>Transformations</h4>
        <div className="transformation-properties">
          <div>
            <Input
              id="width"
              label="X:"
              value={size.width}
              min={0}
              max={5}
              step={0.1}
              onChange={(width) => onSizeChange({ ...size, width })}
            />
            <Input
              id="height"
              label="Y:"
              value={size.height}
              min={0}
              max={5}
              step={0.1}
              onChange={(height) => onSizeChange({ ...size, height })}
            />
            <Input
              id="depth"
              label="Z:"
              value={size.depth}
              min={0}
              max={5}
              step={0.1}
              onChange={(depth) => onSizeChange({ ...size, depth })}
            />
          </div>
          <div>
            <Input
              id="rotateX"
              label="X°"
              value={rotation.x}
              min={-360}
              max={360}
              step={1}
              onChange={(x) => onRotationChange({ ...rotation, x })}
            />
            <Input
              id="rotateY"
              label="Y°"
              value={rotation.y}
              min={-360}
              max={360}
              step={1}
              onChange={(y) => onRotationChange({ ...rotation, y })}
            />
            <Input
              id="rotateZ"
              label="Z°"
              value={rotation.z}
              min={-360}
              max={360}
              step={1}
              onChange={(z) => onRotationChange({ ...rotation, z })}
            />
          </div>
        </div>
      </div>
      <div>
        <h4>Position</h4>
        <div className="position-properties">
          <Input
            id="posX"
            label="X:"
            value={position.x}
            min={-5}
            max={5}
            step={0.1}
            onChange={(x) => onPositionChange({ ...position, x })}
          />
          <Input
            id="posY"
            label="Y:"
            value={position.y}
            min={-5}
            max={5}
            step={0.1}
            onChange={(y) => onPositionChange({ ...position, y })}
          />
          <Input
            id="posZ"
            label="Z:"
            value={position.z}
            min={-5}
            max={5}
            step={0.1}
            onChange={(z) => onPositionChange({ ...position, z })}
          />
        </div>
      </div>
      <div>
        <h4>Scene camera</h4>
        <div>
          <SliderInput
            id="camX"
            label="X:"
            value={sceneCameraPosition.x}
            min={-360}
            max={360}
            step={1}
            onChange={(x) =>
              onSceneCameraPositionChange({ ...sceneCameraPosition, x })
            }
          />
          <SliderInput
            id="camY"
            label="Y:"
            value={sceneCameraPosition.y}
            min={-360}
            max={360}
            step={1}
            onChange={(y) =>
              onSceneCameraPositionChange({ ...sceneCameraPosition, y })
            }
          />
          <SliderInput
            id="camZ"
            label="Z:"
            value={sceneCameraPosition.z}
            min={-360}
            max={360}
            step={1}
            onChange={(z) =>
              onSceneCameraPositionChange({ ...sceneCameraPosition, z })
            }
          />
          <SliderInput
            id="camZoom"
            label="Zoom:"
            value={sceneCameraPosition.zoom}
            min={1}
            max={300}
            step={1}
            onChange={(zoom) =>
              onSceneCameraPositionChange({ ...sceneCameraPosition, zoom })
            }
          />
        </div>
      </div>
      {showSideCamera ? (
        <div>
          <h4>Side camera</h4>
          <div>
            <SliderInput
              id="mirrorX"
              label="X:"
              value={sideCameraPosition.x}
              min={-360}
              max={360}
              step={1}
              onChange={(x) =>
                onSideCameraPositionChange({ ...sideCameraPosition, x })
              }
            />
            <SliderInput
              id="mirrorY"
              label="Y:"
              value={sideCameraPosition.y}
              min={-360}
              max={360}
              step={1}
              onChange={(y) =>
                onSideCameraPositionChange({ ...sideCameraPosition, y })
              }
            />
            <SliderInput
              id="mirrorZ"
              label="Z:"
              value={sideCameraPosition.z}
              min={-360}
              max={360}
              step={1}
              onChange={(z) =>
                onSideCameraPositionChange({ ...sideCameraPosition, z })
              }
            />
            <SliderInput
              id="mirrorZoom"
              label="Zoom:"
              value={sideCameraPosition.zoom}
              min={1}
              max={300}
              step={1}
              onChange={(zoom) =>
                onSideCameraPositionChange({ ...sideCameraPosition, zoom })
              }
            />
          </div>
        </div>
      ) : null}

      <div>
        <h4>Light position</h4>
        <div>
          <SliderInput
            id="lightX"
            label="X:"
            value={lightPosition.x}
            min={-360}
            max={360}
            step={1}
            onChange={(x) => onLightPositionChange({ ...lightPosition, x })}
          />
          <SliderInput
            id="lightX"
            label="Y:"
            value={lightPosition.y}
            min={-360}
            max={360}
            step={1}
            onChange={(y) => onLightPositionChange({ ...lightPosition, y })}
          />
          <SliderInput
            id="light~"
            label="Z:"
            value={lightPosition.z}
            min={-360}
            max={360}
            step={1}
            onChange={(z) => onLightPositionChange({ ...lightPosition, z })}
          />
        </div>
      </div>
    </div>
  );
}

export default ParametersBox;
