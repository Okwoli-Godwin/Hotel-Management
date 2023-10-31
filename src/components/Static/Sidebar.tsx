import styled from "styled-components"
import img from "../../assets/hotellogo.png"
import { MdSpaceDashboard, MdKeyboardArrowDown } from "react-icons/md"
import {LiaHomeSolid} from "react-icons/lia"
import { NavLink } from "react-router-dom"
import {useState} from "react"

const Sidebar = () => {

    const [show1, setShow1] = useState(false)
    const Toggle = () => {
        setShow1(!show1)
    }
  return (
    <Container>
          <img src={img} />

          <Imagehold>
              <Box>
                  <img src=""/>
              </Box>
              <Text>Okwoli Godwin</Text>
              <Admin>Admin</Admin>
          </Imagehold>

        <NavLink to="/admin" style={({isActive}) => {
            return {
                height: isActive ? "50px" : "50px",
                alignItems: isActive ? "center" : "center",
                display: isActive ? "flex" : "flex",
                backgroundColor: isActive ? "#F0F3FB" : "",
                width: isActive ? "90%" : "90%",
                marginTop: isActive ? "30px" : "30px",
                paddingLeft: isActive ? "10px" : "5px",
                borderRadius : isActive ? "7px" : "7px"
            }
        }}>
            <Dashboard>
              <Icon><MdSpaceDashboard /></Icon>
              <Textdash>Dashboard</Textdash>
            </Dashboard>
        </NavLink>
        
        <NavLink to="/admin/branches" style={({isActive}) => {
            return {
                height: isActive ? "50px" : "50px",
                alignItems: isActive ? "center" : "center",
                display: isActive ? "flex" : "flex",
                backgroundColor: isActive ? "#F0F3FB" : "",
                width: isActive ? "90%" : "90%",
                marginTop: isActive ? "15px" : "15px",
                paddingLeft: isActive ? "10px" : "5px",
                paddingRight: isActive ? "10px" : "5px",
                borderRadius: isActive ? "7px" : "7px",
                justifyContent: isActive ? "space-between" : "space-between"
            }
        }}>
            <Branch onClick={Toggle}>
              <div className="flex">
                <Icon><LiaHomeSolid /></Icon>
                <Textdash>Branch</Textdash>
              </div>
              <Ico><MdKeyboardArrowDown /></Ico>
            </Branch>
        </NavLink>
        
        {show1 ? (
            <Branches>
                <h3>Add Branches</h3>
            </Branches>
        ) : null}
    </Container>
  )
}

export default Sidebar
const Branches = styled.div`
    width: 90%;
    background-color: #fff;
    margin-top: 7px;
    display: flex;
    flex-direction: column;
    padding-left: 25px;
    h3{
        font-size: 15px;
    }
`
const Ico = styled.div`
    margin-left: 90px;
    margin-top: 3px;
    font-size: 20px;
`
const Branch = styled.div`
    display: flex;
`
const Textdash = styled.div`
    margin-left: 18px
`
const Icon = styled.div`
    font-size: 23px;
    color: #060606;
`
const Dashboard = styled.div`
    display: flex;
    &:hover{
        background-color: #F0F3FB;
    }
`
const Admin = styled.div`
    font-size: 15px;
    color: #060606;
`
const Text = styled.div`
    margin-top: 6px;
    font-size: 17px;
    color: #060606;
`
const Box = styled.div`
    width: 80px;
    height: 80px;
    background-color: red;
    border-radius: 8px;
    border: 2px solid #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    img{
        
    }
`
const Imagehold = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Container = styled.div`
    width: 18%;
    height: 100vh;
    background-color: #fff;
    position: fixed;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    img{
        height: 130px;
        margin-top: -25px
    }
`