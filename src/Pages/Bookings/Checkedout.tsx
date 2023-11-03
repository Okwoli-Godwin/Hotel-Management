import styled from "styled-components"
import Checkoutbookingtable from "./Checkoutbookingtable"

const Checkedout = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <h1>Checked Out Bookings</h1>
            </Top>
            
            <Tableholder>
                <Checkoutbookingtable />
            </Tableholder>
        </Wrapper>
    </Container>
  )
}

export default Checkedout
const Tableholder = styled.div`
    width: 100%;
    margin-top: 60px;
    flex-direction: column;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    width: 100%;
    h1{
        font-size: 25px;
        font-weight: 700;
        color: #526484;
    }
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