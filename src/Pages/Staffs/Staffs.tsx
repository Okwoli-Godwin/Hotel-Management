import styled from "styled-components"
import Stafftable from "./Stafftable"


const Staffs = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <Hold>
                    <h1>All Staffs</h1>
                </Hold>
            </Top>
            
            <Tableholder>
                <Stafftable />
            </Tableholder>
        </Wrapper>
    </Container>
  )
}

export default Staffs
const Tableholder = styled.div`
    width: 100%;
    margin-top: 60px;
    flex-direction: column;
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