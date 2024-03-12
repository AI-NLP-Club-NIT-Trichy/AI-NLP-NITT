import { useRef } from 'react'

import './GlyphButton.css'

const GLYPHS ='01101001 01001001 0010101 00100110 0010101 01001110 01001100 01010101'
  // 'ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ0123456789±!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ'

import PropTypes from 'prop-types'

const GlyphButton = ({ text, speed }) => {
  const glyphRef = useRef(null)

  return (
    <>
      <div
        ref={glyphRef}
        className="glyph-element font-mono"
        style={{ '--speed': speed }}
      >
        {text.split('').map((char, index) => {
          return (
            <span
              key={index}
              data-char={char}
              style={{
                '--index': index,
                '--char-1': `"${
                  GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                }"`,
                '--char-2': `"${
                  GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                }"`,
                '--char-3': `"${
                  GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
                }"`,
              }}
            >
              {char}
            </span>
          )
        })}
        <span className="glyph-sr-only">{text}</span>
      </div>
      <div className="glyph-element glyph-element-dummy ">{text}</div>
    </>
  )
}

GlyphButton.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
}

export default GlyphButton
