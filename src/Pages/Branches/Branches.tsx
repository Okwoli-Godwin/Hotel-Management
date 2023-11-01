import styled from 'styled-components'
import img from "../../assets/hotel.jpeg"
import { BsThreeDotsVertical } from "react-icons/bs"
import { useState } from "react"


const Branches = () => {
    const [show, setShow] = useState(false)
    const Toggle = () => {
        setShow(!show)
    }
  return (
    <Container>
        <Wrapper>
            <Top>
                <h1>Branches Overview</h1>
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
                        <button><BsThreeDotsVertical /></button>
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
                        <button><BsThreeDotsVertical /></button>
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
                        <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        <button onClick={Toggle}>
                            <BsThreeDotsVertical />
                            {show ? (
                                <Drop>
                                
                                </Drop>
                            ): null}
                        </button>
                    </Buttonhold>
                </Card>
            </Branchhold>
        </Wrapper>
    </Container>
  )
}

export default Branches
const Drop = styled.div`
    position: absolute;
    width: 170px;
    height: 100px;
    left: 0;
    right: 0;
    margin-left: -150px;
    margin-top: 10px;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #dbdfea;
`
const Buttonhold = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 12px;
    padding-left: 12px;
    button{
        margin-top: 20px;
        position: relative;
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
    width: 318px;
    background-color: #fff;
    border-radius: 7px;;
    flex-direction: column;
    /* overflow: hidden; */
    margin-right: 20px;
    padding-bottom: 25px;
    border: 1px solid #dbdfea;
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