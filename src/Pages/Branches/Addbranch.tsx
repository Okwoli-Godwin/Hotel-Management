import styled from "styled-components"

const Addbranch = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <h1>Add Branches</h1>
            </Top>
            
            <Cardhold>
                <Card1>
                    <h1>Branch Information</h1>
                    <Holder>
                          <h3>Name</h3>
                          <input type="text" />
                    </Holder>
                    
                    <Holder2>
                          <h3>Location</h3>
                          <input type="text" />
                    </Holder2>
                    
                    <Holder2>
                          <h3>Status</h3>
                          <select>
                              <option value="Active">Active</option>
                              <option value="Active">Inactive</option>
                          </select>
                    </Holder2>
                </Card1>
            </Cardhold>
        </Wrapper>
    </Container>
  )
}

export default Addbranch
const Holder2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    select{
        width: 100%;
        height: 40px;
        outline-color: #6777ef;
        outline-width: 2px;
        border-radius: 3px;
        padding-left: 10px;
        border: 1px solid #d3d3d3;
        margin-top: 5px;
    }
    h3{}
    input{
        width: 100%;
        height: 40px;
        margin-top: 5px;
        border: 1px solid #d3d3d3;
        outline-color: #6777ef;
        outline-width: 2px;
        border-radius: 3px;
        transition: all 350ms ease-in-out;
        padding-left: 10px;
    }
`
const Holder = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    h3{}
    input{
        width: 100%;
        height: 40px;
        margin-top: 5px;
        border: 1px solid #d3d3d3;
        outline-color: #6777ef;
        outline-width: 2px;
        border-radius: 3px;
        transition: all 350ms ease-in-out;
        padding-left: 10px;
    }
`
const Card1 = styled.div`
    width: 48%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 7px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    h1{
        font-size: 22px;
        font-weight: 400;
    }
`
const Cardhold = styled.div`
    width: 100%;
    display: flex;
    margin-top: 35px;;
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
        font-size: 24px;
        font-weight: 500;
        color: #6777ef;
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

