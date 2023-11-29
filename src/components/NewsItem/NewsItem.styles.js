import styled from "styled-components";
import colors from "../../styles/colors";

// export const CardContainer = styled.div`
//   max-width: ${(props) => props.width}px;
//   max-height: ${(props) => props.height}px;
//   border-radius: ${(props) => props.borderRadius}px;
//   margin-left: ${(props) => props.marginLeft}px;
// `;

export const NewsItemBlock = styled.div`
    display: flex;
    .thumbnail {
        margin-right: 1rem;
        img{
            display:block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contents {
        h2 {
            margin: 0;
            a { color: black; }
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;

