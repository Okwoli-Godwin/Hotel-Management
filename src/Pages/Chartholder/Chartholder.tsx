import styled from "styled-components"
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs"

const Chartholder = () => {
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
    height: 20px;
    flex-wrap: wrap;
    margin-top: 40px;
    justify-content: space-between;
`