import { Outlet } from "react-router-dom"
import { DashboardHead, Sidebar, SideMenu } from ".."
import styled from "styled-components"

const DashboardLayout = () => {
  return (
    <Container>
        <DashboardHead />
        <Sidebar />
        <Wrapper>
            <Outlet />
        </Wrapper>
    </Container>
  )
}

export default DashboardLayout

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 70px;
  min-height: 100vh;
  /* background-color: red; */
  /* height: 200vh; */
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: flex-end; */
`;