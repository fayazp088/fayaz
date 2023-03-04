import React, { Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {
  Loader,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Stars,
  Html,
  Text3D,
  Center,
  Float,
} from '@react-three/drei';
import { Grid } from '@mui/material';

import { useLottie } from 'lottie-react';

// import astranout from '../assets/astranout.png';
import astranoutLottie from '../assets/astronaut.json';

function Model({ url }) {
  const { nodes } = useGLTF(url);
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} scale={7}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.planet002.geometry}
          material={nodes.planet002.material}
        />
        <mesh
          geometry={nodes.planet003.geometry}
          material={nodes.planet003.material}
        />
      </group>
    </group>
  );
}

const Home = () => {
  const options = {
    animationData: astranoutLottie,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <>
      <div className="bg" />
      <span
        style={{
          position: 'fixed',
          zIndex: '100',
          top: '125px',
          bottom: '0px',
          width: '200px',
          left: '550px',
        }}
      >
        {View}
      </span>
      <Canvas dpr={[1.5, 2]} linear shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 50]} fov={75}>
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <spotLight
            castShadow
            intensity={2.25}
            angle={0.2}
            penumbra={1}
            position={[-25, 20, -15]}
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
        <ambientLight intensity={0.75} />
        <Model url="/scene.glb" />
        <Text3DScene />
        <OrbitControls
          // autoRotate
          autoRotateSpeed={0.1}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stars radius={500} depth={50} count={5000} factor={10} />
      </Canvas>
      <div className="layer" />
      <Loader />
    </>
  );
};

function Text3DScene() {
  return (
    <React.Suspense fallback={null}>
      <Center position={[0, 1, 4]}>
        <Float floatIntensity={2} speed={1.5}>
          <Text3D font={'/Inter_Bold.json'} bevelEnabled bevelSize={0.05}>
            Hi, I am Fayaz
            <meshNormalMaterial />
          </Text3D>
        </Float>
      </Center>
      <Center position={[0, -4, 7]}>
        <Float floatIntensity={0} speed={2}>
          <Text3D
            font={'/Inter_Bold.json'}
            bevelEnabled
            bevelSize={0.05}
            fontSize={1.5}
            color={'#EC2D2D'}
          >
            Software Engineer
            <meshNormalMaterial />
          </Text3D>
        </Float>
      </Center>
    </React.Suspense>
  );
}

export default Home;
