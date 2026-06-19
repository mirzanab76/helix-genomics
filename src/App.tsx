import { Suspense } from "react"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { ScrollControls, Scroll, Environment } from "@react-three/drei"
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing"
import { Lights } from "./components/Lights"
import { HelixModel } from "./components/HelixModel"
import { ScrollProgressDriver } from "./components/ScrollProgressDriver"
import { Sections } from "./components/Sections"
import { Navbar } from "./components/Navbar"

const cameraSettings = {
  position: [0, 0, 8.5] as [number, number, number],
  fov: 38,
}

const glSettings = {
  antialias: true,
  alpha: false,
}

const PAGES = 9

export default function App() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#060a12] text-white">
      <Navbar />
      <div className="scroll-progress-track">
        <div className="scroll-progress-bar" />
      </div>

      <Canvas
        dpr={[1, 2]}
        camera={cameraSettings}
        gl={glSettings}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.toneMappingExposure = 1.05
        }}
      >
        <color attach="background" args={["#060a12"]} />
        <fog attach="fog" args={["#060a12", 10, 30]} />

        <Lights />

        <Suspense fallback={null}>
          <Environment preset="city" />
          <ScrollControls pages={PAGES} damping={0.6}>
            <ScrollProgressDriver />
            <HelixModel />
            <Scroll html>
              <Sections />
            </Scroll>
          </ScrollControls>
        </Suspense>

        <EffectComposer>
          <Bloom intensity={0.7} luminanceThreshold={0.3} luminanceSmoothing={0.9} mipmapBlur />
          <Vignette offset={0.25} darkness={0.75} />
        </EffectComposer>
      </Canvas>
    </main>
  )
}
