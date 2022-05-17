import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import projects from './data.json'

const imgs = {};

const MediaCard = ({project}) => {
  return (
    <Card sx={{ minHeight: 260, maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt={"test bio"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function BasicGrid() {
  // Create Img URLs Descriptions
  imgs["key1"] = "value1";
  imgs["key1"] = "value1";
  imgs["key1"] = "value1";
  imgs["key1"] = "value1";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <MediaCard project={project}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}