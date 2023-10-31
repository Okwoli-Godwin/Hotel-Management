import styled from "styled-components"
import img from "../../assets/hotel.jpeg"

const Signin = () => {
  return (
    <Container>
        <Wrapper>
            <Cardhold>
            <h2>Hotel Management</h2>
            
            <Emailhold>
                <h3>Email address</h3>
                <input type="text" placeholder="Enter your email"/>
            </Emailhold>
            
            <Password>
                <h3>Password</h3>
                <input type="password" placeholder="Enter your email"/>
            </Password>
            
            <Button>Log In</Button>
        </Cardhold>
        </Wrapper>
    </Container>
  )
}

export default Signin
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    padding-top: 135px;
    padding-bottom: 135px;
    padding-right: 30px;
    display: flex;
    justify-content: center;
`
const Button = styled.button`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #71B6F9;
    margin-top: 40px;
    border-radius: 4px;
`

const Password = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 35px;
    input{
        width: 100%;
        height: 40px;
        padding-left: 10px;
        border-radius: 3px;
        border: 1px solid #ced4da;
        outline: none;
        margin-top: 7px;
    }
`

const Emailhold = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 45px;
    input{
        width: 100%;
        height: 40px;
        padding-left: 10px;
        border-radius: 3px;
        border: 1px solid #ced4da;
        outline: none;
        margin-top: 7px;
    }
`

const Cardhold = styled.div`
    width: 430px;
    padding: 35px;
    background-color: #fff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        font-size: 24px;
        font-weight: 500;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    /* background-color: blue; */
    justify-content: center;
    align-items: center;
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`