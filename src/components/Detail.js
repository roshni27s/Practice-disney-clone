import styled from "styled-components";

const Detail = (props) => {
    return (
        <Container>
            <Background>
                <img 
                alt=""
                src=""
                />
            </Background>
            <ImageTitle>
                <img 
                alt=""
                src=""
                />
            </ImageTitle>
            <ContentMeta>
                <Controls>Controls</Controls>
            </ContentMeta>
        </Container>
    )
}

const Container = styled.div`
position: relative;
min-height: calc(100vh-250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw+5px);
`
const Background = styled.div`
left: 8px;
opacity: 0.8;
position: fixed;
right: 0px;
top: 0px;
z-index: -1;
img{
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px){
        width: initial;
    }
}
`
const ImageTitle = styled.div`
align-items: flex-end;
display: flex;
-webkit-box-pack: start;
justify-content: flex-start;
margin: 0px auto;
height: 30vw;
min-height: 170px;
padding-bottom: 24px;
width: 100%;
img{
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
}
`
const ContentMeta = styled.div`
max-width: 874px;
`
const Controls = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
`

export default Detail;