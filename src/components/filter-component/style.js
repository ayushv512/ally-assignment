import styled from 'styled-components';
import { deviceWidths, themeColors } from '../../config/config';

export const FilterComponentWrapper = styled.div`
    .filter-title {
        font-size: 18px;
        font-weight: 500;
    }
    .filter-dropdown {
        background-color: ${themeColors.button};
        border-color: ${themeColors.button};
        color: ${themeColors.white};
        font-size: 16px;
        font-weight: 600;
        padding: 5px;
    }
    .filter-dropdown:focus {
        outline: none;
    }
    @media (max-width:${deviceWidths.phoneWidth}) {
        margin-top: 15px;
        .filter-title {
            font-size: 15px;
        }
    }
`;
