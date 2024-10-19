import { useState } from "react"
import { FormControl, FormGroup, Input, InputLabel, styled, Typography, Button } from "@mui/material"
import { addUser } from '../service/api';


const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px
    }
`

const defaulvalue = {
    Fname: '',
    Lname: '',
    RNo: '',
    ENo: '',
    Phno: '',
    Email: '',
    Dept: '',
    Yr: ''

}


const AddUser = () => {

    const [ user, setUser ] = useState(defaulvalue)

    const onValueChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }

    const addUserDetails = async () => {
        await addUser(user);
    }


    return(
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Fname" />
            </FormControl>
            <FormControl>
                <InputLabel>Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Lname" />
            </FormControl>
            <FormControl>
                <InputLabel>Roll Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="RNo" />
            </FormControl>
            <FormControl>
                <InputLabel>Enrollment Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="ENo" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Phno" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Email" />
            </FormControl>
            <FormControl>
                <InputLabel>Department</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Dept" />
            </FormControl>
            <FormControl>
                <InputLabel>Year</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="Yr" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;