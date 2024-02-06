import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Class() {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                PSYCH 210
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                 labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        </>
    );
}
export default Class;