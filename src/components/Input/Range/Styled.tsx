import Styled from 'styled-components';
import { tokens } from '@app/styles/theme';

const RangeNumber = Styled.div`
  border: ${tokens.border.light};
  border-width: 2px;
	position: relative;
	flex-grow: 0;
	margin-left: 10px;
	border-radius: ${tokens.radius.micro};

	& input {
		border-bottom: none !important;
		border: none !important;
		background: transparent;
		color: ${tokens.color.medium};
		padding: 5px 3px;
    padding-right: 0;
		font-weight: bold;
		width: 100%;
		box-sizing: border-box;

		&:focus,
		&:hover,
		&:active {
			border: none !important;
			outline: none !important;
		}
	}
`;

const RangeSlider = Styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;

	> input {
		-webkit-appearance: none;
		width: 100%;
		height: 1px;
		background: ${tokens.color.light};
		outline: none;
		padding: 0;
		margin: 0 auto;
		position: relative;
		transition: all .3s ease-in-out;

		&::after {
			position: absolute;
			content: '';
			left: 0;
			right: 0;
			top: -1px;
			bottom: 0;
			height: 3px;
			width: ${({ theme }) => `${theme.width || 0}%`};
			background: ${tokens.color.primary};
			z-index: 0;
		}

		&::-webkit-progress-bar {
			background: ${tokens.color.primary};
		}
		&::-webkit-progress-value {
			background: ${tokens.color.primary};
		}

		&::-webkit-slider-progress {
			background: ${tokens.color.primary};
		}

		&::-webkit-slider-thumb {
			appearance: none;
			width: 18px;
			height: 18px;
			border: ${tokens.border.default};
			border-radius: ${tokens.radius.round};
			background: ${tokens.color.white};
			border-color: ${tokens.color.grey1};
			box-sizing: border-box;
			opacity: 1;
			cursor: pointer;
			position: relative;
			transition: all .15s ease-in-out;
			z-index: 1;

			&:hover {
				width: 22px;
				height: 22px;
				transition: all .15s ease-in-out;
			}
		}

		&::-moz-range-progress {
			background: ${tokens.color.primary};
		}

		&::-moz-range-thumb {
			width: 18px;
			height: 18px;
			border: 0;
			border: ${tokens.border.default};
			border-radius: ${tokens.radius.round};
			background: ${tokens.color.white};
			border-color: ${tokens.color.grey1};
			box-sizing: border-box;
			transition: all .15s ease-in-out;
			cursor: pointer;
			z-index: 1;

			&:hover {
				width: 22px;
				height: 22px;
				transition: all .15s ease-in-out;
			}
		}
	}
`;

const RangeContainer = Styled.div`
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	> :first-child{
		flex-grow: 1;
		max-width: 80%;
	}
	> :last-child{
		flex-grow: 0;
		max-width: 20%;
	}
`;

export { RangeContainer, RangeNumber, RangeSlider };
