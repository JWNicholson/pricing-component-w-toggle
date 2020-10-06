import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, CardContent, Typography } from '@material-ui/core';

import './Cards.css';

const useStyles = makeStyles({
  lightCard:{
      width:"340px",
      marginBottom:"32px",
      color:"hsl(233, 13%, 49%)"
     
  },
colorCard:{
    width:"340px",
    backgroundImage: "linear-gradient(160deg,  hsl(236, 72%, 79%),hsl(237, 63%, 64%))",
    marginBottom:"32px",
    color:"white",
},
    cardTitle:{
        marginBottom:"32px",
        fontWeight:"bolder",
        
    },
    cardText: {
        fontWeight: 700,
        color: "hsl(233, 13%, 49%)",
        fontSize: "0.8rem",
        margin:"16px",
    },

    colorCardText:{
        fontWeight: 700,
        color: "#f8f8ff",
        fontSize: "0.8rem",
        margin:"16px",
    },
    
    cardPricing:{
        fontWeight:700,
    },

    lightButton:{
        backgroundColor:"ghostwhite",
        fontWeight:"700",
        width:"95%",
        marginTop:"1.2rem",
    },
    darkButton: {
        backgroundColor:"hsl(237, 63%, 64%)",
        fontWeight:"700",
        color:"#f8f8ff",
        width:"98%",
        marginTop:"1.2rem",
    },

});

const Cards = () => {
    const classes = useStyles();
    return (
        <>
            <Card variant="outlined" className={classes.lightCard} >
                <CardContent >
                    <Typography className={classes.cardText} gutterBottom>
                        Basic
                    </Typography>
                    <Box borderBottom={1} >
                    <Typography variant="h3" className={classes.cardPricing}  gutterBottom>
                        $199.99
                    </Typography>
                    </Box>
                    
                    <Box borderBottom={1} >
                    <Typography className={classes.cardText} gutterBottom >
                        500GB Storage
                    </Typography>
                    </Box>

                    <Box borderBottom={1} >
                    <Typography className={classes.cardText} gutterBottom >
                        2 Users Allowed
                    </Typography>
                    </Box>

                    <Box borderBottom={1} gutterBottom >
                    <Typography className={classes.cardText}  >
                        Send up to 3 GB
                    </Typography>
                    </Box>

                    <Button variant="contained" disableElevation  className={classes.darkButton} >Learn More</Button>

                </CardContent>
            </Card>

            <Card variant="outlined" className={classes.colorCard}  >
                <CardContent >
                    <Typography className={classes.cardTitle}>
                        Professional
                    </Typography>

                    <Box borderBottom={1} >
                    <Typography variant="h3" className={classes.cardPricing}>
                        $249.99
                    </Typography>
                    </Box>

                    <Box borderBottom={1} >
                    <Typography className={classes.colorCardText}gutterBottom >
                        500GB Storage
                    </Typography>
                    </Box>

                    <Box borderBottom={1} >
                    <Typography className={classes.colorCardText}gutterBottom >
                        2 Users Allowed
                    </Typography>
                    </Box>

                    <Box borderBottom={1} >
                    <Typography className={classes.colorCardText}gutterBottom >
                        Send up to 3 GB
                    </Typography>
                    </Box>

                    <Button variant="contained" disableElevation className={classes.lightButton}>Learn More</Button>
                </CardContent>
            </Card>

            <Card variant="outlined" className={classes.lightCard} >
                <CardContent >
                    <Typography className={classes.cardTitle}>
                        Master
                    </Typography>

                    <Box borderBottom={1} >
                    <Typography variant="h3" className={classes.cardPricing}>
                        $399.99
                    </Typography>
                    </Box>

                    <Box borderBottom={1} >
                    <Typography className={classes.cardText}gutterBottom >
                        500GB Storage
                    </Typography>
                    </Box>

                    <Box borderBottom={1} >
                    <Typography className={classes.cardText}gutterBottom >
                        2 Users Allowed
                    </Typography>
                    </Box>

                    <Box borderBottom={1} >
                    <Typography className={classes.cardText}gutterBottom >
                        Send up to 3 GB
                    </Typography>
                    </Box>

                    <Button variant="contained" disableElevation className={classes.darkButton}>Learn More</Button>

                </CardContent>
            </Card>
        </>
    )
}

export default Cards;
