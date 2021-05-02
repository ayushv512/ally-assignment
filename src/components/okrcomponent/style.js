import styled from 'styled-components';
import { deviceWidths, themeColors } from '../../config/config';

export const OKRComponentWrapper = styled.div`
    width: 50%;
    height: calc(100vh - 135px);
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 10px 20px 0 rgb(174 201 228 / 30%);
    overflow-y: scroll;
    color: ${themeColors.parent};
    .okrs-container {
        display: flex;
        justify-content: space-between;
        font-size: 30px;
        padding: 10px;
        font-weight: 700;
        border-bottom: 3px solid ${themeColors.border};
    }
    @media (max-width:${deviceWidths.tabletLandscapeWidth}) {
        width: 100%;
    }
    @media (max-width:${deviceWidths.phoneWidth}) {
        .okrs-container { 
            font-size: 20px;
            flex-direction: column;
            align-items: center;
        }
    }
`;
