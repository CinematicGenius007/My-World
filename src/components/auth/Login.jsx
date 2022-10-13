import {
    createTheme,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    ThemeProvider
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";

const Login = ({onAuth}) => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        password: "",
        showPassword: false
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };
    const customTheme = createTheme({
        typography: {
            "fontFamily": "Product Sans"
        }
    });
    const enterTheUniverse = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:3030/users?username=${values.username}`)
            .then(result => result.data)
            .then(data => {
                if (data) {
                    for (let cred of data) {
                        console.log(cred);
                        if (bcrypt.compareSync(values.password, cred["password"])) {
                            console.log("passed")
                            onAuth({user: cred});
                            setTimeout(() => navigate("/"), 100);
                        }
                    }
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="py-16 w-full sm:max-w-md">
            <form onSubmit={enterTheUniverse} className="flex flex-col gap-6 p-16 sm:p-8 sm:rounded-lg sm:bg-stone-200 sm:border border-g-blue">
                <h4 className="text-4xl md:text-5xl lg:text-6xl text-neutral-800 pb-6">login to experience the world within</h4>
                <ThemeProvider theme={customTheme}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        size="small"
                        value={values.username}
                        onChange={handleChange("username")}
                        required
                    />
                    <FormControl size="small" variant="outlined" required>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange("password")}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={e => e.preventDefault()}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </ThemeProvider>
                <button type="submit" className="py-2 px-4 rounded bg-g-blue text-white">Login</button>
                <Link className="text-gray-700 mt-6" to="/auth/signup">Create an account -></Link>
            </form>
        </div>
    );
};

export default Login;