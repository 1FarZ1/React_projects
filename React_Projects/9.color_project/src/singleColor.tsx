import React from 'react'
import { toast } from 'react-toastify';

export default function singleColor(props:any) {
    
    const saveToClipboard = async ()=>{
            if (navigator.clipboard) {
              try {
                await navigator.clipboard.writeText(`#${props.color.hex}`);
                toast.success('Color copied to clipboard');
              } catch (error) {
                toast.error('Failed to copy color to clipboard');
              }
            } else {
              toast.error('Clipboard access not available');
            }

    }
  return (
<article
      className={props.index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${props.color.hex}` }}
      onClick={saveToClipboard}
    >
      <p className='percent-value'>{props.color.weight}"%"</p>
      <p className='color-value'>{"#" + props.color.hex}</p>
    </article>  )
}
