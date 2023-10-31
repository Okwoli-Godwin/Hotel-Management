import styled from "styled-components"
import img from "../assets/hotel2.jpeg"

const Optionpage = () => {
  return (
    <Container>
        <Card>
            <img src={img} />
            
            <Down>
                <h2>Abuja Hotel</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam corrupti quasi molestiae et eveniet, aperiam quibusdam tempore quia exercitationem voluptate illo, accusamus, vitae enim consequuntur.</p>
                
                <button>View Dashboard</button>
            </Down>
        </Card>
        
        <Card>
            <img src={img} />
            
            <Down>
                <h2>Abuja Hotel</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam corrupti quasi molestiae et eveniet, aperiam quibusdam tempore quia exercitationem voluptate illo, accusamus, vitae enim consequuntur.</p>
                
                <button>View Dashboard</button>
            </Down>
        </Card>
        
        <Card>
            <img src={img} />
            
            <Down>
                <h2>Abuja Hotel</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam corrupti quasi molestiae et eveniet, aperiam quibusdam tempore quia exercitationem voluptate illo, accusamus, vitae enim consequuntur.</p>
                
                <button>View Dashboard</button>
            </Down>
        </Card>
    </Container>
  )
}

export default Optionpage

const Down = styled.div`
    width: 100%;
    padding-left: 13px;
    padding-right: 13px;
    flex-direction: column;
    margin-top: 20px;
    button{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-color: #71B6F9;
        border-radius: 3px;
        margin-top: 20px;
    }
    p{
        margin-top: 10px;
        font-size: 15px;
    }
    h2{
        font-size: 20px;
        font-weight: 400;
    }
`

const Card = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    overflow: hidden;
    padding-bottom: 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-right: 20px;
    img{
        width: 100%;
        height: 270px;
        object-fit: cover;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    padding-top: 78px;
    padding-bottom: 78px;
    justify-content: center;
`

