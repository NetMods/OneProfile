const BackDrop = ({ load }: { load: boolean }) => {
  return (
    <div
      className={`${
        load ? 'bg-content/30 fixed inset-0 ' : 'opacity-0 z-[-50] size-0'
      } backdrop-blur-sm `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="opacity-10"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
      >
        <defs>
          <filter
            id="nnnoise-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="linearRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.061"
              numOctaves="4"
              seed="15"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feSpecularLighting
              surfaceScale="18"
              specularConstant="0.7"
              specularExponent="20"
              lightingColor="#ffffff"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              result="specularLighting"
            >
              <feDistantLight azimuth="3" elevation="85"></feDistantLight>
            </feSpecularLighting>
            <feColorMatrix
              type="saturate"
              values="0"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="specularLighting"
              result="colormatrix"
            ></feColorMatrix>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="#000000ca"></rect>
        <rect width="100%" height="100%" fill="#ffffff" filter="url(#nnnoise-filter)"></rect>
      </svg>
    </div>
  )
}
export default BackDrop;
