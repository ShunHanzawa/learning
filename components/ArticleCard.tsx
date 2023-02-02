import { FC } from 'react';
import Link from 'next/link';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Typography,
    Button,
    CardActionArea,
    CardActions
} from '@mui/material';

type Props = {
    image: string;
    title: string;
    detail: string;
    url: string;
};

export const ArticleCard: FC<Props> = (props) => {
    const { image, title, detail, url } = props;
    return (
        <Card sx={{ maxWidth: 320, mb: 5, right: 0}}>
            <Link href={url}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {detail}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    );
};
