import styled from 'styled-components'
import img from "../../assets/hotel.jpeg"

const Branches = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <h1>Branches</h1>
                <button>Add Branch</button>
            </Top>
            
            <Branchhold>
                <Card>
                    <img src={img} />
                    <Name>
                        <h2>Name: <span>Abuja branch</span></h2>
                    </Name>
                    <Location>
                        <h2>Location: <span>9 Malcolm Fraser Street, Asokoro, Abuja</span></h2>
                    </Location>
                    <Buttonhold>
                        <button>View Dashboard</button>
                    </Buttonhold>
                </Card>
                
                  <Card>
                    <img src={img} />
                    <Name>
                        <h2>Name: <span>Abuja branch</span></h2>
                    </Name>
                    <Location>
                        <h2>Location: <span>9 Malcolm Fraser Street, Asokoro, Abuja</span></h2>
                    </Location>
                    <Buttonhold>
                        <button>View Dashboard</button>
                    </Buttonhold>
                </Card>
                
                  <Card>
                    <img src={img} />
                    <Name>
                        <h2>Name: <span>Abuja branch</span></h2>
                    </Name>
                    <Location>
                        <h2>Location: <span>9 Malcolm Fraser Street, Asokoro, Abuja</span></h2>
                    </Location>
                    <Buttonhold>
                        <button>View Dashboard</button>
                    </Buttonhold>
                </Card>
            </Branchhold>
        </Wrapper>
    </Container>
  )
}

export default Branches
const Buttonhold = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 12px;
    button{
        width: 150px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        color: #fff;
        background-color: #1B212E;
        margin-top: 30px;
    }
`
const Location = styled.div`
    display: flex;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 15px;
    h2{
        span{
            font-weight: 500;
            margin-left: 10px;
        }
    }
`
const Name = styled.div`
    display: flex;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 15px;
    h2{
        span{
            font-weight: 500;
            margin-left: 10px;
        }
    }
`
const Card = styled.div`
    width: 325px;
    background-color: #fff;
    border-radius: 7px;;
    flex-direction: column;
    overflow: hidden;
    margin-right: 25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding-bottom: 25px;
    img{
        height: 280px;
        width: 100%;
        object-fit: cover;
    }
`
const Branchhold = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 50px;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    width: 100%;
    button{
        width: 130px;
        height: 40px;
        border-radius: 5px;
        color: #fff;
        background-color: #6777ef;
    }
    h1{
        font-size: 24px;
        font-weight: 500;
        color: #6777ef;
    }
`
const Wrapper = styled.div`
    width: calc(100% - 18%);
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