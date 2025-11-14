import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import products from "../../assets/coffee.js";
import Grid from "@mui/material/Grid";

const Coffee = () => {
  return (
    <Box sx={{ my: "5rem" }} id="coffee">
      <Typography variant="h5" sx={{ textAlign: "center", mb: 3 }}>
        Featured Coffee
      </Typography>

      <Grid container spacing={3} sx={{ justifyContent: "center", p: 3 }}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ width: 250, textAlign: "center", p: 2 }}>
              
              {/* Image */}
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
              />

              {/* Text */}
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{marginY: 1}}>${product.price.toFixed(2)}</Typography>
                <Button variant="contained" color="secondary">Buy Now</Button>
              </CardContent>

            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Coffee;
