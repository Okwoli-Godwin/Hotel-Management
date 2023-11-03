import styled from "styled-components"
import img from "../../assets/logo-dark.png"
import { MdDashboard, MdKeyboardArrowDown } from "react-icons/md"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { BsCalendar3, BsHousesFill, BsPeopleFill } from "react-icons/bs"
import { RiHotelFill } from "react-icons/ri"
import {TbReportAnalytics, TbDiscountCheckFilled} from "react-icons/tb"

const Sidebar = () => {

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)
    const Toggle = () => {
        setShow1(!show1)
    }
    const Toggle2 = () => {
        setShow2(!show2)
    }
    const Toggle3 = () => {
        setShow3(!show3)
    }
    const Toggle4 = () => {
        setShow4(!show4)
    }
    const Toggle5 = () => {
        setShow5(!show5)
    }
    const Toggle6 = () => {
        setShow6(!show6)
    }
  return (
    <Container>
          <Top>
              <Menu><FiMenu /></Menu>
              <img src={img} alt="" />
          </Top>

        <NavLink to="/admin" style={({isActive}) => {
            return {
                height: isActive ? "50px" : "50px",
                alignItems: isActive ? "center" : "center",
                display: isActive ? "flex" : "flex",
                color: isActive ? "#7f8dff" : "#526484",
                width: isActive ? "90%" : "90%",
                marginTop: isActive ? "24px" : "24px",
                paddingLeft: isActive ? "10px" : "5px",
                borderRadius : isActive ? "7px" : "7px"
            }
        }}>
            <Dashboard>
              <Icon><MdDashboard /></Icon>
              <Textdash>Dashboard</Textdash>
            </Dashboard>
        </NavLink>
        
        <NavLink to="/admin/branches" style={({isActive}) => {
            return {
                height: isActive ? "50px" : "50px",
                alignItems: isActive ? "center" : "center",
                display: isActive ? "flex" : "flex",
                color: isActive ? "#7f8dff" : "#526484",
                width: isActive ? "90%" : "90%",
                marginTop: isActive ? "8px" : "8px",
                paddingLeft: isActive ? "11px" : "15px",
                borderRadius: isActive ? "7px" : "7px",
                justifyContent: isActive ? "space-between" : "space-between"
            }
        }}>
            <Branch onClick={Toggle}>
              <div className="flex">
                <Icon2><RiHotelFill /></Icon2>
                <Textdash>Branch</Textdash>
              </div>
              <Ico><MdKeyboardArrowDown /></Ico>
            </Branch>
        </NavLink>
        
        {show1 ? (
            <Branches>
                <NavLink to="/admin/addbranch">
                    <h3>Add Branches Details</h3>
                </NavLink>
            </Branches>
        ) : null}
        
        <NavLink to="/admin/bookings" style={({isActive}) => {
            return {
                height: isActive ? "50px" : "50px",
                alignItems: isActive ? "center" : "center",
                display: isActive ? "flex" : "flex",
                color: isActive ? "#7f8dff" : "#526484",
                width: isActive ? "90%" : "90%",
                marginTop: isActive ? "8px" : "8px",
                paddingLeft: isActive ? "15px" : "15px",
                borderRadius: isActive ? "7px" : "7px",
                justifyContent: isActive ? "space-between" : "space-between"
            }
        }}>
            <Branch onClick={Toggle2}>
              <div className="flex">
                <Icon3><BsCalendar3 /></Icon3>
                <Textdash>Bookings</Textdash>
              </div>
              <Ico2><MdKeyboardArrowDown /></Ico2>
            </Branch>
        </NavLink>
        
        {show2 ? (
            <Booking>
                <NavLink to="/admin/addbooking">
                      <h3>Add Booking</h3>
                </NavLink>
                <NavLink to="/admin/reserved-booking">
                    <h3>Reserved Bookings</h3>
                </NavLink>
                <NavLink to="/admin/checked-in-bookings">
                    <h3>Checked In Booking</h3>
                </NavLink>
            </Booking>
        ) : null}
        
        <NavLink to="/admin/rooms" style={({isActive}) => {
            return {
                height: isActive ? "50px" : "50px",
                alignItems: isActive ? "center" : "center",
                display: isActive ? "flex" : "flex",
                color: isActive ? "#7f8dff" : "#526484",
                width: isActive ? "90%" : "90%",
                marginTop: isActive ? "8px" : "8px",
                paddingLeft: isActive ? "15px" : "15px",
                borderRadius: isActive ? "7px" : "7px",
                justifyContent: isActive ? "space-between" : "space-between"
            }
        }}>
            <Branch onClick={Toggle3}>
              <div className="flex">
                <Icon3><BsHousesFill /></Icon3>
                <Textdash>Room</Textdash>
              </div>
              <Ico3><MdKeyboardArrowDown /></Ico3>
            </Branch>
        </NavLink>
        
        {show3 ? (
            <Booking>
                <NavLink to="/admin/roomtypes">
                      <h3>Room Types</h3>
                </NavLink>
                <NavLink to="/admin/addroomtype">
                    <h3>Add Room Types</h3>
                </NavLink>
                <NavLink to="/admin/addroom">
                    <h3>Add Room</h3>
                </NavLink>
            </Booking>
        ) : null}
        
        <NavLink to="" style={({isActive}) => {
            return {
                height: isActive ? "50px" : "50px",
                alignItems: isActive ? "center" : "center",
                display: isActive ? "flex" : "flex",
                color: isActive ? "#7f8dff" : "#526484",
                width: isActive ? "90%" : "90%",
                marginTop: isActive ? "8px" : "8px",
                paddingLeft: isActive ? "15px" : "15px",
                borderRadius: isActive ? "7px" : "7px",
                justifyContent: isActive ? "space-between" : "space-between"
            }
        }}>
            <Branch onClick={Toggle4}>
              <div className="flex">
                <Icon3><BsPeopleFill /></Icon3>
                <Textdash>Guests</Textdash>
              </div>
              <Ico4><MdKeyboardArrowDown /></Ico4>
            </Branch>
        </NavLink>
        
        {show4 ? (
            <Booking>
                <NavLink to="/admin/addbranch">
                      <h3>Add Guest</h3>
                </NavLink>
            </Booking>
        ) : null}
        
        <NavLink to="" style={({isActive}) => {
            return {
                height: isActive ? "50px" : "50px",
                alignItems: isActive ? "center" : "center",
                display: isActive ? "flex" : "flex",
                color: isActive ? "#7f8dff" : "#526484",
                width: isActive ? "90%" : "90%",
                marginTop: isActive ? "8px" : "8px",
                paddingLeft: isActive ? "10px" : "5px",
                borderRadius : isActive ? "7px" : "7px"
            }
        }}>
            <Dashboard>
              <Icon><TbReportAnalytics /></Icon>
              <Textdash>Booking Reports</Textdash>
            </Dashboard>
        </NavLink>
        
        <NavLink to="" style={({isActive}) => {
            return {
                height: isActive ? "50px" : "50px",
                alignItems: isActive ? "center" : "center",
                display: isActive ? "flex" : "flex",
                color: isActive ? "#7f8dff" : "#526484",
                width: isActive ? "90%" : "90%",
                marginTop: isActive ? "8px" : "8px",
                paddingLeft: isActive ? "11px" : "15px",
                borderRadius: isActive ? "7px" : "7px",
                justifyContent: isActive ? "space-between" : "space-between"
            }
        }}>
            <Branch onClick={Toggle5}>
              <div className="flex">
                <Icon3><BsPeopleFill /></Icon3>
                <Textdash>Staff</Textdash>
              </div>
              <Ico5><MdKeyboardArrowDown /></Ico5>
            </Branch>
        </NavLink>
        
        {show5 ? (
            <Booking>
                <NavLink to="">
                      <h3>Add Staff Details</h3>
                </NavLink>
            </Booking>
        ) : null}
        
        <NavLink to="" style={({isActive}) => {
            return {
                height: isActive ? "50px" : "50px",
                alignItems: isActive ? "center" : "center",
                display: isActive ? "flex" : "flex",
                color: isActive ? "#7f8dff" : "#526484",
                width: isActive ? "90%" : "90%",
                marginTop: isActive ? "8px" : "8px",
                paddingLeft: isActive ? "11px" : "15px",
                borderRadius: isActive ? "7px" : "7px",
                justifyContent: isActive ? "space-between" : "space-between"
            }
        }}>
            <Branch onClick={Toggle6}>
              <div className="flex">
                <Icon3><TbDiscountCheckFilled /></Icon3>
                <Textdash>Discounts</Textdash>
              </div>
              <Ico6><MdKeyboardArrowDown /></Ico6>
            </Branch>
        </NavLink>
        
        {show6 ? (
            <Booking>
                <NavLink to="">
                      <h3>Add Discount</h3>
                </NavLink>
            </Booking>
        ) : null}
    </Container>
  )
}

