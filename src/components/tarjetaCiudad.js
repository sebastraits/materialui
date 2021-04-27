import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ConnectApi from "./connectApi";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontWeight: "bold",
  },
  general: {
    textAlign: "center",
    fontStyle: "italic",
    color: theme.palette.text.secondary,
  },
}));


function TarjetaCiudad(cityCod) {
  const Mydata = ConnectApi(
    `http://api.openweathermap.org/data/2.5/forecast?id=${cityCod}&units=metric&lang=es&appid=82b6cfd3feed1056d07dedb88ab045d6`
  );
  
  const classes = useStyles();

let  cityName = "Loading", general = "", grados = "", st = ""

  if (Mydata) {
    cityName = Mydata.city.name;
    general = Mydata.list[0].weather[0].description;
    grados = Mydata.list[0].main.temp;
    st = Mydata.list[0].main.feels_like;
  } else {
    cityName ="Loading";
    general = "";
    grados= "";
    st = ""
  }

  return (
    <Card className={classes.root} variant="outlined">
      <Typography
        className={classes.title}
        variant="h3"
        component="h2"
        gutterBottom
      >
        {cityName}
      </Typography>
      <Typography
        className={classes.general}
        variant="h2"
        component="h2"
        gutterBottom
      >
        {general}
      </Typography>
      <Typography
        className={classes.title}
        variant="h5"
        component="h2"
        gutterBottom
      >
        {`Temp: ${grados} grados`}
      </Typography>
      <Typography
        className={classes.title}
        variant="h5"
        component="h2"
        gutterBottom
      >
        {`ST: ${st} grados`}
      </Typography>
    </Card>
  );
}

export default TarjetaCiudad;
