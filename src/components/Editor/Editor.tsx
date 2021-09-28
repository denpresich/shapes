import './Editor.css';

import * as React from 'react';

import { degToRad } from '../../utils/Units';

import { ParametersBox } from '../ParametersBox';
import { Scene } from '../Scene';

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

type EditorConfig = {
  size: Size;
  position: Position;
  rotation: Rotation;
  sceneCameraPosition: CameraPosition;
  sideCameraPosition: CameraPosition;
  lightPosition: LightPosition;
  showSideCamera: boolean;
};

const initialConfig: EditorConfig = {
  size: {
    height: 1,
    width: 1,
    depth: 1,
  },
  position: {
    x: 0,
    y: 0,
    z: 0,
  },
  rotation: {
    x: 0,
    y: 0,
    z: 0,
  },
  sceneCameraPosition: {
    x: 35,
    y: 0,
    z: 0,
    zoom: 100,
  },
  sideCameraPosition: {
    x: 35,
    y: 0,
    z: 0,
    zoom: 100,
  },
  lightPosition: {
    x: 10,
    y: 10,
    z: 10,
  },
  showSideCamera: false,
};

enum ConfigActions {
  'SetSize',
  'SetPosition',
  'SetRotation',
  'SetSceneCameraPosition',
  'SetSideCameraPosition',
  'SetLightPosition',
  'SetShowSideCamera',
}

function reducer(state: any, action: any): EditorConfig {
  switch (action.type) {
    case ConfigActions.SetSize:
      return { ...state, size: action.payload };
    case ConfigActions.SetPosition:
      return { ...state, position: action.payload };
    case ConfigActions.SetRotation:
      return { ...state, rotation: action.payload };
    case ConfigActions.SetSceneCameraPosition:
      return { ...state, sceneCameraPosition: action.payload };
    case ConfigActions.SetSideCameraPosition:
      return { ...state, sideCameraPosition: action.payload };
    case ConfigActions.SetLightPosition:
      return { ...state, lightPosition: action.payload };
    case ConfigActions.SetShowSideCamera:
      return { ...state, showSideCamera: action.payload };
    default:
      return state;
  }
}

function Editor(): JSX.Element {
  const [editorConfig, dispatch] = React.useReducer(reducer, initialConfig);

  const rotation: Rotation = {
    x: degToRad(editorConfig.rotation.x),
    y: degToRad(editorConfig.rotation.y),
    z: degToRad(editorConfig.rotation.z),
  };

  const sceneCameraPosition: CameraPosition = {
    x: degToRad(editorConfig.sceneCameraPosition.x),
    y: degToRad(editorConfig.sceneCameraPosition.y),
    z: degToRad(editorConfig.sceneCameraPosition.z),
    zoom: editorConfig.sceneCameraPosition.zoom,
  };

  const sideCameraPosition: CameraPosition = {
    x: degToRad(editorConfig.sideCameraPosition.x),
    y: degToRad(editorConfig.sideCameraPosition.y),
    z: degToRad(editorConfig.sideCameraPosition.z),
    zoom: editorConfig.sideCameraPosition.zoom,
  };

  return (
    <div className="editor">
      <div>
        <ParametersBox
          className="editor-parameters-box"
          size={editorConfig.size}
          position={editorConfig.position}
          rotation={editorConfig.rotation}
          sceneCameraPosition={editorConfig.sceneCameraPosition}
          sideCameraPosition={editorConfig.sideCameraPosition}
          lightPosition={editorConfig.lightPosition}
          showSideCamera={editorConfig.showSideCamera}
          onSizeChange={(size) =>
            dispatch({ type: ConfigActions.SetSize, payload: size })
          }
          onPositionChange={(position) =>
            dispatch({ type: ConfigActions.SetPosition, payload: position })
          }
          onRotationChange={(rotation) =>
            dispatch({ type: ConfigActions.SetRotation, payload: rotation })
          }
          onSceneCameraPositionChange={(cameraPosition) =>
            dispatch({
              type: ConfigActions.SetSceneCameraPosition,
              payload: cameraPosition,
            })
          }
          onSideCameraPositionChange={(sideCameraPosition) =>
            dispatch({
              type: ConfigActions.SetSideCameraPosition,
              payload: sideCameraPosition,
            })
          }
          onLightPositionChange={(lightPosition) =>
            dispatch({
              type: ConfigActions.SetLightPosition,
              payload: lightPosition,
            })
          }
          onShowSideCameraChange={(showSideCamera) =>
            dispatch({
              type: ConfigActions.SetShowSideCamera,
              payload: showSideCamera,
            })
          }
        />
      </div>

      <div className="editor-content">
        <Scene
          size={editorConfig.size}
          rotation={rotation}
          position={editorConfig.position}
          cameraPosition={sceneCameraPosition}
          lightPosition={editorConfig.lightPosition}
        />

        {editorConfig.showSideCamera ? (
          <div className="side-camera">
            <Scene
              size={editorConfig.size}
              rotation={rotation}
              position={editorConfig.position}
              cameraPosition={sideCameraPosition}
              lightPosition={editorConfig.lightPosition}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Editor;
