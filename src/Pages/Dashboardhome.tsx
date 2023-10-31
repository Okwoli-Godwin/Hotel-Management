import styled from "styled-components"
import { TbBrandBooking } from "react-icons/tb"
import { FaBed } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"
import { FaSackDollar } from "react-icons/fa6"
import Dashboardhometable from "./Dashboardhometable"

const Dashboardhome = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <h1>Hi, Welcome back!</h1>
                <p>Admin Dashboard</p>
            </Top>
            
            <Cardhold>
                <Card1>
                      <Box><TbBrandBooking /></Box>
                      <Holder>
                        <Text>Total Booking</Text>
                        <Number>1,245</Number>
                      </Holder>
                </Card1>
                
                <Card1>
                      <Box2><FaBed /></Box2>
                      <Holder>
                        <Text>Rooms Available</Text>
                        <Number>287</Number>
                      </Holder>
                </Card1>
                
                <Card1>
                      <Box3><IoIosPeople /></Box3>
                      <Holder>
                        <Text>New Customers</Text>
                        <Number>1,532</Number>
                      </Holder>
                </Card1>
                
                <Card1>
                      <Box4><FaSackDollar /></Box4>
                      <Holder>
                        <Text>Total Revenue</Text>
                        <Number>$22,567</Number>
                      </Holder>
                </Card1>
            </Cardhold>
            
            <Tableholder>
                <Dashboardhometable />
            </Tableholder>
        </Wrapper>
    </Container>
  )
}

export default Dashboardhome
const Tableholder = styled.div`
    width: 100%;
    margin-top: 60px;
`
const Number = styled.div`
    font-size:30px;
    font-weight: 500;
    color: #060606;
`
const Holder = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-top: 50px;
`
const Text = styled.h1`
    font-size: 20px;
    font-weight: 500;
    color: #060606;
`
const Box4 = styled.div`
    width: 65px;
    height: 65px;
    font-size: 27px;
    background-color: #00bcd4;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`
const Box3 = styled.div`
    width: 65px;
    height: 65px;
    font-size: 30px;
    background-color: #4caf50;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`
const Box2 = styled.div`
    width: 65px;
    height: 65px;
    font-size: 30px;
    background-color: #ff9800;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`
const Box = styled.div`
    width: 65px;
    height: 65px;
    font-size: 30px;
    background-color: #9c27b0;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`
const Card1 = styled.div`
    width: 245px;
    border-radius: 7px;
    padding: 20px;
    background-color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;
    margin-right: 19px;
`
const Cardhold = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
`
const Top = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    h1{
        font-size: 24px;
        font-weight: 500;
        color: #6777ef;
    }
    p{
        color: #555555;
        font-weight: 500;
        font-size: 17px;
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