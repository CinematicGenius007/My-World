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
import {Link} from "react-router-dom";

const Login = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const customTheme = createTheme({
        typography: {
            "fontFamily": "Product Sans"
        }
    });

    return (
        <div className="py-16 w-full sm:max-w-md">
            <form className="flex flex-col gap-6 p-16 sm:p-8 sm:rounded-lg sm:bg-stone-200 sm:border border-g-blue">
                <h4 className="text-4xl md:text-5xl lg:text-6xl text-neutral-800 pb-6">login to experience the world within</h4>
                <ThemeProvider theme={customTheme}>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        size="small"
                    />
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
                </ThemeProvider>
                <button className="py-2 px-4 rounded bg-g-blue text-white">Login</button>
                <Link className="text-gray-700 mt-6" to="/auth/signup">Create an account -></Link>
            </form>
        </div>
    );
};

export default Login;