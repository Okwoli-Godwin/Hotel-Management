import styled from "styled-components"
import { FiMenu } from "react-icons/fi"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { useState } from "react"
import { BsPerson } from "react-icons/bs"
import {BiLogIn} from "react-icons/bi"

const DashboardHead = () => {
    const [show, setShow] = useState(false)

    const Toggle = () => {
        setShow(!show)
    }
  return (
    <Container>
        <Wrapper>
            <Icon><FiMenu /></Icon>
            
            <Holder onClick={Toggle}>
                <img src=""/>
                <Text>Godwin</Text>
                <Con><MdOutlineKeyboardArrowDown /></Con>
                {show ? (
                    <Card>
                        <First>
                            <Profileicon><BsPerson /></Profileicon>
                            <Profiletext>Profile</Profiletext>
                        </First>
                        
                        <Second>
                            <Profileicon><BiLogIn /></Profileicon>
                            <Profiletext>Log out</Profiletext>
                        </Second>
                    </Card>
                ) : null}
            </Holder>
        </Wrapper>
    </Container>
  )
}

export default DashboardHead
const Profiletext = styled.div`
    font-size: 17px;
    color: #555;
    font-weight: 400;
    margin-left: 14px;
`
const Profileicon = styled.div`
    color: #555;
    font-size: 25px;
`
const Second = styled.div`
    display: flex;
    cursor: pointer;
    margin-top: 14px;
`
const First = styled.div`
    display: flex;
    cursor: pointer;
`
const Card = styled.div`
    overflow: hidden;
    position: absolute;
    width: 180px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    top: 60px;
    right: 5px;
    flex-direction: column;
    padding: 15px;
    display: flex;
    animation-name: bounceIn;
    animation-duration: 0.75s;
    border-radius: 7px;

    @keyframes bounceIn {
        0%, 20%, 40%, 60%, 80%, 100% {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
    transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
    transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
    transform: scale3d(0.97, 0.97, 0.97);
    }
    100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
    }
}
`
const Con = styled.div`
    color: #fff;
    margin-left: 8px;
    font-size: 22px;
    margin-top: 3px;
`
const Text = styled.div`
    color: #fff;
    font-size: 16px;
    font-weight: 400;
`
const Holder = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    img{
        width: 35px;
        height: 35px;
        border-radius: 100px;
        background-color: #fff;
        margin-right: 12px;
    }
`
const Icon = styled.div`
    color: #fff;
    font-size: 22px;
    cursor: pointer;
`
const Wrapper = styled.div`
    width: calc(100% - 18%);
    display: flex;
    align-items: center;
    padding-left: 13px;
    padding-right: 13px;
    justify-content: space-between;
`

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #1B212E;
    display: flex;
    justify-content: flex-end;
`