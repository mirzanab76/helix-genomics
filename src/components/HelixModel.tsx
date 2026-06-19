import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll, Float, Sparkles } from "@react-three/drei"
import * as THREE from "three"

const lerp = THREE.MathUtils.lerp

const COUNT = 20
const RADIUS = 1.05
const SPACING = 0.26
const TURNS = 2.0
const RUNG_LEN = RADIUS * 2

type Node = { a: [number, number, number]; b: [number, number, number]; y: number; angle: number }

export function HelixModel() {
  const group = useRef<THREE.Group>(null!)
  const scroll = useScroll()

  const steps = useMemo<Node[]>(() => {
    const arr: Node[] = []
    const centerY = ((COUNT - 1) * SPACING) / 2
    for (let i = 0; i < COUNT; i++) {
      const t = i / (COUNT - 1)
      const angle = t * Math.PI * 2 * TURNS
      const y = i * SPACING - centerY
      const ax = Math.cos(angle) * RADIUS
      const az = Math.sin(angle) * RADIUS
      arr.push({
        a: [ax, y, az],
        b: [-ax, y, -az],
        y,
        angle,
      })
    }
    return arr
  }, [])

  useFrame((state, delta) => {
    if (!group.current) return

    const o = scroll.offset
    const damp = 1 - Math.pow(0.001, delta)

    group.current.rotation.y += delta * 0.18

    const targetRotX = state.pointer.y * 0.12 + Math.sin(o * Math.PI) * 0.08
    group.current.rotation.x = lerp(group.current.rotation.x, targetRotX, damp * 0.4)

    const targetX = Math.sin(o * Math.PI * 1.5) * 1.0
    group.current.position.x = lerp(group.current.position.x, targetX, damp * 0.3)

    const targetScale = lerp(0.95, 1.1, Math.sin(o * Math.PI))
    const s = lerp(group.current.scale.x, targetScale, damp * 0.3)
    group.current.scale.set(s, s, s)
  })

  return (
    <group ref={group}>
      <Sparkles count={28} scale={8} size={1.5} speed={0.05} noise={0.2} opacity={0.5} color="#7ef9d0" />

      <Float speed={1} rotationIntensity={0.15} floatIntensity={0.5}>
        {steps.map((n, i) => (
          <group key={i}>
            <mesh position={n.a}>
              <sphereGeometry args={[0.13, 24, 24]} />
              <meshStandardMaterial color="#39e0a8" emissive="#0f8f6a" emissiveIntensity={1.3} roughness={0.25} metalness={0.3} />
            </mesh>
            <mesh position={n.b}>
              <sphereGeometry args={[0.13, 24, 24]} />
              <meshStandardMaterial color="#5bc8ff" emissive="#1d6fb0" emissiveIntensity={1.3} roughness={0.25} metalness={0.3} />
            </mesh>
            <mesh position={[0, n.y, 0]} rotation={[0, -n.angle, Math.PI / 2]}>
              <cylinderGeometry args={[0.022, 0.022, RUNG_LEN, 12]} />
              <meshStandardMaterial color="#cfeee2" emissive="#3a6f63" emissiveIntensity={0.5} roughness={0.4} transparent opacity={0.7} />
            </mesh>
          </group>
        ))}
      </Float>
    </group>
  )
}
