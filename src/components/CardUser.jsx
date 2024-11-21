import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CardUser = ({ user } ) => {
  return (
    <div>
        <Card sx={{ maxWidth: 300 }}>
         <CardActionArea>
           <CardMedia
          component="img"
          height="140"
          image="https://media.istockphoto.com/id/1883285965/photo/an-unrecognizable-businesswoman-working-in-her-office-on-her-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=jx0Npn3jxtWjL7WpGzKtfL58_OxprChBqUmUSXXF-gY="
          alt="user image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {user.company?.name }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default CardUser
