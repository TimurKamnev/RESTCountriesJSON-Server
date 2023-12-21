import {Link, useParams} from 'react-router-dom';
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { blueGrey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Detail.css';
import useFetchCountryQuery from "../../Hooks/useFetchCountryQuery.tsx";
import Typography from "@mui/material/Typography";

const DetailCountry = () => {
  // const [expanded, setExpanded] = React.useState(false);
  const { code } = useParams();
  const { isLoading, isError, data: countries = []} = useFetchCountryQuery(code);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error loading country data</p>;
    }

  //   interface ExpandMoreButtonProps extends IconButtonProps {
  //   isExpanded: boolean;
  // }

  // const ExpandMoreButton = styled((props: ExpandMoreButtonProps) => {
  //   const { isExpanded, ...other } = props;
  //   return <IconButton {...other} />;
  // })(({ theme, isExpanded }) => ({
  //   transform: !isExpanded ? 'rotate(0deg)' : 'rotate(180deg)',
  //   marginLeft: 'auto',
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // }));
  //
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <div className='container'>
        {!!countries.length && (
            <Card className='dotCon' sx={{ maxWidth: 360 }}>
                <CardHeader className='cardHeader'
                            avatar={
                                <Avatar sx={{ bgcolor: blueGrey[900] }} aria-label="recipe">
                                    T
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={countries[0].name?.common}
                            subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={countries[0].flags?.png}
                    alt={countries[0].name?.common}
                />
                <CardContent>
                    <Typography color="text.secondary">
                        <h1>{countries[0].name?.common}</h1>
                        <p>Native Name: {countries[0].name?.common}</p>
                        <p>Region: {countries[0].region}</p>
                        <p>Capital: {countries[0].capital}</p>
                        <p>Population: {countries[0].population}</p>
                        <p>Subregion: {countries[0].subregion}</p>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    {/*<ExpandMoreButton isExpanded={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">*/}
                    {/*  <ExpandMoreIcon />*/}
                    {/*</ExpandMoreButton>*/}
                </CardActions>
                {/*<Collapse in={expanded} timeout="auto" unmountOnExit>*/}
                {/*  <CardContent>*/}
                {/*    <Typography paragraph>About:</Typography>*/}
                {/*    <Typography paragraph>*/}
                {/*      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside*/}
                {/*      for 10 minutes.*/}
                {/*    </Typography>*/}
                {/*    <Typography paragraph>*/}
                {/*      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over*/}
                {/*      medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring*/}
                {/*      occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a*/}
                {/*      large plate and set aside, leaving chicken and chorizo in the pan. Add*/}
                {/*      pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,*/}
                {/*      stirring often until thickened and fragrant, about 10 minutes. Add saffron*/}
                {/*      broth and remaining 4 1/2 cups chicken broth; bring to a boil.*/}
                {/*    </Typography>*/}
                {/*    <Typography paragraph>*/}
                {/*      Add rice and stir very gently to distribute. Top with artichokes and peppers,*/}
                {/*      and cook without stirring, until most of the liquid is absorbed, 15 to 18*/}
                {/*      minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking*/}
                {/*      them down into the rice, and cook again without stirring, until mussels have*/}
                {/*      opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels*/}
                {/*      that don't open.)*/}
                {/*    </Typography>*/}
                {/*    <Typography>*/}
                {/*      Set aside off of the heat to let rest for 10 minutes, and then serve.*/}
                {/*    </Typography>*/}
                {/*  </CardContent>*/}
                {/*</Collapse>*/}
            </Card>
        )}
      <div className='parentBackBtn'>
        <div className='backBtn'>
          <Link to='/'>Back</Link>
        </div>
        </div>
    </div>
  );
};

export default DetailCountry;
