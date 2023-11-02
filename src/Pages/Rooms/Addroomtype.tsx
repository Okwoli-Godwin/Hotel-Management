import styled from "styled-components"
import {useState} from "react"

const Addroomtype = () => {
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
                <h1>Manage Room Type</h1>
            </Top>
            <Card>
                <Namehold>
                    <label>Room Name</label>
                    <input placeholder="Room Name"/>
                </Namehold>
                <Namehold>
                    <label>Room Price</label>
                    <input type="number" placeholder="Room Price"/>
                </Namehold>
                <Namehold>
                    <label>Status</label>
                    <select>
                        <option value="">Active</option>
                        <option value="">Inactive</option>
                    </select>
                </Namehold>
                <Namehold>
                    <label>Upload Photo</label>
                    <input type="file" id="pix"onChange={ImageOnchange} placeholder="Total Person"/>
                </Namehold>
                <Imagehold>
                    <img src={previwImage} />
                </Imagehold>
                <Note>
                    <label>Room Description</label>
                    <textarea></textarea>
                </Note>
                <Note>
                    <label>Room Facilities</label>
                    <textarea></textarea>
                </Note>
                <Button>
                    Add Room
                </Button>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Addroomtype
const Button = styled.button`
    width: 130px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #526484;
    border-radius: 3px;
    margin-top: 30px;
`
const Note = styled.div`
    width: 100%;
    flex-direction: column;
    margin-top: 25px;
    textarea{
        display: block;
        width: 100%;
    padding: 0.4375rem 1rem;
    height: 150px;
    font-size: .8125rem;
    resize: none;
    font-weight: 400;
    line-height: 1.25rem;
    margin-top: 5px;
    color: #3c4d62;
    appearance: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #dbdfea;
    border-radius: 4px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        outline-color: #7f8dff;
        outline-width: 3px;
    }
    label{
        font-size: .875rem;
        font-weight: 500;
        color: #344357;
        margin-bottom: 0.5rem;
    }
`
const Imagehold = styled.div`
    width: 100%;
    height: 300px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Namehold = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    select{
        display: block;
        width: 470px;
    padding: 0.4375rem 1rem;
    font-size: .8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: #3c4d62;
    appearance: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #dbdfea;
    border-radius: 4px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        outline-color: #7f8dff;
        outline-width: 3px;
    }
    input{
        display: block;
        width: 470px;
    padding: 0.4375rem 1rem;
    font-size: .8125rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: #3c4d62;
    appearance: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #dbdfea;
    border-radius: 4px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        outline-color: #7f8dff;
        outline-width: 3px;
}
    label{
        font-size: .875rem;
        font-weight: 500;
        color: #344357;
        margin-bottom: 0.5rem;
    }
`
const Card = styled.div`
    width: 100%;
    display: flex;
    border-radius: 3px;
    border: 1px solid #dbdfea;
    justify-content: space-between;
    background-color: #fff;
    padding: 20px;
    margin-top: 40px;
    flex-wrap: wrap;
    margin-bottom: 16px;
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