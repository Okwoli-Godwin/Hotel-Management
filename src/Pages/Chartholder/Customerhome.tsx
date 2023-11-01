import styled from "styled-components"
import {BiDotsHorizontalRounded} from "react-icons/bi"

const Customerhome = () => {
  return (
    <Container>
        <Customerholder>
           <Top>
             <h6>New Customer</h6>
             <p>View All</p>
           </Top>
           
            <Top2>
             <div className="flex items-center">
                <Circle>
                    AB
                </Circle>
                <div className="flex flex-col ml-[19px]">
                    <h4 className="text-[14px] font-[700] text-[#364a63]">Abu Bin Ishtiyak</h4>
                    <p className="text-[12px] text-[#8094ae]">info@softnio.com</p>
                </div>
             </div>
             <div className="text-[18px] cursor-pointer"><BiDotsHorizontalRounded /></div>
           </Top2>
           
           <Top2>
             <div className="flex items-center">
                <Circle>
                    AB
                </Circle>
                <div className="flex flex-col ml-[19px]">
                    <h4 className="text-[14px] font-[700] text-[#364a63]">Abu Bin Ishtiyak</h4>
                    <p className="text-[12px] text-[#8094ae]">info@softnio.com</p>
                </div>
             </div>
             <div className="text-[18px] cursor-pointer"><BiDotsHorizontalRounded /></div>
           </Top2>
           
           <Top2>
             <div className="flex items-center">
                <Circle>
                    AB
                </Circle>
                <div className="flex flex-col ml-[19px]">
                    <h4 className="text-[14px] font-[700] text-[#364a63]">Abu Bin Ishtiyak</h4>
                    <p className="text-[12px] text-[#8094ae]">info@softnio.com</p>
                </div>
             </div>
             <div className="text-[18px] cursor-pointer"><BiDotsHorizontalRounded /></div>
           </Top2>
           
           <Top2>
             <div className="flex items-center">
                <Circle>
                    AB
                </Circle>
                <div className="flex flex-col ml-[19px]">
                    <h4 className="text-[14px] font-[700] text-[#364a63]">Abu Bin Ishtiyak</h4>
                    <p className="text-[12px] text-[#8094ae]">info@softnio.com</p>
                </div>
             </div>
             <div className="text-[18px] cursor-pointer"><BiDotsHorizontalRounded /></div>
           </Top2>
           
           <Top2>
             <div className="flex items-center">
                <Circle>
                    AB
                </Circle>
                <div className="flex flex-col ml-[19px]">
                    <h4 className="text-[14px] font-[700] text-[#364a63]">Abu Bin Ishtiyak</h4>
                    <p className="text-[12px] text-[#8094ae]">info@softnio.com</p>
                </div>
             </div>
             <div className="text-[18px] cursor-pointer"><BiDotsHorizontalRounded /></div>
           </Top2>
        </Customerholder>
        
        <Activitieshold>
            <Top>
             <h6>Recent Activities</h6>
           </Top>
           
            <Top2>
             <div className="flex items-center">
                <Circle>
                    AB
                </Circle>
                <div className="flex flex-col ml-[19px]">
                    <h4 className="text-[14px] font-[700] text-[#364a63]">Abu Bin Ishtiyak</h4>
                    <p className="text-[12px] text-[#8094ae]">info@softnio.com</p>
                </div>
             </div>
             <div className="text-[18px] cursor-pointer"><BiDotsHorizontalRounded /></div>
           </Top2>
           
           <Top2>
             <div className="flex items-center">
                <Circle>
                    AB
                </Circle>
                <div className="flex flex-col ml-[19px]">
                    <h4 className="text-[14px] font-[700] text-[#364a63]">Abu Bin Ishtiyak</h4>
                    <p className="text-[12px] text-[#8094ae]">info@softnio.com</p>
                </div>
             </div>
             <div className="text-[18px] cursor-pointer"><BiDotsHorizontalRounded /></div>
           </Top2>
           
           <Top2>
             <div className="flex items-center">
                <Circle>
                    AB
                </Circle>
                <div className="flex flex-col ml-[19px]">
                    <h4 className="text-[14px] font-[700] text-[#364a63]">Abu Bin Ishtiyak</h4>
                    <p className="text-[12px] text-[#8094ae]">info@softnio.com</p>
                </div>
             </div>
             <div className="text-[18px] cursor-pointer"><BiDotsHorizontalRounded /></div>
           </Top2>
           
           <Top2>
             <div className="flex items-center">
                <Circle>
                    AB
                </Circle>
                <div className="flex flex-col ml-[19px]">
                    <h4 className="text-[14px] font-[700] text-[#364a63]">Abu Bin Ishtiyak</h4>
                    <p className="text-[12px] text-[#8094ae]">info@softnio.com</p>
                </div>
             </div>
             <div className="text-[18px] cursor-pointer"><BiDotsHorizontalRounded /></div>
           </Top2>
           
           <Top2>
             <div className="flex items-center">
                <Circle>
                    AB
                </Circle>
                <div className="flex flex-col ml-[19px]">
                    <h4 className="text-[14px] font-[700] text-[#364a63]">Abu Bin Ishtiyak</h4>
                    <p className="text-[12px] text-[#8094ae]">info@softnio.com</p>
                </div>
             </div>
             <div className="text-[18px] cursor-pointer"><BiDotsHorizontalRounded /></div>
           </Top2>
        </Activitieshold>
    </Container>
  )
}

export default Customerhome
const Circle = styled.div`
    width: 45px;
    height: 45px;
    display: flex;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    background-color: #c8cefa;
    color: #6576ff;
    font-weight: 500;
`
const Top2 = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid #dbdfea;
    padding-left: 15px;
    padding-right: 15px;
    justify-content: space-between;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #dbdfea;
    padding-left: 15px;
    padding-right: 15px;
    justify-content: space-between;
    p{
        font-size: .85rem;
        color: #7f8dff;
        font-weight: 500;
    }
    h6{
        font-weight: 600;
        line-height: 1.1;
        color: #364a63;
        font-size: 1.05rem;
    }
`
const Activitieshold = styled.div`
    width: 48%;
    background-color: #fff;
    border-radius: 7px;
    border: 1px solid #dbdfea;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`
const Customerholder = styled.div`
    width: 48%;
    background-color: #fff;
    border-radius: 7px;
    border: 1px solid #dbdfea;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    justify-content: space-between;
`