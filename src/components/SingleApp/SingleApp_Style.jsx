import styled from 'styled-components';


export const SectionSingle = styled.section`
    width: 100%;
    height: 80vh;
`;
export const AppSingle = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
`;
export const AppIcon = styled.div`
    width: 30%;
    height: 5%;
    display: flex;
    margin-top: 8%;
    @media (min-width: 375px){
        margin-left:5%;
    }
    @media (min-width: 425px){
        margin-left:5%;
    }
    @media (min-width: 768px){
        margin-top:3%;
    }
    @media (min-width:1024px){
        margin-left:10%
    }
    @media (min-width:1440px){
       margin-top:1%;
    }
`;
export const Icon = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 18px;
    @media (min-width: 375px){
        width:80px;
        height:80px;
    }
    @media (min-width: 425px){
        width:90px;
        height:90px;
    }
    @media (min-width: 768px){
        width:150px;
        height:150px;
    }
    @media (min-width:1440px){
        width:200px;
        height:200px;
    }
    
`;
export const AppInfo = styled.div`
    width: 70%;
    height: 10%; 
`;
export const Category = styled.div`
    height:20%;
`;
export const AppPlatforms = styled.div`
    height: 150%;
    margin-top: 5%;
    display: flex;
    gap: 7px;>p{
        background-color: yellow;
        height: 100%;
        width: 25%;
        display: flex;
        justify-content: center;
    }
    @media (min-width: 768px){
        width:50%;
       
    }
`;
export const AppRating = styled.div`
    position: absolute;
    top: 20%;
    right: 58%;
    height: 10%;
    display: flex;
    gap: 10px;
    @media (min-width: 425px){
        position:relative;
        margin-top:5%;
        margin-left:57%
    }
    @media (min-width: 768px){
        position:relative;
        margin-top:2%;
        margin-left:57%
    }
`;

export const DescriptionDiv = styled.div`
    width:100%;
    max-height:150px;
    overflow:scroll;
    margin-top:5%;
    @media (min-width:1024px){
        width:100%;
        height:100%;
        overflow:visible;
    }
`;

export const ImageDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    margin-top:10%;
    @media (min-width:1024px){
        margin-top:15%;
    }
    
`;
export const DisplayImage =styled.img`
    width: 100px;
    height: 200px;
    border-radius: 15px;
    @media (min-width: 768px){
        width:200px;
        height:400px;
        border-radius:15px;
    }
`;