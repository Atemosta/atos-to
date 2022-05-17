import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const MediaCard = ({title}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt={"test bio"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="medium" 
          variant="contained"
          disableSpacing={true}
        >
          Enter
        </Button>
      </CardActions>
    </Card>
  );
}

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <MediaCard title={"Atemosta Home"}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <MediaCard title={"Immria"}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <MediaCard title={"Myujen"}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <MediaCard title={"Tolbana"}/>
        </Grid>
      </Grid>
    </Box>
  );
}