export default Sidebar
const Menu = styled.div`
    color: #526484;
    font-size: 26px;
    cursor: pointer;
`
const Top = styled.div`
    width: 100%;
    display: flex;
    height: 64px;
    border-bottom: 1px solid #e5e9f2;
    padding-left: 23px;
    align-items: center;
    img{
        margin-left: 22px;
        height: 35px;
    }
`
const Booking = styled.div`
    width: 90%;
    background-color: #fff;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    padding-left: 55px;
    h3{
        font-weight: 400;
        font-size: 15px;
        color: #526484;
        padding-bottom: 12px;
        &:hover{
            color: #7f8dff;
        }
    }
`
const Branches = styled.div`
    width: 90%;
    background-color: #fff;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    padding-left: 55px;
    h3{
        font-weight: 400;
        font-size: 15px;
        color: #526484;
        &:hover{
            color: #7f8dff;
        }
    }
`
const Ico6 = styled.div`
    margin-left: 100px;
    margin-top: 3px;
    font-size: 22px;
`
const Ico5 = styled.div`
    margin-left: 136px;
    margin-top: 3px;
    font-size: 22px;
`
const Ico4 = styled.div`
    margin-left: 121px;
    margin-top: 3px;
    font-size: 22px;
`
const Ico3 = styled.div`
    margin-left: 126px;
    margin-top: 3px;
    font-size: 22px;
`
const Ico2 = styled.div`
    margin-left: 103px;
    margin-top: 3px;
    font-size: 22px;
`
const Ico = styled.div`
    margin-left: 120px;
    margin-top: 3px;
    font-size: 22px;
`
const Branch = styled.div`
    display: flex;
`
const Textdash = styled.div`
    margin-left: 18px;
    font-weight: 700;
    font-size: 15px;
`
const Icon3 = styled.div`
    font-size: 20px;
`
const Icon = styled.div`
    font-size: 25px;
`
const Icon2 = styled.div`
    font-size: 25px;
`
const Dashboard = styled.div`
    display: flex;
    &:hover{
        color: #7f8dff;
    }
`

const Container = styled.div`
    width: 21%;
    height: 100vh;
    background-color: #fff;
    position: fixed;
    border-right: 1px solid #e5e9f2;
    display: flex;
    flex-direction: column;
    z-index: 5;
    align-items: center;
    overflow-y: auto;
`