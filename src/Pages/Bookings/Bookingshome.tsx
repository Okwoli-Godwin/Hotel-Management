import styled from "styled-components"
import Bookingchart from "./Bookingchart"

const Bookingshome = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <Hold>
                    <h1>Booking Lists</h1>
                    <p>You have total 2,595 booking's.</p>
                </Hold>
                <Button>
                    <h3>Add Booking</h3>
                </Button>
            </Top>
            
            <Holder>
                <Bookingchart />
            </Holder>
        </Wrapper>
    </Container>
  )
}

export default Bookingshome
const Holder = styled.div`
    width: 100%;
`

const Button = styled.button`
    width: 125px;
    height: 40px;
    display: flex;
    justify-content: center;
    background-color: #6576ff;
    align-items: center;
    border-radius: 7px;
    h3{
        color: #fff;
        font-size: 16px;
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
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F0F3FB;
    display: flex;
    justify-content: flex-end;
`