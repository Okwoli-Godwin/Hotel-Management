import styled from "styled-components"
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs"
import DashboardChart from "../DashboardChart"

const Chartholder = () => {
    const data = [
  { month: 'Day 1', value: 30 },
  { month: 'Day 2', value: 40 },
  { month: 'Day 3', value: 20 },
  { month: 'Day 4', value: 60 },
  { month: 'Day 5', value: 45 },
  { month: 'Day 6', value: 70 },
  { month: 'Day 7', value: 55 },
  { month: 'Day 8', value: 80 },
  { month: 'Day 9', value: 65 },
  { month: 'Day 10', value: 90 },
  { month: 'Day 11', value: 75 },
  { month: 'Day 12', value: 100 },
  { month: 'Day 13', value: 63 },
  { month: 'Day 14', value: 80 },
  { month: 'Day 15', value: 45 },
  { month: 'Day 16', value: 30 },
  { month: 'Day 17', value: 85 },
  { month: 'Day 18', value: 70 },
  { month: 'Day 19', value: 65 },
  { month: 'Day 20', value: 15 },
  { month: 'Day 21', value: 30 },
  { month: 'Day 22', value: 50 },
  { month: 'Day 23', value: 75 },
  { month: 'Day 24', value: 40 },
  { month: 'Day 25', value: 69 },
  { month: 'Day 26', value: 84 },
  { month: 'Day 27', value: 70 },
  { month: 'Day 28', value: 55 },
  { month: 'Day 29', value: 40 },
  { month: 'Day 30', value: 90 },
  { month: 'Day 31', value: 50 },
];
  return (
    <Container>
        <Salesholder>
            <div className="flex flex-col">
                <h6>Sales Revenue</h6>
                <p>In last 30 days revenue from rent.</p>
            </div>
            
            <Rangeholder>
                <Monthly>
                    <p>Monthly</p>
                    <h4>9.28K</h4>
                    <div className="flex items-center text-[#1ee0ac]">
                        <Icon><BsArrowUpShort /></Icon>
                        <P>4.63%</P>
                    </div>
                </Monthly>
                
                <Monthly>
                    <p>Weekly</p>
                    <h4>2.69K</h4>
                    <div className="flex items-center text-[#e85347]">
                        <Icon><BsArrowDownShort /></Icon>
                        <P>1.92%</P>
                    </div>
                </Monthly>
                
                <Monthly>
                    <p>Daily (Avg)</p>
                    <h4>0.94K</h4>
                    <div className="flex items-center text-[#1ee0ac]">
                        <Icon><BsArrowUpShort /></Icon>
                        <P>3.45%</P>
                    </div>
                </Monthly>
            </Rangeholder>
            <Hold>
                <DashboardChart data={data}/>
            </Hold>
        </Salesholder>
        
        <Roomholder>
            <div className="flex flex-col">
                <h6>Room Booking Chart</h6>
            </div>
        </Roomholder>
    </Container>
  )
}

export default Chartholder
const Hold = styled.div`
    width: 100%;
    margin-top: 30px;
`
const P = styled.p`
    color: #1ee0ac;
`
const Icon = styled.div`
    font-size: 19px;
`
const Monthly = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 80px;
    h4{
        color: #364a63;
        font-size: 1.5rem;
        line-height: 1.2;
        margin-bottom: 0.25rem;
    }
    p{
        font-size: 12px;
        font-weight: 600;
        color: #8094ae;
        margin-bottom: 0.375rem;
    }
`
const Rangeholder = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 17px;
`
const Roomholder = styled.div`
    width: 48%;
    padding: 20px;
    background-color: #fff;
    border-radius: 7px;
    border: 1px solid #dbdfea;
    display: flex;
    flex-direction: column;
    p{
        font-size: 13px;
        color: #8094ae;
        margin-top: 7px;
    }
    h6{
        font-weight: 600;
        line-height: 1.1;
        color: #364a63;
        font-size: 1.05rem;
    }
`
const Salesholder = styled.div`
    width: 48%;
    padding: 20px;
    background-color: #fff;
    border-radius: 7px;
    border: 1px solid #dbdfea;
    display: flex;
    flex-direction: column;
    p{
        font-size: 13px;
        color: #8094ae;
        margin-top: 7px;
    }
    h6{
        font-weight: 600;
        line-height: 1.1;
        color: #364a63;
        font-size: 1.05rem;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    justify-content: space-between;
`