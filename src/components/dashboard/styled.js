import { Card, Grid, styled } from "@mui/material";

export const StyledCard= styled(Card)`
     width: 50%;
     height:fit-content
     border: 1px solid #efefef;
     background-color: #2d2d2d;
     border-radius: 3px;
     margin-right:15px;
     &.netcard{
     width:98%;
     margin-right:25px
     }
     &.goals{
     width:98%;
     margin-top:10px;
     margin-bottom:10px;
     }
     &.review{
     width:98%;
     max-height: 410px;
     overflow-y: scroll;
     scrollbar-color: #B2BEB5;
     scrollbar-width: thin;
     margin-top:10px;
     margin-bottom:10px;
     }
     @media screen and (max-width: 600px){
     &.netcard{
            width:98.5%;
            margin-top:15px;
            margin-right:25px;
     }
     &.goals{
     width:98.5%;}
     &.review{
     width:98.5%;
     }
     }
`
export const Container=styled(Grid)`
display: flex;
`