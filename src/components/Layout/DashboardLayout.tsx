import { Outlet } from "react-router-dom"
import { DashboardHead, Sidebar } from ".."
import styled from "styled-components"

const DashboardLayout = () => {
  return (
    <Container>
        <Sidebar />
        <Wrapper>
        <DashboardHead />
            <Outlet />
        </Wrapper>
    </Container>
  )
}

export default DashboardLayout

const Wrapper = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  /* justify-content: flex-end; */
`;