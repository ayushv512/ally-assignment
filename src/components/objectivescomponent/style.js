import styled from 'styled-components';
import { deviceWidths, themeColors } from '../../config/config';

export const ParentObjective = styled.div`
    .parent-container {
        display: flex;
        align-items: center;
        background-color: ${themeColors.backgroundParent};
        padding: 20px;
        .parent-dropdown {
            width: 25px;
            height: 25px;
            cursor: pointer;
            padding: 5px;
            border-radius: 50%;
            border: none;
            background-color: ${themeColors.border};
            color: ${themeColors.icon};
            i {
                font-size: 15px;
            }
        }
        .user-circle {
            font-size: 18px;
            margin: 0 10px;
            color: ${themeColors.icon};
        }
        .parent-title {
            font-size: 16px;
            color: ${themeColors.parent};
            font-weight: 700;
            padding-left: 10px;
        }
    }

    @media (max-width:${deviceWidths.phoneWidth}) {
        .parent-container {
            align-items: baseline;
            .parent-dropdown {
                width: 23px;
                height: 23px;
                i {
                    font-size: 12px;
                }
            }
            .user-circle {
                font-size: 16px;
                margin: 0 5px;
            }
            .parent-title {
                font-size: 14px;
            }
        }
    }
`;
export const ChildObjective = styled.div`
    display: flex;
    align-items: center;
    margin-left: 65px;
    padding: 25px 25px 25px 0;  
    font-size: 15px;
    border-left: 3px solid ${themeColors.border};
    color: ${themeColors.child};
    .horizantal-line {
        width: 30px;
        height: 3px;
        background-color: ${themeColors.border};
        margin-right: 30px;
    }
    i {
        margin-right: 25px;
        color: #172e4599;
    }
    @media (max-width:${deviceWidths.phoneWidth}) {
        font-size: 13px;
        margin-left: 55px;
        align-items: baseline;
        padding: 12px 12px 12px 0;
        .horizantal-line {
            width: 12px;
            margin-right: 10px;
        }
        i {
            margin-right: 5px;
        }
    }

`;
