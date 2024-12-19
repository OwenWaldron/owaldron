import React, { FC } from "react";
import './Button.css';
import posthog from "posthog-js";

type ButtonTypes = 'filled' | 'hollow';

type ButtonProps = {
  label: string; // Text displayed on the button
  href?: string;
  newTab?: boolean;
  onClick?: () => void; // Optional click handler
  variant?: ButtonTypes; // Optional disabled state
};

const Button: FC<ButtonProps> = ({ label, onClick, variant = 'filled', href, newTab = false }) => {
    let modifier = 'text-white  bg-owaldron-blue';

    if (variant === 'hollow') {
        modifier = 'bg-none border-4 border-owaldron-blue text-owaldron-blue';
    }

    if (href) return(
        <a href={href}
            onClick={() => {posthog.capture(`Clicked button "${label}"`)}}
            target={newTab ? '_blank' : undefined}
            rel={newTab ? 'noreferrer' : undefined}
            className={'hoverin w-full flex items-center justify-center py-2 text-xl ' + modifier}
        >
            {label}
        </a>
    );

    return (
        <button onClick={onClick}
            className={'hoverin w-full py-2 rounded-md text-white bg-owaldron-blue' + modifier}
        >
            {label}
        </button>
    );
};

export default Button;