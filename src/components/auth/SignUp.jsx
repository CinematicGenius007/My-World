import {useState} from "react";
import {
    createTheme,
    FormControl, IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    ThemeProvider
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {Link} from "react-router-dom";

const SignUp = () => {
    const customTheme = createTheme({typography: {"fontFamily": "Product Sans"}});

    const [values, setValues] = useState({
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState({regular: false, confirm: false});

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = (prop) => {
        setShowPassword({...showPassword, [prop]: !showPassword[prop]});
    };

    return (
        <div className="py-16 w-full sm:max-w-xl">
            <form className="flex flex-col gap-6 p-16 sm:p-8 sm:rounded-lg bg-stone-200 sm:border border-g-blue">
                <h4 className="text-4xl md:text-5xl lg:text-6xl text-neutral-800 pb-6">create an account</h4>
                <ThemeProvider theme={customTheme}>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <TextField
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                            size="small"
                        />
                        <TextField
                            id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                            size="small"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            size="small"
                        />
                        <TextField
                            id="outlined-basic"
                            label="Phone"
                            variant="outlined"
                            size="small"
                            type="phone"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <FormControl size="small" variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowPassword(!showPassword)}
                                            onMouseDown={e => e.preventDefault()}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <FormControl size="small" variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowPassword(!showPassword)}
                                            onMouseDown={e => e.preventDefault()}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </div>
                </ThemeProvider>
                <button className="py-2 px-4 rounded bg-g-blue text-white">Login</button>
                <Link className="text-gray-700 mt-6" to="/auth/login">Already have an account -></Link>
            </form>
        </div>
    );
};

export default SignUp;