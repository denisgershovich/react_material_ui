import React, {ReactElement, FC} from "react";
import {Box, Button, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

const Home: FC<any> = (): ReactElement => {
    const HomePageButton = styled(Button)( ({theme})=> ({
        backgroundColor:theme.palette.primary.dark,
        padding:'1rem',
        color:'white',
        "&:hover":{
            backgroundColor:"lightBlue"
        }
    })) as typeof Button
    return (
        <Box sx={{
            display: 'flex',
            flexWrap:'wrap',
            justifyContent: 'center',
        }}>
            <Typography variant="h3" width={'100%'} textAlign='center'>Home</Typography>
            <HomePageButton>Home Page</HomePageButton>
        </Box>
    );
};

export default Home;