import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import TarjetaCiudad from "./tarjetaCiudad";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  title: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontWeight: "bold",
  },
}));

let cityCod = {
  rosario: "3838583",
  sanmarcos: "3837008",
  newdelhi: "1261481",
};

export default function CenteredGrid() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <Typography
            className={classes.title}
            variant="h4"
            component="h2"
            gutterBottom
          >
            Pronostico de 3 ciudades arbitrariamente elegidas
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {TarjetaCiudad(cityCod.rosario)}
        </Grid>
        <Grid item xs={4}>
          {TarjetaCiudad(cityCod.sanmarcos)}
        </Grid>
        <Grid item xs={4}>
          {TarjetaCiudad(cityCod.newdelhi)}
        </Grid>
      </Grid>
    </div>
  );
}
