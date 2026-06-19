export function Lights() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 8, 6]} intensity={1.2} color="#eafff7" />
      <pointLight position={[3, 2, 4]} intensity={1.4} color="#39e0a8" distance={18} />
      <pointLight position={[-4, -2, 3]} intensity={1.1} color="#5bc8ff" distance={18} />
      <spotLight position={[0, 7, 3]} angle={0.5} penumbra={1} intensity={0.8} color="#ffffff" />
    </>
  )
}
