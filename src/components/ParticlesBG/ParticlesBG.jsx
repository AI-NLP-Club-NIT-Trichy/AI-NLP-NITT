import particles_config from './config'

import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
const ParticlesBG = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = (container) => {
    console.log(container)
  }

  const options = useMemo(() => particles_config, [])

  if (init) {
    return (
      <Particles
        className="absolute top-0 bottom-0 right-0 left-0"
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    )
  }

  return <div className="bg-black absolute top-0 bottom-0 right-0 left-0"></div>
}

export default ParticlesBG
