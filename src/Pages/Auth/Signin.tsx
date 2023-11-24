import styled from "styled-components"
import img from "../../assets/hotel.jpeg"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { AdminLogin } from "../../Api/Authapi/Adminapi";
import { MoonLoader } from "react-spinners"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Admin } from "../../Api/ReduxSate";
import Swal from "sweetalert2";

const Signin = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const schema: any = yup
        .object({
            username: yup.string().required("Email is required").email('Invalid Email'),
            password: yup.string().required("Password is required"),
        })
        .required();
    type formData = yup.InferType<typeof schema>;

    const {
        handleSubmit,
        reset,
        register,
    } = useForm<formData>({
        resolver: yupResolver(schema)
    })

    const postData = useMutation({
        mutationKey: ["admin"],
        mutationFn: AdminLogin,

        onSuccess: (data) => {
            dispatch(Admin(data?.data))
            Swal.fire({
                title: "Login successfull",
                html: "success",
                timer: 2000,
                icon: "success"
            });
            reset();
            navigate("/options")
        },

        onError: (error: any) => {
            console.log("error message", error)
            if (error.message === "Network Error") {
                Swal.fire({
                    title: error.message,
                    text: error.code,
                    timer: 2000,
                    icon: "error"
                });
            } else {
                Swal.fire({
                    title: "Wrong username or password",
                    timer: 2000,
                    text: "error",
                    icon: "error"
                })
            }
        }
    })

    const Submit = (event: any) => {
        event?.preventDefault();
        handleSubmit((data: any) => {
            postData.mutate(data)
        })();
    }

  return (
    <Container>
        <Wrapper>
            <Cardhold onSubmit={Submit}>
            <h2>Hotel Management</h2>
            
            <Emailhold>
                <h3>Email address</h3>
                <input 
                    {...register("username")}
                    required
                    type="email" 
                    placeholder="Enter your email"
                />
            </Emailhold>
            
            <Password>
                <h3>Password</h3>
                <input 
                    {...register("password")}
                    required
                    type="password" 
                    placeholder="Enter your email"
                />
            </Password>
            
            <Button type="submit">
                {postData?.isSuccess ? (
                    <MoonLoader size={30} color="#fff" />
                ) : (
                    "Log In"
                )}
            </Button>
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

const Cardhold = styled.form`
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