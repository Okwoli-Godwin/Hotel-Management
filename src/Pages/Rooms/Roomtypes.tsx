import styled from "styled-components"
import Roomtypechart from "./Roomtypechart"

const Roomtypes = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <Hold>
                    <h1>Room Type</h1>
                    <p>Here is our Various room type.</p>
                </Hold>
                <Button>
                    <h3>Add Room Type</h3>
                </Button>
            </Top>
            
            <Roomtypechart />
        </Wrapper>
    </Container>
  )
}

export default Roomtypes
const Button = styled.button`
    width: 145px;
    height: 40px;
    display: flex;
    justify-content: center;
    background-color: #6576ff;
    align-items: center;
    border-radius: 7px;
    h3{
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        margin-left: 12px;
    }
`
const Hold = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        font-size: 25px;
        font-weight: 700;
        color: #526484;
    }
    p{
        color: #8094ae;
        font-weight: 500;
        font-size: 13px;
        margin-top: 7px;
    }
`
const Top = styled.div`
    display: flex;
    margin-top: 30px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`
const Wrapper = styled.div`
    width: calc(100% - 21%);
    display: flex;
    flex-direction: column;
    padding-right: 25px;
    padding-left: 25px;
    height: 100%;
`
const Container = styled.div`
    width: 100%;
    background-color: #F0F3FB;
    display: flex;
    justify-content: flex-end;
`