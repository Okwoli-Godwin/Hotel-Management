import styled from "styled-components"
import {useState} from "react"

const Addbranch = () => {
    const [previwImage, setPreviewImage] = useState<string>("")
    const [foodImg, setfoodImg] = useState<File | null>(null);

  const ImageOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setfoodImg(file);
      const url = URL.createObjectURL(file);
      setPreviewImage(url)
    }
  }
  return (
    <Container>
        <Wrapper>
            <Top>
                <h1>Add Branches Overview</h1>
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
                    
                    <Holder3>
                        <h3 className="font-sm">Upload Images</h3>
                        <input
                        onChange={ImageOnchange}
                         type="file"
                         id="pix"
                         name="image" 
                         placeholder="Rice"
                         />
                         <label
                          htmlFor="pix"
                          >
                          Browse image</label>
                      </Holder3>
                </Card1>
                
                <Imagehold>
                    <img src={previwImage}/>
                    <button>Submit</button>
                </Imagehold>
            </Cardhold>
        </Wrapper>
    </Container>
  )
}

export default Addbranch
const Imagehold = styled.div`
    width: 48%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 7px;
    border: 1px solid #dbdfea;
    button{
        width: 100%;
        display: flex;
        height: 50px;
        margin-top: 40px;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-color: #526484;
    }
    img{
        width: 100%;
        height: 320px;
        /* background-color: red; */
        border-radius: 5px;
        object-fit: cover;
        /* border: 1px solid #dbdfea; */
    }
    h1{
        font-size: 22px;
        font-weight: 400;
    }
`
const Holder3 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    h3{
        color: #526484;
    }
    label{
        width: 100%;
        height: 40px;
        margin-top: 5px;
        color: #526484;
        border: 1px solid #d3d3d3;
        outline-color: #6777ef;
        outline-width: 2px;
        border-radius: 3px;
        transition: all 350ms ease-in-out;
        padding-left: 10px;
        display: flex;
        align-items: center;
    }
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
        display: none;
    }
`
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
    h3{
        color: #526484;
    }
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
    h3{
        color: #526484;
    }
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
    border: 1px solid #dbdfea;
    h1{
        font-size: 22px;
        font-weight: 400;
    }
`
const Cardhold = styled.div`
    width: 100%;
    display: flex;
    margin-top: 35px;
    justify-content: space-between;
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

