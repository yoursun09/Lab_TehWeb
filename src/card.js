import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
    const cardsData = [
        {
            src: "https://i.pinimg.com/originals/12/c1/af/12c1af5f15668ecb3616b453074d502a.jpg",
            height: "500",
            title: "Penguin",
            description: "Penguins are specialized marine birds adapted to living at sea. Some species spend as much as 75% of their lives in the sea – only coming ashore for breeding and molting. Penguin wings are paddle-like flippers used for swimming, not flying."
        },
        {
            src: "https://i.pinimg.com/564x/37/b4/e5/37b4e5bc1051844167ff296cf9a885a9.jpg",
            height: "500",
            title: "Seal",
            description: "The smallest seal species is the Galapagos Fur Seal (1m in length and 45kg in weight) whilst the largest is the Southern Elephant Seal which weighs a whopping 3,850kgs and measures up to 5m in length!"
        },
        {
            src: "https://i.pinimg.com/564x/9e/0c/64/9e0c64bd2d6e125f52b60e4ac8e93e33.jpg",
            height: "500",
            title: "Polar bear",
            description: "When a family finally heads toward the sea ice in the early spring, cubs can already be 15-30 pounds at just two to three months old. Polar bear milk is the fattiest found on land, at about 31 percent fat when the cubs are born. This provides enough calories to help cubs grow rapidly."
        }
    ];

    return (
        <>
            {cardsData.map((card) => (
                <Card key={card.title} sx={{ maxWidth: 345, boxShadow: '0px 4px 10px rgba(0,0,255,2)'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height={card.height}
                            image={card.src}
                            alt="card image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {card.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </>
    );
}
