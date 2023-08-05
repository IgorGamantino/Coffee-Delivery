import React, { ButtonHTMLAttributes, HTMLProps } from 'react';

import { IconType } from 'react-icons';
import { text } from 'stream/consumers';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary',
  text?: string
  icon?: IconType
} 





export function Button({ color = 'primary', text, icon,...rest }: ButtonProps) {

  const buttonVariants = {
    background: {
      primary: 'bg-yellow',
      secondary: 'bg-base-button'
    },
    colorText: {
      primary: 'text-base-white',
      secondary: 'text-base-text'
    }
  }

  return (
    <button
      className={`${buttonVariants.background[color]} ${buttonVariants.colorText[color]} p-2 rounded-md
      flex items-center justify-between`}
      {...rest}
    >
    {icon && React.createElement(icon)}
      <span className={icon && text && 'ml-2'}>{text}</span>
     </button>
  )
}