import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import projects from './data.json'

// Import Local Images
import imgAtemosta from '../../assets/atemosta.png'
import imgBrock from '../../assets/brock.png'
import imgImmria from '../../assets/monument-of-life.jpeg'
import imgMyujen from '../../assets/myujen.png'
import imgTolbana from '../../assets/tolbana.png'

const imgs = {};

const MediaCard = ({project}) => {
  return (
    <Card 
    sx={{ minHeight: 260, maxWidth: 345 }}
    onClick={() => window.open(`${project.url}`, '_blank')}
    style= {{cursor: 'pointer' }}
    >
      <CardMedia
        component="img"
        height="140"
        image={imgs[project.title]}
        alt={project.title}
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
  imgs["Atemosta Home"] = imgAtemosta;
  imgs["Brock Climb WebVR"] = imgBrock;
  imgs["Monument of Life (Immria)"] = imgImmria;
  imgs["Myujen"] = imgMyujen;
  imgs["Tolbana"] = imgTolbana;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <center>
        <Typography variant="h3" gutterBottom color="text.secondary">
          <b>🌀 Welcome to Atemosta's Portal Realm 🌀</b>
        </Typography>
        <Typography variant="h4" gutterBottom color="text.secondary">
          <i>Where would you like to go next?</i> ➡️
        </Typography>
        <br/>
      </center>
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
