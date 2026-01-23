import { CiPower } from "react-icons/ci";
import { LuPowerOff } from "react-icons/lu";
import { TbMinus, TbPlus } from "react-icons/tb";
import styled from "styled-components";

export type ButtonTypes = "delete" | 'liquid-glass' | "primary-plain" | "primary" | "primary-white" | "secondary" | "secondary-white" | "cancel"
const Button = styled.button<{ size: "lg" | "md" | "sm", buttonType: ButtonTypes, radius?: string, borderColor?: string, bg?: string, textColor?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid ${props => props.borderColor ? props.borderColor : 'transparent'};
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: ${props => props.radius ? props.radius : '9999px'};
    cursor: pointer;
    font-family: "Noto Serif";
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    white-space: nowrap;
    ${props => props.bg
        ? `background: ${props.bg} !important;`
        : "background: transparent;"}

    ${props => props.textColor
        ? `color: ${props.textColor} !important;`
        : ""}

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    ${props => props.size === "lg" && `
        padding: 12px 27px;
        font-size: .9rem;
        line-height: 1.5;
        border-radius: ${props.radius ? props.radius : '9999px'};
    `}

    ${props => props.size === "md" && `
        padding: 9px 15px;
        font-size: .87rem;
        line-height: 1.5;
        border-radius: ${props.radius ? props.radius : '9999px'};
    `}

    ${props => props.size === "sm" && `
        padding: 3px 9px;
        font-size: 0.8rem;
        line-height: 1.5;
        border-radius: ${props.radius ? props.radius : '9999px'};
    `}

    ${props => props.buttonType === "delete" && `
        color: #fff;
        border: none;
        background: #B72121;

        &:hover {
            background: #9F1C1C;  // Darker red for hover
        }
        &:active {
            background: #871717;  // Even darker for active
        }
    `}

    ${props => props.buttonType === "primary" && `
        color: #fff;
        border: none;
        background: #ef6400;

        &:hover {
            background: #ef6400;  // Lighter blue for hover
        }
        &:active {
            background: #ef6400;  // Darker for active
        }
    `}

    // ${props => props.buttonType === "liquid-glass" && `
    //     background: rgba(255, 255, 255, 0.12) !important;
    //     backdrop-filter: blur(12px);
    //     -webkit-backdrop-filter: blur(12px);
    //     border: 1px solid rgba(255, 255, 255, 0.25) !important;
    //     color: #ffffff;
    //     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    //     &:hover {
    //         background: rgba(255, 255, 255, 0.2) !important;
    //         border: 1px solid rgba(255, 255, 255, 0.4) !important;
    //     }

    //     &:active {
    //         background: rgba(255, 255, 255, 0.1) !important;
    //     }
    // `}

    ${props => props.buttonType === "liquid-glass" && `
        background: rgba(255, 255, 255, 0.08) !important;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(7px);
        border: 1px solid rgba(255, 255, 255, 0.25) !important;
        color: #ffffff;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

        &:hover {
            background: rgba(255, 255, 255, 0.2) !important;
            border: 1px solid rgba(255, 255, 255, 0.4) !important;
        }

        &:active {
            background: rgba(255, 255, 255, 0.1) !important;
        }
    `}

    ${props => props.buttonType === "primary-plain" && `
        color: #fff;
        border-color: #ef6400;
        background: #ef6400;

        &:hover {
            background: #CC2424;  // Lighter red for hover
        }
        &:active {
            background: #8F1818;  // Darker for active
        }
    `}

    ${props => props.buttonType === "cancel" && `
        color: ${props.color || '#F24822'};
        background-color: #FAF4F2;
        border-color: transparent;

        &:hover {
            color: #F24822;
            background-color: #FFE6DD;  // Slightly darker peach for hover
        }
        &:active {
            background-color: #FFD9CC;  // Even darker for active
        }
    `}

    ${props => props.buttonType === "primary-white" && `
        color: ${props.theme.primary};
        background-color: white;
        border-color: white;

        &:hover {
            color: ${props.theme.primary};
            background-color: #F5F5F5;  // Light gray for hover
            border-color: white;
        }
        &:active {
            background-color: #E5E5E5;  // Darker gray for active
        }
    `}

    ${props => props.buttonType === "secondary" && `
        color: ${props.theme.primary};
        background: transparent;
        border-color: ${props.theme.primary};

        &:hover {
            color: #fff;
            background-color: ${props.theme.primary};
            border-color: ${props.theme.primary};
        }
        &:active {
            background-color: ${props.theme.primary};
            opacity: 0.85;  // Slight transparency for active state
        }
    `}

    ${props => props.buttonType === "secondary-white" && `
        color: white;
        background: transparent;
        border-color: white;

        &:hover {
            color: white;
            background-color: rgba(255, 255, 255, 0.1);  // Subtle white overlay
            border-color: white;
        }
        &:active {
            background-color: rgba(255, 255, 255, 0.2);  // Stronger overlay
        }
    `}
`

export default Button

export const AddFieldButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button
            {...props}
            className={`p-1 text-[#03D86C] bg-[#03D86C]/40 rounded-[7px] ${props.className || ''}`}
        >
            <TbPlus />
        </button>
    );
};

export const RemoveFieldButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return <button
        {...props}
        className={`p-1 text-[#F13E3F] bg-[#F13E3F]/40 rounded-[7px] ${props.className || ''}`}>
        <TbMinus />
    </button>
}

export const SwitchOnButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button
            {...props}
            className={`p-1 text-[#4FA64F] bg-[#F2FFF21A] rounded-full ${props.className || ''}`}
        >
            <CiPower className="text-xs" />
        </button>
    );
};

export const SwitchOffButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button
            {...props}
            className={`p-1 text-[#C82B2B] bg-[#F2FFF21A] rounded-full ${props.className || ''}`}
        >
            <LuPowerOff className="text-xs" />
        </button>
    );
};

export const OptionButton = styled.button`
    width: 100%;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px #00000008;
    border: 1px solid #CCCCCC4D;
`
export const ShadowWrap = styled.div`
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px #00000008;
    border: 1px solid #CCCCCC4D;
`

export const QuickLinkButton = styled.button`
  background: #FDFDFD;
  border: 1px solid #CCCCCC1A;
  border-radius: 12px;
  padding-inline: 20px;
  padding-block: 10px;

  @media (max-width: 768px) {
  padding-inline: 10px;
}
`

export const CenteredModalWrapper = styled.div`
//   min-width: 600px;
//   max-width: 600px;
    height: 100%;
`