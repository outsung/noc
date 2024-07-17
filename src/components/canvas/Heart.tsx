/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

type GLTFResult = GLTF & {
  nodes: {
    heart_teamRed: THREE.Mesh;
  };
  materials: {
    ["Red.015"]: THREE.MeshStandardMaterial;
  };
};

export function Heart(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/heart/model.gltf"
  ) as any as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.heart_teamRed.geometry}
        material={materials["Red.015"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

export const InstancedHeart = forwardRef<
  THREE.InstancedMesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    THREE.Material | THREE.Material[],
    THREE.InstancedMeshEventMap
  >,
  JSX.IntrinsicElements["instancedMesh"]
>((props, ref) => {
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/heart/model.gltf"
  ) as any as GLTFResult;

  nodes.heart_teamRed.geometry.rotateX(Math.PI / 2);

  return (
    <instancedMesh
      ref={ref}
      {...props}
      geometry={nodes.heart_teamRed.geometry}
      material={materials["Red.015"]}
      rotation={[0.1, 0, 0]}
    />
  );
});

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/heart/model.gltf"
);
