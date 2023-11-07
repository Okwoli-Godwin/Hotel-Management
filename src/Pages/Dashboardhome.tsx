import styled from "styled-components"
import Dashboardhometable from "./Dashboardhometable"
import { TbReportAnalytics } from "react-icons/tb"
import { BsArrowDownShort } from "react-icons/bs"
import img from "../assets/chart.png"
import Chartholder from "./Chartholder/Chartholder"
import Customerhome from "./Chartholder/Customerhome"

const Dashboardhome = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <Hold>
                    <h1>Dashboard Overview</h1>
                    <p>Welcome to Dashlite Dashboard</p>
                </Hold>
                <Button>
                    <Icon><TbReportAnalytics /></Icon>
                    <h3>Reports</h3>
                </Button>
            </Top>
            
            <Cardhold>
                <Card1>
                    <h3>Total Booking</h3>
                    <h4>11,230 <span><Ico><BsArrowDownShort /></Ico>1.93%</span></h4>
                    
                    <Monthhold>
                        <Month>
                            <p>This Month</p>
                            <h5>1913</h5>
                        </Month>
                        <Month>
                            <p>This Week</p>
                            <h5>1125</h5>
                        </Month>
                        <img src={img} />
                    </Monthhold>
                </Card1>
                
                <Card1>
                    <h3>Rooms Available</h3>
                    <h4>312</h4>
                    
                    <Monthhold>
                        <Month>
                            <p>Booked (M)</p>
                            <h5>913</h5>
                        </Month>
                        <Month>
                            <p>Booked (W)</p>
                            <h5>125</h5>
                        </Month>
                        <img src={img} />
                    </Monthhold>
                </Card1>
                
                <Card1>
                    <h3>Expenses</h3>
                    <h4>79,358.50 USD</h4>
                    
                    <Monthhold>
                        <Month>
                            <p>This Month</p>
                            <h5>3,540.59 USD</h5>
                        </Month>
                        <Month>
                            <p>This Week</p>
                            <h5>1,259.28 USD</h5>
                        </Month>
                    </Monthhold>
                </Card1>
            </Cardhold>
                  <Chartholder />
            <Tableholder>
                <Dashboardhometable />
                {/* <Chartholder /> */}
            </Tableholder>
            
              <Customerhome />
        </Wrapper>
    </Container>
  )
}

export default Dashboardhome
const Month = styled.div`
    display: flex;
    flex-direction: column;
    p{
        font-size: 11px;
        color: #8094ae;
        text-transform: uppercase;
        letter-spacing: .1em;
    }
    h5{
        font-size: 17px;
        line-height: 1.1;
        color: #364a63;
        margin-top: 7px;
    }
`
const Monthhold = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    width: 100%;
    justify-content: space-between;
`
const Ico = styled.div`
    margin-top: 4px;
    font-size: 15px;
`
const Icon = styled.div`
    color: #fff;
    font-size: 20px;
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
const Tableholder = styled.div`
    width: 100%;
    margin-top: 60px;
    flex-direction: column;
`
const Card1 = styled.div`
    width: 319px;
    border-radius: 3px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #dbdfea;
    display: flex;
    flex-direction: column;
    margin-right: 19px;
    h3{
        color: #364a63;
        font-size: 15px;
        font-weight: 700;
    }
    h4{
        color: #364a63;
        font-size: 25px;
        font-weight: 400;
        margin-top: 5px;
        display: flex;
        align-items: center;
        span{
            color: #e85347;
            margin-left: 10px;
            display: flex;
            font-size: 14px;
            margin-top: 4px;
        }
    }
`
const Cardhold = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
`
const Top = styled.div`
    display: flex;
    margin-top: 30px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`
const Wrapper = styled.div`
    width: 100%;
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